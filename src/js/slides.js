
const loadcontainer = document.querySelector(".load");
const loadImage = document.querySelector(".loadImage"); 

// slider variables
const slideChangeButtom = document.querySelectorAll('.slideChangeButtom');
const slider = document.querySelector('.slider');

// slides information variables
const slideImage = document.querySelectorAll('.slideImage');
const slideText = document.querySelectorAll('.slideText');

//slideChangeButtom variables
const prevButtom = document.querySelector('.previousSlideButtom');
const nextButtom = document.querySelector('.nextSlideButtom');
let activeSlide = 0;


//set the first slide on load
window.onload= ()=>{
  //activate slides
  slideImage[activeSlide].classList.add('active');
  slideText[activeSlide].classList.add('active');

  //change slides every 9 seconds
  setInterval(() => {nextSlide()}, 9000);

  //remove loading image
  loadImage.style.opacity = 0;
  setTimeout(()=>{ loadcontainer.style.display = "none"; },500);
};

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
