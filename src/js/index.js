// =====================Menu Sec===================
// const btn = document.querySelector(".menu-toggle")
// const menu = document.querySelector(".mobile-menu")

// btn.addEventListener("click", function(){
//     menu.classList.toggle("hidden")

//     if(btn.classList.contains('closed')){
//         btn.classList.remove('closed');
//         btn.classList.add('open');
//     }
//     else if(btn.classList.contains('open')){
//         btn.classList.remove('open');
//         btn.classList.add('closed');
//     }
// })

const sidenav = document.getElementById('sidenav');
const openSideNav = document.getElementById('open-sidenav');
const closeSideNav = document.getElementById('close-sidenav');
const sidenavList = document.getElementById('sidenav-list');

sidenavList.addEventListener('click', ()=> {
    sidenav.classList.remove('translate-x-full');
})

openSideNav.addEventListener('click', () => {
    sidenav.classList.remove('translate-x-full');
})
closeSideNav.addEventListener('click', () => {
    sidenav.classList.add('translate-x-full');
})

// ===================Mobile Menu Accordion============
class Accordion {
    constructor(options){
        this.options = {}
        this.options.accordionGroup = options.accordionGroup ? options.accordionGroup : '.accordions';
        this.options.accordion = options.accordion ? options.accordion : '.accordion';
        this.options.icon = options.icon ? options.icon : '.toggle-icon';
        this.options.accordionContent = options.accordionContent ? options.accordionContent : '.content';
        this.options.openIcon = options.openIcon ? options.openIcon : '+';
        this.options.closeIcon = options.closeIcon ? options.closeIcon : '-';
        this.options.hiddenClass = options.hiddenClass ? options.hiddenClass : 'hidden';
        // this.options.openedAccordionClass = options.openedAccordionClass ? options.openedAccordionClass : 'open';

        this.initialization();
    }

    initialization() {
        let $this = this;
        let accordions = document.querySelectorAll(this.options.accordionGroup);
        for(let i=0; i<accordions.length;i++){
            let accordion = accordions[i].querySelectorAll(this.options.accordion);
            let contents = accordions[i].querySelectorAll(this.options.accordionContent);
            let icons = accordions[i].querySelectorAll(this.options.icon);
            for(let x=0; x<accordion.length; x++){
                let singleAccordion = accordion[x];
                let icon = accordion[x].querySelector(this.options.icon);
                icon.addEventListener('click',function(event){
                    for(let z = 0; z < contents.length; z++){
                        contents[z].classList.add('hidden');
                    }
                    for(let z = 0; z < icons.length; z++){
                        icons[z].innerHTML = $this.options.openIcon;
                    }
                    if(icon.classList.contains($this.options.openedAccordionClass)){
                        icon.innerHTML = $this.options.openIcon;
                        singleAccordion.querySelector($this.options.accordionContent).classList.add($this.options.hiddenClass);
                    }
                    else{
                        icon.innerHTML = $this.options.closeIcon;
                        singleAccordion.querySelector($this.options.accordionContent).classList.remove($this.options.hiddenClass);
                    }
                    icon.classList.toggle($this.options.openedAccordionClass);
                })
            }
        }
    }
}
let a = new Accordion({});