  class Header extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        
        `
        <a href="/">
          <img id="banner" src="/images/bannerInverse.png">
        </a>
        `;
    }
 }

 customElements.define('header-component', Header);