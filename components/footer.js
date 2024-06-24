   class Footer extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        
        `
        <footer>
        <ul>
            <li><a href="/about.html">about</a></li>
            <li><a href="/workWithMe.html">work with me</a></li>
        </ul>
    </footer>
        `;
    }
 }

 customElements.define('footer-component', Footer);