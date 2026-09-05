/**
 * KetofolDoc Universal Study Highlighter Engine
 * Context-Anchored Single-Occurrence Highlighting (iOS & Desktop Compatible)
 */

export class StudyHighlighter {
  constructor(options = {}) {
    this.storageKey = options.storageKey || 'kd_highlights_data';
    this.onChange = options.onChange || (() => {});
    this.onSave = options.onSave || (() => {});

    this.currentContext = null;
    this.currentRange = null;
    this.isInteractingWithToolbar = false;
    this.highlights = this.loadHighlights();

    this.colors = [
      { name: 'emerald', bg: 'rgba(52, 211, 153, 0.35)', border: '#34d399', btnClass: 'bg-emerald-400' },
      { name: 'amber',   bg: 'rgba(251, 191, 36, 0.35)',  border: '#fbbf24', btnClass: 'bg-amber-400' },
      { name: 'purple',  bg: 'rgba(192, 132, 252, 0.35)', border: '#c084fc', btnClass: 'bg-purple-400' },
      { name: 'blue',    bg: 'rgba(96, 165, 250, 0.35)',  border: '#60a5fa', btnClass: 'bg-blue-400' }
    ];

    this.initToolbar();
    this.initEventListeners();
  }

  loadHighlights() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.warn('Highlighter local storage load error:', e);
      return {};
    }
  }

  saveHighlights() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.highlights));
      this.onSave(this.highlights);
    } catch (e) {
      console.warn('Highlighter save error:', e);
    }
  }

  /**
   * Updates the active context ID and cleans up floating toolbars & text selections.
   * Centralizes teardown across all app platforms on deck/question changes.
   */
  setContext(contextId) {
    this.currentContext = contextId ? String(contextId) : null;
    this.hideToolbar(true);

    try {
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        sel.removeAllRanges();
      }
    } catch (e) {
      // Ignore environments where getSelection is unavailable
    }
  }

  initToolbar() {
    // Replace any existing toolbar in the DOM to avoid orphaned listeners
    const existing = document.getElementById('kd-highlighter-toolbar');
    if (existing) {
      existing.remove();
    }

    const toolbar = document.createElement('div');
    toolbar.id = 'kd-highlighter-toolbar';
    toolbar.className = 'fixed bottom-28 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 border border-slate-700/80 rounded-2xl px-3.5 py-2 shadow-2xl backdrop-blur-md flex items-center space-x-2.5 transition-all duration-200 opacity-0 pointer-events-none transform translate-y-4 select-none';

    const preventDeselect = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.isInteractingWithToolbar = true;
    };

    toolbar.addEventListener('mousedown', preventDeselect);
    toolbar.addEventListener('touchstart', preventDeselect, { passive: false });
    toolbar.addEventListener('pointerdown', preventDeselect);

    this.colors.forEach(col => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-7 h-7 rounded-full ${col.btnClass} shadow-md active:scale-90 transition border border-white/20 shrink-0`;
      btn.setAttribute('data-color', col.name);

      btn.addEventListener('pointerup', (e) => {
        e.preventDefault();
        this.applyHighlight(col.name);
        this.finishInteraction();
      });

      toolbar.appendChild(btn);
    });

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'w-7 h-7 rounded-full bg-slate-800 border border-slate-600 text-rose-400 hover:text-rose-300 flex items-center justify-center active:scale-90 transition shrink-0';
    removeBtn.innerHTML = `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;

    removeBtn.addEventListener('pointerup', (e) => {
      e.preventDefault();
      this.removeHighlight();
      this.finishInteraction();
    });

    toolbar.appendChild(removeBtn);
    document.body.appendChild(toolbar);
    this.toolbar = toolbar;
  }

  initEventListeners() {
    const handleSelection = () => {
      if (this.isInteractingWithToolbar) return;

      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.toString().trim()) {
        if (!this.isInteractingWithToolbar) {
          this.hideToolbar();
        }
        return;
      }

      if (sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);

      // Validate that the selection is anchored within .highlightable-content
      let container = range.commonAncestorContainer;
      if (container.nodeType !== 1) {
        container = container.parentElement;
      }
      const highlightContainer = container?.closest('.highlightable-content');

      if (!highlightContainer) {
        this.hideToolbar();
        return;
      }

      this.currentRange = range.cloneRange();
      this.showToolbar();
    };

    document.addEventListener('selectionchange', handleSelection);
    document.addEventListener('touchend', () => setTimeout(handleSelection, 80));
    document.addEventListener('mouseup', () => setTimeout(handleSelection, 50));
  }

  getRangeContext(range) {
    if (!range) return { exact: '', prefix: '', suffix: '' };

    const exact = range.toString().trim();
    if (!exact) return { exact: '', prefix: '', suffix: '' };

    let container = range.commonAncestorContainer;
    while (container && container.nodeType !== 1) {
      container = container.parentElement;
    }
    container = container?.closest('.highlightable-content') || container || document.body;

    let prefix = '';
    let suffix = '';

    try {
      const preRange = document.createRange();
      preRange.selectNodeContents(container);
      preRange.setEnd(range.startContainer, range.startOffset);
      prefix = preRange.toString().slice(-30);

      const postRange = document.createRange();
      postRange.selectNodeContents(container);
      postRange.setStart(range.endContainer, range.endOffset);
      suffix = postRange.toString().slice(0, 30);
    } catch (e) {
      console.warn('Could not calculate surrounding text context:', e);
    }

    return { exact, prefix, suffix };
  }

  showToolbar() {
    if (!this.toolbar) return;
    this.toolbar.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    this.toolbar.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
  }

  hideToolbar(force = false) {
    if (!this.toolbar) return;
    if (this.isInteractingWithToolbar && !force) return;

    this.isInteractingWithToolbar = false;
    this.toolbar.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    this.toolbar.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    this.currentRange = null;
  }

  finishInteraction() {
    this.hideToolbar(true);
    setTimeout(() => {
      this.isInteractingWithToolbar = false;
      try {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
          sel.removeAllRanges();
        }
      } catch (e) {}
    }, 150);
  }

  applyHighlight(colorName) {
    if (!this.currentContext) return;

    const { exact, prefix, suffix } = this.getRangeContext(this.currentRange);
    if (!exact) return;

    this.highlights[this.currentContext] = this.highlights[this.currentContext] || [];

    // Remove duplicate entry if identical context was already saved
    this.highlights[this.currentContext] = this.highlights[this.currentContext].filter(
      h => !(h.text === exact && h.prefix === prefix && h.suffix === suffix)
    );

    this.highlights[this.currentContext].push({
      id: 'hl_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      text: exact,
      prefix: prefix,
      suffix: suffix,
      color: colorName,
      createdAt: Date.now()
    });

    this.saveHighlights();
    this.onChange();
  }

  removeHighlight() {
    if (!this.currentContext || !this.highlights[this.currentContext]) return;

    const { exact, prefix, suffix } = this.getRangeContext(this.currentRange);
    if (!exact) return;

    const cleanPre = prefix.trim();
    const cleanPost = suffix.trim();

    this.highlights[this.currentContext] = this.highlights[this.currentContext].filter(hl => {
      const matchText = hl.text === exact || exact.includes(hl.text) || hl.text.includes(exact);
      if (!matchText) return true;

      const matchPre = !cleanPre || !hl.prefix || hl.prefix.includes(cleanPre) || cleanPre.includes(hl.prefix);
      const matchPost = !cleanPost || !hl.suffix || hl.suffix.includes(cleanPost) || cleanPost.includes(hl.suffix);

      // If text matches and surrounding context aligns, remove it
      if (matchPre && matchPost) return false;
      return true;
    });

    this.saveHighlights();
    this.onChange();
  }

  renderHighlights(htmlContent, contextId) {
    if (!htmlContent) return '';
    const ctx = contextId ? String(contextId) : this.currentContext;
    if (!ctx || !this.highlights[ctx] || this.highlights[ctx].length === 0) {
      return htmlContent;
    }

    let rendered = String(htmlContent);
    const ctxHighlights = this.highlights[ctx];

    const makeToken = (str) => {
      if (!str) return '';
      const parts = str.trim().split(/\s+/).filter(Boolean);
      if (parts.length === 0) return '';
      return parts.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('(?:\\s+|<[^>]+>)*');
    };

    // Sort by text length descending so longer phrases match before sub-words
    const sorted = [...ctxHighlights].sort((a, b) => b.text.length - a.text.length);

    sorted.forEach((hl) => {
      const { text, prefix, suffix, color } = hl;
      if (!text || text.trim().length === 0) return;

      const colObj = this.colors.find(c => c.name === color) || this.colors[0];
      const markStart = `<mark class="rounded px-0.5" style="background-color: ${colObj.bg}; border-bottom: 2px solid ${colObj.border}; color: inherit;">`;
      const markEnd = `</mark>`;

      const exactToken = makeToken(text);
      const prefixToken = makeToken(prefix);
      const suffixToken = makeToken(suffix);

      let replaced = false;

      // 1. Precise Match: Prefix + Target Text + Suffix
      if (prefixToken && suffixToken) {
        const fullRegex = new RegExp(`(${prefixToken}(?:\\s+|<[^>]+>)*)(${exactToken})((?:\\s+|<[^>]+>)*${suffixToken})`, 'i');
        if (fullRegex.test(rendered)) {
          rendered = rendered.replace(fullRegex, (match, p1, p2, p3) => `${p1}${markStart}${p2}${markEnd}${p3}`);
          replaced = true;
        }
      }

      // 2. Prefix Anchor Match
      if (!replaced && prefixToken) {
        const preRegex = new RegExp(`(${prefixToken}(?:\\s+|<[^>]+>)*)(${exactToken})`, 'i');
        if (preRegex.test(rendered)) {
          rendered = rendered.replace(preRegex, (match, p1, p2) => `${p1}${markStart}${p2}${markEnd}`);
          replaced = true;
        }
      }

      // 3. Suffix Anchor Match
      if (!replaced && suffixToken) {
        const postRegex = new RegExp(`(${exactToken})((?:\\s+|<[^>]+>)*${suffixToken})`, 'i');
        if (postRegex.test(rendered)) {
          rendered = rendered.replace(postRegex, (match, p1, p2) => `${markStart}${p1}${markEnd}${p2}`);
          replaced = true;
        }
      }

      // 4. Single-occurrence fallback only for legacy unanchored highlights
      if (!replaced && !prefixToken && !suffixToken) {
        const fallbackRegex = new RegExp(`(?![^<]*>)(${exactToken})`, 'i');
        if (fallbackRegex.test(rendered)) {
          rendered = rendered.replace(fallbackRegex, (match, p1) => `${markStart}${p1}${markEnd}`);
        }
      }
    });

    return rendered;
  }
}
