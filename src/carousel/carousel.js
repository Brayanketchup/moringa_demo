
//variables from html elements
const carousel = document.querySelector('.carousel');
const card = document.querySelector('.card');
const carouselChildrens = [...carousel.children];
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

//calculate total width of cards including left and right margin and padding.
const styles = window.getComputedStyle(card);

//calculate card total width
const width = parseFloat(styles.width); // Width 
const paddingLeft = parseFloat(styles.paddingLeft); // Left padding
const paddingRight = parseFloat(styles.paddingRight); // Right padding
const marginLeft = parseFloat(styles.marginLeft); // Left margin
const marginRight = parseFloat(styles.marginRight); // Right margin

//calculation of the total width
const cardTotalWidth = width + paddingLeft + paddingRight + marginLeft + marginRight;

//variables that will be use in a future
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let speedX = -1;

//calculate amount of cards per view
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// insert copies of original cards 
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


//add event listeners
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('touchend', dragEnd);
carousel.addEventListener('mousemove', dragMove);
carousel.addEventListener('touchmove', dragMove);


// initialization of the autoscroll
window.onload = () => {
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
  const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  const diffX = currentPosition - startPosition; //calc difference between starting and ending points
  

  currentTranslate = prevTranslate + diffX;
  infiniteScroll();
}

//function checks for borders to give an infinite scroll impresion
function infiniteScroll(){
  if(currentTranslate>-1){
    currentTranslate = currentTranslate-(cardPerView * cardTotalWidth);}
else if(currentTranslate<-2357){
  currentTranslate = currentTranslate+(cardPerView * cardTotalWidth);
}
}

// animation of autoScroll
function startFrameAnimation() {
  function step() {
    currentTranslate = currentTranslate + speedX;
    infiniteScroll();
    carousel.style.transform = `translateX(${currentTranslate}px)`
    StopAnimationID = window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

// drag is finished
function dragEnd() {
  cancelAnimationFrame(animationID);
   carousel.style.cursor = 'grab';
  isDragging = false;
  prevTranslate = currentTranslate;
  startFrameAnimation()
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
