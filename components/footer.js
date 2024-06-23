   class Footer extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        
        `
        <footer>
        <ul>
            <li><a href="/">about</a></li>
            <li><a href="/">contact</a></li>
            <li><a href="/">work with me</a></li>
        </ul>
    </footer>
        `;
    }
 }

 customElements.define('footer-component', Footer);