class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => { // .forEach vai falar com cada link, individualmente
            link.style.animation    // Aqui verificamos se o link possui a propriedade animation no DOM. Se possuir, tira. Se nao possuir, bota.
                ? (link.style.animation = "")  // ? eh um operador ternario que retorna 1 de 2 valores se baseando em um terceiro valor
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7 + 0.3)}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks(); // Metodo exclusivo para animar os links do menu
    }

    addClickEvent(){ // Funcao que vai adicionar o evento de click no botao do menu
        this.mobileMenu.addEventListener("click", this.handleClick);    //("xxx", () => console.log("Hey!"));"" Essa parte chama um callback para sabermos se esta funcional nosso codigo, chamando ela via init
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavBar.init();