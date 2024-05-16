// =====================Menu Sec===================
const btn = document.querySelector(".menu-toggle")
const menu = document.querySelector(".mobile-menu")

btn.addEventListener("click", function(){
    menu.classList.toggle("hidden")

    if(btn.classList.contains('closed')){
        btn.classList.remove('closed');
        btn.classList.add('open');
    }
    else if(btn.classList.contains('open')){
        btn.classList.remove('open');
        btn.classList.add('closed');
    }
})

// ===================Mobile Menu Accordion============
class Accordion {
    constructor(options){
        this.options = {}
        this.options.accordionGroup = options.accordionGroup ? options.accordionGroup : '.accordions';
        this.options.accordion = options.accordion ? options.accordion : '.accordion';
        this.options.section = options.section ? options.section : '.section';
        this.options.hiddenClass = options.hiddenClass ? options.hiddenClass : 'hidden';

        this.initialization();
    }

    initialization() {
        let $this = this;
        let accordions = document.querySelectorAll(this.options.accordionGroup);
        for(let i=0; i<accordions.length;i++){
            let accordion = accordions[i].querySelectorAll(this.options.accordion);
            for(let x=0; x<accordion.length; x++){
                let section = accordion[x].querySelector(this.options.section);
                section.addEventListener('click', function(event){
                    let content = accordion[x].querySelector('.content');
                    if(content.classList.contains($this.options.hiddenClass)) {
                        $this.closeAllSections(accordions);
                        content.classList.remove($this.options.hiddenClass);
                    } else {
                        content.classList.add($this.options.hiddenClass);
                    }
                });
            }
        }
    }

    closeAllSections(accordions) {
        for (let i = 0; i < accordions.length; i++) {
            let accordion = accordions[i].querySelectorAll(this.options.accordion);
            for (let x = 0; x < accordion.length; x++) {
                let content = accordion[x].querySelector('.content');
                content.classList.add(this.options.hiddenClass);
            }
        }
    }
}
let a = new Accordion({});