class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
    this.innerHTML = `
        <style>
            .logo_title {
                color: rgb(255, 255, 255);
                font-family: "Racing Sans One", "sans-serif";
                font-weight: 400;
                font-size: 35px;
                position: relative;
                margin: 40px 300px;
            }

            .logo {
                width: 125px;
                height: 125px;
                rotate: -60deg;
                position: absolute;
                margin: -130px 0px;
                filter: contrast(1.2) brightness(2.1) grayscale(1) sepia(0.4);
            }

            .line1 {
                background-color: white;
                height: 2px;
                width: 140px;
                position: absolute;
                margin: -20px -150px;
            }

            .line2 {
                background-color: white;
                height: 2px;
                width: 140px;
                position: absolute;
                margin: -20px 165px;
            }

            .cabecalho{
                position: absolute;
                margin: -80px 900px;
                width: 500px;
            }

            .cabecalho li{
                display: inline;
                list-style-type: none;
            }

            .cabecalho button{
                font-family: "Racing Sans One", "sans-serif";
                font-size: 25px;
                background-color: #512500;
                border-radius: 100px;
                border-color:rgb(245, 101, 5);
            }
        </style>
        <header id="headerAbacate">
            <h1 class="logo_title">
                Karasuno
                <div class="line1"></div>
                <div class="line2"></div>
            </h1>
                <ul class="cabecalho">
                    <li><button type="button" onclick="About()">About</button></li>
                    <li><button type="button" onclick="Synopsis()">Synopsis</button></li>
                    <li><button type="button" onclick="Character()">Character</button></li>
                    <li><button type="button" onclick="Gallery()">Gallery</button></li>
                </ul>
            <img class="logo" src="imgs/Logo.png" alt="logo_karasuno">
        </header>`;
  }
}
  customElements.define('header-component', Header);