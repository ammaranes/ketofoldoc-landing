/**
 * KetofolDoc Universal Study Highlighter Engine
 * Supports Desktop & Mobile (iOS / Android), LocalStorage, and Firestore Real-time Sync
 */

export class StudyHighlighter {
  constructor(options = {}) {
    this.storageKey = options.storageKey || 'kd_user_highlights';
    this.onSave = options.onSave || null; // Callback for Firebase Sync
    this.highlights = this.loadHighlights();
    this.currentContextId = null;
    this.toolbar = null;
    this.activeRange = null;

    this.colors = {
      yellow: 'bg-amber-400/35 text-amber-100 rounded px-0.5 border-b border-amber-400',
      green: 'bg-emerald-400/35 text-emerald-100 rounded px-0.5 border-b border-emerald-400',
      rose: 'bg-rose-400/35 text-rose-100 rounded px-0.5 border-b border-rose-400'
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
    } catch (e) {
      console.warn('Highlighter storage error:', e);
    }
  }

  setContext(contextId) {
    this.currentContextId = contextId;
    this.hideToolbar();
  }

  initDOM() {
    // Create floating action toolbar
    const bar = document.createElement('div');
    bar.id = 'kd-highlight-toolbar';
    bar.className = 'fixed hidden z-50 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl p-1.5 flex items-center space-x-1.5 transition-opacity duration-150';
    bar.innerHTML = `
      <button type="button" data-color="yellow" class="w-6 h-6 rounded-full bg-amber-400 hover:scale-110 active:scale-95 transition shadow-sm border border-amber-300" title="Highlight Yellow"></button>
      <button type="button" data-color="green" class="w-6 h-6 rounded-full bg-emerald-400 hover:scale-110 active:scale-95 transition shadow-sm border border-emerald-300" title="Highlight Green"></button>
      <button type="button" data-color="rose" class="w-6 h-6 rounded-full bg-rose-400 hover:scale-110 active:scale-95 transition shadow-sm border border-rose-300" title="Highlight Rose"></button>
      <div class="w-px h-4 bg-slate-700 mx-1"></div>
      <button type="button" data-action="remove" class="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition" title="Clear Highlight">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    `;
    document.body.appendChild(bar);
    this.toolbar = bar;

    // Handle Toolbar Actions
    this.toolbar.querySelectorAll('button[data-color]').forEach(btn => {
      btn.onmousedown = (e) => e.preventDefault(); // Prevent focus loss
      btn.onclick = (e) => {
        e.preventDefault();
        this.applySelectedHighlight(btn.dataset.color);
      };
    });

    const removeBtn = this.toolbar.querySelector('button[data-action="remove"]');
    removeBtn.onmousedown = (e) => e.preventDefault();
    removeBtn.onclick = (e) => {
      e.preventDefault();
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
      if (text.length < 2) {
        this.hideToolbar();
        return;
      }

      // Verify selection is within a highlightable container
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
  }

  showToolbar(range) {
    if (!range) return;
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;

    this.toolbar.classList.remove('hidden');
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

  hideToolbar() {
    if (this.toolbar) {
      this.toolbar.classList.add('hidden');
    }
  }

  applySelectedHighlight(colorKey) {
    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : '';
    if (!text || !this.currentContextId) return;

    this.highlights[this.currentContextId] = this.highlights[this.currentContextId] || [];
    
    // Remove duplicate entry if it exists
    this.highlights[this.currentContextId] = this.highlights[this.currentContextId].filter(h => h.text !== text);
    
    // Add new highlight
    this.highlights[this.currentContextId].push({ text, color: colorKey });
    this.saveHighlights();
    this.hideToolbar();
    window.getSelection()?.removeAllRanges();

    // Trigger re-render of current active container
    this.refreshCurrentView();
  }

  removeSelectedHighlight() {
    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : '';
    if (!text || !this.currentContextId || !this.highlights[this.currentContextId]) return;

    this.highlights[this.currentContextId] = this.highlights[this.currentContextId].filter(
      h => !h.text.includes(text) && !text.includes(h.text)
    );

    this.saveHighlights();
    this.hideToolbar();
    window.getSelection()?.removeAllRanges();
    this.refreshCurrentView();
  }

  /**
   * Applies all saved highlights to an HTML string
   */
  renderHighlights(rawHtml, contextId = this.currentContextId) {
    if (!rawHtml || !contextId) return rawHtml || '';
    const list = this.highlights[contextId] || [];
    if (list.length === 0) return rawHtml;

    let highlightedHtml = String(rawHtml);

    // Sort by longest text first to prevent substring collision
    const sortedList = [...list].sort((a, b) => b.text.length - a.text.length);

    sortedList.forEach(item => {
      const escaped = item.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      const colorClass = this.colors[item.color] || this.colors.yellow;
      highlightedHtml = highlightedHtml.replace(regex, `<mark class="${colorClass}">$1</mark>`);
    });

    return highlightedHtml;
  }

  refreshCurrentView() {
    document.querySelectorAll('[data-highlight-context]').forEach(el => {
      const raw = el.getAttribute('data-raw-text');
      const ctx = el.getAttribute('data-highlight-context');
      if (raw && ctx) {
        el.innerHTML = this.renderHighlights(raw, ctx);
      }
    });
  }
}
