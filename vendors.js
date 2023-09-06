let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}






let slides = document.querySelector('.slides .list');
let slidesItems = document.querySelectorAll('.slides .list .item');
let slidesNext = document.getElementById('slides-next');
let slidesPrev = document.getElementById('slides-prev');
let slidesDots = document.querySelectorAll('.slides .dots li');

let slidesLengthItems = slidesItems.length - 1;
let slidesActive = 0;

slidesNext.onclick = function(){
    slidesActive = slidesActive + 1 <= slidesLengthItems ? slidesActive + 1 : 0;
    reloadslides();
}
slidesPrev.onclick = function(){
    slidesActive = slidesActive - 1 >= 0 ? slidesActive - 1 : lengthItems;
    reloadslides();
}
let slidesRefreshInterval = setInterval(()=> {slidesNext.click()}, 3000);

function reloadslides(){
    slides.style.left = -slidesItems[slidesActive].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slides .dots li.active');
    last_active_dot.classList.remove('active');
    slidesDots[slidesActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {slidesNext.click()}, 3000);

    
}

slidesDots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         slidesActive = key;
         reloadslides();
    })
})
window.onresize = function(event) {
    reloadslides();
};








dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

