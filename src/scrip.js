//load-img

//select load img
// const loadimg = document.querySelector(".load")

// on load set time out to make the loading img vanish
window.onload = function(loaded){
    setTimeout(() => {loadimg.style.opacity = 0 },2000);
    loaded();
}
// once the animation is done, set the img display to none
function loaded(){
    loadimg.style.display = none;
;}

const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.mobile_display_overlay');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active')
    overlay.classList.toggle('active');
})

