/**
 * KetofolDoc Universal Study Highlighter Engine
 * Desktop Precision Floating + Mobile Conflict-Free Bottom Docking
 */

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function makeTagTolerantRegex(str) {
  if (!str) return '';
  return str
    .trim()
    .split(/\s+/)
    .map(word => {
      return word
        .split('')
        .map(char => escapeRegExp(char))
        .join('(?:<[^>]+>)*');
    })
    .join('(?:\\s+|<[^>]+>)+');
}

export class StudyHighlighter {
  constructor(options = {}) {
    this.storageKey = options.storageKey || 'kd_user_highlights';
    this.onSave = options.onSave || null;
    this.onChange = options.onChange || null;
    this.highlights = this.loadHighlights();
    this.currentContextId = null;
    this.toolbar = null;
    this.activeRange = null;

    this.colors = {
      blue: 'bg-blue-500/25 text-blue-100 rounded px-0.5 border-b border-blue-400/80',
      emerald: 'bg-emerald-500/25 text-emerald-100 rounded px-0.5 border-b border-emerald-400/80',
      amber: 'bg-amber-500/25 text-amber-100 rounded px-0.5 border-b border-amber-400/80',
      purple: 'bg-purple-500/25 text-purple-100 rounded px-0.5 border-b border-purple-400/80'
    };

    this.initDOM();
    this.attachEventListeners();
  }

