/**
 * KetofolDoc Universal Study Highlighter Engine
 * iOS WebKit & Desktop Compatible
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
      console.warn("Highlighter local storage load error:", e);
      return {};
    }
  }

  saveHighlights() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.highlights));
      this.onSave(this.highlights);
    } catch (e) {
      console.warn("Highlighter save error:", e);
    }
  }

  setContext(contextId) {
    this.currentContext = contextId ? String(contextId) : null;
    this.hideToolbar();
  }

  initToolbar() {
    if (document.getElementById('kd-highlighter-toolbar')) {
      this.toolbar = document.getElementById('kd-highlighter-toolbar');
      return;
    }

    const toolbar = document.createElement('div');
    toolbar.id = 'kd-highlighter-toolbar';
    toolbar.className = 'fixed bottom-28 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 border border-slate-700/80 rounded-2xl px-3.5 py-2 shadow-2xl backdrop-blur-md flex items-center space-x-2.5 transition-all duration-200 opacity-0 pointer-events-none transform translate-y-4 select-none';

    // Prevent iOS Safari from clearing text selection when touching the toolbar
    const preventDeselect = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.isInteractingWithToolbar = true;
    };

    toolbar.addEventListener('mousedown', preventDeselect);
    toolbar.addEventListener('touchstart', preventDeselect, { passive: false });
    toolbar.addEventListener('pointerdown', preventDeselect);

    // Color Swatches
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

    // Remove Highlight / Eraser Button
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

      // Ensure the selection occurred inside an annotated container
      const anchorNode = sel.anchorNode;
      const highlightContainer = anchorNode?.nodeType === 1 
        ? anchorNode.closest('.highlightable-content') 
        : anchorNode?.parentElement?.closest('.highlightable-content');

      if (!highlightContainer) {
        this.hideToolbar();
        return;
      }

      // Clone and preserve the Range object immediately
      if (sel.rangeCount > 0) {
        this.currentRange = sel.getRangeAt(0).cloneRange();
        this.showToolbar();
      }
    };

    document.addEventListener('selectionchange', handleSelection);
    document.addEventListener('touchend', () => setTimeout(handleSelection, 80));
    document.addEventListener('mouseup', () => setTimeout(handleSelection, 50));
  }

  showToolbar() {
    if (!this.toolbar) return;
    this.toolbar.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    this.toolbar.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
  }

  hideToolbar() {
    if (!this.toolbar || this.isInteractingWithToolbar) return;
    this.toolbar.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    this.toolbar.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    this.currentRange = null;
  }

  finishInteraction() {
    this.hideToolbar();
    setTimeout(() => {
      this.isInteractingWithToolbar = false;
      const sel = window.getSelection();
      if (sel) sel.removeAllRanges();
    }, 150);
  }

  applyHighlight(colorName) {
    if (!this.currentContext) return;
    
    let selectedText = '';
    if (this.currentRange) {
      selectedText = this.currentRange.toString().trim();
    } else {
      const sel = window.getSelection();
      selectedText = sel ? sel.toString().trim() : '';
    }

    if (!selectedText) return;

    this.highlights[this.currentContext] = this.highlights[this.currentContext] || [];
    
    // Remove existing identical entries before pushing new color
    this.highlights[this.currentContext] = this.highlights[this.currentContext].filter(
      h => h.text !== selectedText
    );

    this.highlights[this.currentContext].push({
      text: selectedText,
      color: colorName,
      createdAt: Date.now()
    });

    this.saveHighlights();
    this.onChange();
  }

  removeHighlight() {
    if (!this.currentContext || !this.highlights[this.currentContext]) return;

    let selectedText = '';
    if (this.currentRange) {
      selectedText = this.currentRange.toString().trim();
    } else {
      const sel = window.getSelection();
      selectedText = sel ? sel.toString().trim() : '';
    }

    if (!selectedText) return;

    this.highlights[this.currentContext] = this.highlights[this.currentContext].filter(
      h => !h.text.includes(selectedText) && !selectedText.includes(h.text)
    );

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

    // Sort by text length descending so sub-strings don't break larger highlighted blocks
    const sorted = [...ctxHighlights].sort((a, b) => b.text.length - a.text.length);

    sorted.forEach(({ text, color }) => {
      if (!text || text.length < 2) return;
      
      const colObj = this.colors.find(c => c.name === color) || this.colors[0];
      const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Match text outside HTML tags
      const regex = new RegExp(`(?![^<]*>)(${escaped})`, 'gi');
      rendered = rendered.replace(regex, `<mark class="rounded px-0.5" style="background-color: ${colObj.bg}; border-bottom: 2px solid ${colObj.border}; color: inherit;">$1</mark>`);
    });

    return rendered;
  }
}
