

// slider variables
var slideChangeButtom = document.querySelectorAll('.slideChangeButtom');
var slider = document.querySelector('.slider');

// slides information variables
var slideImage = document.querySelectorAll('.slideImage');
var slideText = document.querySelectorAll('.slideText');

//slideChangeButtom variables
var prevButtom = document.querySelector('.previousSlideButtom');
var nextButtom = document.querySelector('.nextSlideButtom');
var activeSlide;
var slideInterval;


startAutoSlide()

function startAutoSlide(){
  if(slideInterval){ clearInterval(slideInterval);}
  resertProgressBar();
  activeSlide = 0;
  //activate slides
  slideImage[activeSlide].classList.add('active');
  slideText[activeSlide].classList.add('active');
  slideInterval = setInterval(() => {nextSlide()}, 9000);
}

function resertProgressBar(){
  var progressBar = document.querySelector('.progressBar');
  progressBar.classList.remove("activated");
  void progressBar.offsetWidth;
  progressBar.classList.add("activated");
}
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
  resertProgressBar();
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {nextSlide()}, 9000);
  prevSlide();
});

nextButtom.addEventListener('click', ()=> {
  resertProgressBar();
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {nextSlide()}, 9000);
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
