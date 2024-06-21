   class Violator extends HTMLElement {
    constructor(){
        super();
    }   

    connectedCallback() {
        this.innerHTML =
        `
       <div class="grid-container">
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <!-- knocked out until subscription/etc
            <div id="subscribe-icon" class="grid-item" style="display:none">
                    <i class="material-icons"   style="color:black; font-size:60px; ">
                        <a onclick="toggleSubForm()">mail</a>
                    </i>
            </div>
            -->
            <!--add blue sky/socials-->
            <!--<div class="grid-item">
                <a href="/about.html">
                    <img class="float1" src="/images/MarleyPondRainbow.png">
                </a>
            </div>-->
        </div>`;
    }
 }

 customElements.define('violator-component', Violator);