class AppHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header style="background-color:#4F46E5;color:white;padding:1rem;text-align:center; border-radius:8px;">
          <h1>Note Apps</h1>
        </header>
      `;
    }
  }
  
  customElements.define('app-header', AppHeader);
  