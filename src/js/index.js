// =======================head-1 section==========================
const min = document.querySelector(".cross")
const area = document.querySelector(".place")

min.addEventListener("click", function(){
    area.classList.add("hidden")
})


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

//============= counters==============
let displayValues = document.querySelectorAll('.num')
let interval = 800

displayValues.forEach((displayValue)=>{
    let startValue=0
    let endValue = parseInt(displayValue.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter =setInterval(function(){
        startValue += 1
        displayValue.textContent = startValue + "+"
        if( startValue == endValue){
            clearInterval(counter)
        }
    }, duration)
})


// ==================same heading height in card==============
// window.onload = function () {
//     var headings = document.querySelectorAll('div a div div h3');
//     var maxHeight = 0;

//     headings.forEach(function (heading) {
//         maxHeight = Math.max(maxHeight, heading.offsetHeight);
//     });

//     headings.forEach(function (heading) {
//         heading.style.height = maxHeight + 'px';
//     });
// };

// ============================hide Job Hiring=================

window.onload = function() {
    window.addEventListener('scroll', function() {
        const job = document.querySelector('#job');
    
        if(window.scrollY > 600) {
            job.classList.add('hidden');
        }
    })
}