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


//hamburger menu setting
const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.mobile_display_overlay');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active')
  overlay.classList.toggle('active');
})



// slideChangeButtom
const slideChangeButtom = document.querySelectorAll('.slideChangeButtom');
const slider = document.querySelector('.slider');

//show bottoms if mouse in the slider
slider.addEventListener("mouseover", () => {
  for (let i = 0; i < slideChangeButtom.length; i++) {
    slideChangeButtom[i].style.opacity = 1;
  }
});
  //else hidde the bottoms
  slider.addEventListener("mouseout", () => {
  for (let i = 0; i < slideChangeButtom.length; i++) {
    slideChangeButtom[i].style.opacity = 0;
  }
});

//change slides settings
const slideImage = document.querySelectorAll('.slideImage');
const slideText = document.querySelectorAll('.slideText');

let activeSlide = 0;
// const activeSlide = document.querySelectorAll('.activeSlide');
const prevButtom = document.querySelector('.previousSlideButtom');
const nextButtom = document.querySelector('.nextSlideButtom');


//set the first slide on load
window.onload= ()=>{
  slideImage[activeSlide].classList.add('active');
  slideText[activeSlide].classList.add('active');

};

//previous and next buttoms action listener
prevButtom.addEventListener('click', ()=> {
prevSlide()
});

nextButtom.addEventListener('click', ()=> {
nextSlide();
});

//next slide bottom
function nextSlide(){
  let tempSlide = activeSlide;
  if(activeSlide==slideImage.length-1){
    activeSlide = 0;
  }else{ activeSlide++;}

  slideImage[tempSlide].classList.remove('active');
  slideImage[activeSlide].classList.add('active');

  slideText[tempSlide].classList.remove('active');
  slideText[activeSlide].classList.add('active');

};
//previous slide bottom
function prevSlide(){
  let tempSlide = activeSlide;
  if(activeSlide==0){
    activeSlide = slideImage.length-1;
  }else{ activeSlide--;}

  slideImage[tempSlide].classList.remove('active');
  slideImage[activeSlide].classList.add('active');

  slideText[tempSlide].classList.remove('active');
  slideText[activeSlide].classList.add('active');

};