  loadHighlights() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || {};
    } catch (e) {
      return {};
    }
  }

  saveHighlights() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.highlights));
      if (typeof this.onSave === 'function') {
        this.onSave(this.highlights);
      }
      if (typeof this.onChange === 'function') {
        this.onChange();
      }
    } catch (e) {
      console.warn('Highlighter storage error:', e);
    }
  }

  setContext(contextId) {
    this.currentContextId = contextId;
    this.hideToolbar();
  }

  initDOM() {
    if (document.getElementById('kd-highlight-toolbar')) {
      this.toolbar = document.getElementById('kd-highlight-toolbar');
      return;
    }

    const bar = document.createElement('div');
    bar.id = 'kd-highlight-toolbar';
    bar.className = 'fixed hidden z-[90] bg-slate-900/95 backdrop-blur-xl border border-slate-700/90 rounded-2xl shadow-2xl p-2 sm:p-1.5 flex items-center space-x-2 sm:space-x-1.5 transition-all duration-200 select-none shadow-black/80 [-webkit-touch-callout:none]';
    bar.innerHTML = `
      <button type="button" data-color="blue" class="w-7 h-7 sm:w-5 sm:h-5 rounded-full bg-blue-500 hover:scale-110 active:scale-95 transition shadow-sm border border-blue-400 flex items-center justify-center" title="Highlight Blue"></button>
      <button type="button" data-color="emerald" class="w-7 h-7 sm:w-5 sm:h-5 rounded-full bg-emerald-500 hover:scale-110 active:scale-95 transition shadow-sm border border-emerald-400 flex items-center justify-center" title="Highlight Emerald"></button>
      <button type="button" data-color="amber" class="w-7 h-7 sm:w-5 sm:h-5 rounded-full bg-amber-400 hover:scale-110 active:scale-95 transition shadow-sm border border-amber-300 flex items-center justify-center" title="Highlight Amber"></button>
      <button type="button" data-color="purple" class="w-7 h-7 sm:w-5 sm:h-5 rounded-full bg-purple-500 hover:scale-110 active:scale-95 transition shadow-sm border border-purple-400 flex items-center justify-center" title="Highlight Purple"></button>
      <div class="w-px h-5 sm:h-4 bg-slate-700 mx-1"></div>
      <button type="button" data-action="remove" class="p-1.5 sm:p-1 rounded-xl text-slate-400 hover:text-rose-400 active:bg-slate-800 transition" title="Clear Highlight">
        <svg class="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    document.body.appendChild(bar);
    this.toolbar = bar;

    this.toolbar.querySelectorAll('button[data-color]').forEach(btn => {
      btn.onmousedown = (e) => e.preventDefault();
      btn.ontouchstart = (e) => e.stopPropagation();
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.applySelectedHighlight(btn.dataset.color);
      };
    });

    const removeBtn = this.toolbar.querySelector('button[data-action="remove"]');
    removeBtn.onmousedown = (e) => e.preventDefault();
    removeBtn.ontouchstart = (e) => e.stopPropagation();
    removeBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.removeSelectedHighlight();
    };
  }

  attachEventListeners() {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        this.hideToolbar();
        return;
      }

      const text = selection.toString().trim();
      if (text.length < 1) {
        this.hideToolbar();
        return;
      }

      const anchorNode = selection.anchorNode;
      const container = anchorNode?.nodeType === 3 ? anchorNode.parentElement : anchorNode;
      if (!container || !container.closest('.highlightable-content')) {
        this.hideToolbar();
        return;
      }

      this.activeRange = selection.getRangeAt(0);
      this.showToolbar(this.activeRange);
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', () => setTimeout(handleSelection, 100));

    document.addEventListener('mousedown', (e) => {
      if (this.toolbar && !this.toolbar.contains(e.target)) {
        this.hideToolbar();
      }
    });
    
    document.addEventListener('touchstart', (e) => {
      if (this.toolbar && !this.toolbar.contains(e.target)) {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
          this.hideToolbar();
        }
      }
    });
  }

  showToolbar(range) {
    if (!range || !this.toolbar) return;
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;

    this.toolbar.classList.remove('hidden');

    const isMobile = window.innerWidth < 768 || ('ontouchstart' in window);

    if (isMobile) {
      // 📱 Mobile / iOS: Dock as an accessible bottom floating pill
      this.toolbar.style.top = 'auto';
      this.toolbar.style.bottom = '88px';
      this.toolbar.style.left = '50%';
      this.toolbar.style.transform = 'translateX(-50%)';
    } else {
      // 💻 Desktop: Float precision tooltip directly above text
      this.toolbar.style.bottom = 'auto';
      this.toolbar.style.transform = 'none';

      const toolbarRect = this.toolbar.getBoundingClientRect();
      let top = rect.top - toolbarRect.height - 10;
      let left = rect.left + (rect.width / 2) - (toolbarRect.width / 2);

      if (top < 10) top = rect.bottom + 10;
      if (left < 10) left = 10;
      if (left + toolbarRect.width > window.innerWidth - 10) {
        left = window.innerWidth - toolbarRect.width - 10;
      }

      this.toolbar.style.top = `${top}px`;
      this.toolbar.style.left = `${left}px`;
    }
  }

  hideToolbar() {
    if (this.toolbar) {
      this.toolbar.classList.add('hidden');
    }
  }

  applySelectedHighlight(colorKey) {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const exact = selection.toString().trim();
    if (!exact || !this.currentContextId) return;

    const anchorNode = selection.anchorNode;
    const container = (anchorNode.nodeType === 3 ? anchorNode.parentElement : anchorNode)?.closest('.highlightable-content');
    
    let prefix = '';
    let suffix = '';

    if (container) {
      try {
        const range = selection.getRangeAt(0);
        
        const preRange = document.createRange();
        preRange.selectNodeContents(container);
        preRange.setEnd(range.startContainer, range.startOffset);
        prefix = preRange.toString().slice(-30);

        const postRange = document.createRange();
        postRange.selectNodeContents(container);
        postRange.setStart(range.endContainer, range.endOffset);
        suffix = postRange.toString().slice(0, 30);
      } catch (e) {
        console.warn('Could not extract surrounding context:', e);
      }
    }

    const targetContextId = container?.getAttribute('data-highlight-context') || this.currentContextId;
    this.highlights[targetContextId] = this.highlights[targetContextId] || [];

    this.highlights[targetContextId].push({
      id: 'hl_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      text: exact,
      prefix: prefix,
      suffix: suffix,
      color: colorKey
    });

    this.saveHighlights();
    this.hideToolbar();
    window.getSelection()?.removeAllRanges();
  }

  removeSelectedHighlight() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    const text = selection.toString().trim();
    
    const anchorNode = selection.anchorNode;
    const container = (anchorNode.nodeType === 3 ? anchorNode.parentElement : anchorNode)?.closest('.highlightable-content');
    const targetContextId = container?.getAttribute('data-highlight-context') || this.currentContextId;

    if (!text || !targetContextId || !this.highlights[targetContextId]) return;

    this.highlights[targetContextId] = this.highlights[targetContextId].filter(
      h => !h.text.includes(text) && !text.includes(h.text)
    );

    this.saveHighlights();
    this.hideToolbar();
    window.getSelection()?.removeAllRanges();
  }

  renderHighlights(rawHtml, contextId = this.currentContextId) {
    if (!rawHtml || !contextId) return rawHtml || '';
    const list = this.highlights[contextId] || [];
    if (list.length === 0) return rawHtml;

    let highlightedHtml = String(rawHtml);

    list.forEach(item => {
      const pRegex = item.prefix ? makeTagTolerantRegex(item.prefix) : '';
      const tRegex = makeTagTolerantRegex(item.text);
      const sRegex = item.suffix ? makeTagTolerantRegex(item.suffix) : '';
      const colorClass = this.colors[item.color] || this.colors.blue;

      let regex;
      if (pRegex && sRegex) {
        regex = new RegExp(`(${pRegex}(?:\\s+|<[^>]+>)*)(${tRegex})((?:\\s+|<[^>]+>)*${sRegex})`, 'i');
        highlightedHtml = highlightedHtml.replace(regex, (m, p1, p2, p3) => `${p1}<mark class="${colorClass}">${p2}</mark>${p3}`);
      } else if (pRegex) {
        regex = new RegExp(`(${pRegex}(?:\\s+|<[^>]+>)*)(${tRegex})`, 'i');
        highlightedHtml = highlightedHtml.replace(regex, (m, p1, p2) => `${p1}<mark class="${colorClass}">${p2}</mark>`);
      } else if (sRegex) {
        regex = new RegExp(`(${tRegex})((?:\\s+|<[^>]+>)*${sRegex})`, 'i');
        highlightedHtml = highlightedHtml.replace(regex, (m, p1, p2) => `<mark class="${colorClass}">${p1}</mark>${p2}`);
      } else {
        regex = new RegExp(`(?![^<]*>)(${tRegex})`, 'i');
        highlightedHtml = highlightedHtml.replace(regex, `<mark class="${colorClass}">$1</mark>`);
      }
    });

    return highlightedHtml;
  }
}
