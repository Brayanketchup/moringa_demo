

//variables from html elements
var carousel = document.querySelector('.carousel');


//variables that will be use in a future
var card;
var isDragging = false;
var startPosition = 0;
var currentTranslate = 0;
var prevTranslate = 0;
var animationID = 0;
// var speedX;
var animationRunnin = false;
var StopAnimationID;



//add event listeners
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('touchend', dragEnd);
carousel.addEventListener('mousemove', dragMove);
carousel.addEventListener('touchmove', dragMove);



if(!isDragging){
  startFrameAnimation();
}

//initialization of dragging
function dragStart(e) {
  //stop autoscroll
  cancelAnimationFrame(StopAnimationID);
  e.preventDefault();
  
  //get the starting position to calculate the dragging distance
  if (e.type === 'touchstart') {
    startPosition = e.touches[0].clientX;
  } else {
    startPosition = e.clientX;
    carousel.style.cursor = 'grabbing';
  }


  isDragging = true;
  animationID = requestAnimationFrame(animation);
}


//start moving
function dragMove(e) {
  if (!isDragging) return; 
  
  //new location where the carousel is being moving to
  var currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  var diffX = currentPosition - startPosition; //calc difference between starting and ending points
  

  currentTranslate = prevTranslate + diffX;
  infiniteScroll();
}

//function checks for borders to give an infinite scroll impresion
function infiniteScroll(){
card = document.querySelector('.card');
  if(currentTranslate>-card.offsetWidth){
    currentTranslate = currentTranslate-(4 * card.offsetWidth);}
else if(currentTranslate<-(card.offsetWidth*(Math.round(carousel.offsetWidth / card.offsetWidth)-4))){
  currentTranslate = currentTranslate+(4 * card.offsetWidth);
}
}

// animation of autoScroll
function startFrameAnimation() {
  if(StopAnimationID){cancelAnimationFrame(StopAnimationID);}
  // const speedX = -1;
  function step() {
    currentTranslate = currentTranslate -1;
    infiniteScroll();
    carousel.style.transform = `translateX(${currentTranslate}px)`
    StopAnimationID = window.requestAnimationFrame(step);
  }

  StopAnimationID = window.requestAnimationFrame(step);
}

// drag is finished
function dragEnd() {
  cancelAnimationFrame(animationID);
   carousel.style.cursor = 'grab';
  isDragging = false;
  prevTranslate = currentTranslate;
  startFrameAnimation();
}

//manual scrolling animation
function animation() {
  setTranslate(currentTranslate);
  if (isDragging) {
    requestAnimationFrame(animation);
  }
}

//function for dragging transform translatex
function setTranslate(x) {
  carousel.style.transform = `translateX(${x}px)`;
}
