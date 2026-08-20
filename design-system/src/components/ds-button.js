class DSButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled'];
  }

  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; font-family: var(--font-family, system-ui, sans-serif); }
        button {
          font: inherit;
          border: none;
          cursor: pointer;
          border-radius: var(--ds-border-radius, 8px);
          padding: var(--ds-button-padding-md, 10px 16px);
          background: var(--color-primary);
          color: var(--color-on-primary);
          transition: box-shadow .12s ease, transform .06s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        button:focus { outline: 3px solid color-mix(in srgb, var(--color-primary) 20%, transparent); outline-offset: 2px; }
        button:active { transform: translateY(1px); }

        /* Variants */
        :host([variant="primary"]) button { background: var(--color-primary); color: var(--color-on-primary); }
        :host([variant="secondary"]) button { background: var(--color-secondary); color: var(--color-on-secondary); }
        :host([variant="ghost"]) button { background: transparent; color: var(--color-neutral-100); box-shadow: none; }
        :host([variant="destructive"]) button { background: #ef4444; color: white; }

        /* Sizes */
        :host([size="xs"]) button { padding: var(--ds-button-padding-xs); font-size: var(--font-size-xs); }
        :host([size="sm"]) button { padding: var(--ds-button-padding-sm); font-size: var(--font-size-sm); }
        :host([size="md"]) button { padding: var(--ds-button-padding-md); font-size: var(--font-size-md); }
        :host([size="lg"]) button { padding: var(--ds-button-padding-lg); font-size: var(--font-size-lg); }

        /* Disabled */
        :host([disabled]) button { opacity: 0.6; cursor: not-allowed; pointer-events: none; }
      </style>
      <button part="button" type="button" aria-disabled="false"><slot></slot></button>
    `;
    this._button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    this._upgradeProperty('variant');
    this._upgradeProperty('size');
    this._upgradeProperty('disabled');
    this._upgradeProperty('type');
    this._button.addEventListener('click', this._onClick);
    this._syncAttributes();
  }

  disconnectedCallback() {
    this._button.removeEventListener('click', this._onClick);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal) return;
    this._syncAttributes();
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  _syncAttributes() {
    const disabled = this.hasAttribute('disabled');
    this._button.disabled = disabled;
    this._button.setAttribute('aria-disabled', String(disabled));

    // ensure default values
    if (!this.hasAttribute('variant')) this.setAttribute('variant', 'primary');
    if (!this.hasAttribute('size')) this.setAttribute('size', 'md');
  }

  _onClick(e) {
    if (this.hasAttribute('disabled')) {
      e.stopImmediatePropagation();
      e.preventDefault();
      return;
    }
    // forward a composed click so it behaves like a normal button
    const clickEvent = new MouseEvent('click', { bubbles: true, composed: true, cancelable: true });
    this.dispatchEvent(clickEvent);
  }

  // convenience properties
  get variant() { return this.getAttribute('variant'); }
  set variant(v) { if (v) this.setAttribute('variant', v); else this.removeAttribute('variant'); }

  get size() { return this.getAttribute('size'); }
  set size(v) { if (v) this.setAttribute('size', v); else this.removeAttribute('size'); }

  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(v) { if (v) this.toggleAttribute('disabled', Boolean(v)); }
}

if (!customElements.get('ds-button')) {
  customElements.define('ds-button', DSButton);
}

export default DSButton;
