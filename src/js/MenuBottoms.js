
//hamburger variables
let menuButtoms = document.querySelectorAll('menuText');
const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.mobile_display_overlay');

//hamburger working settings
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active')
  overlay.classList.toggle('active');
})

// remove the .active class if the page is greater than 1141px
window.addEventListener('resize', ()=>{
  let windowWith = window.innerWidth;
  
  if (windowWith > 1141 && hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active')
    overlay.classList.toggle('active');
  }
});


// Scroll to the top buttom opacity animation
window.addEventListener("scroll", function() { 
  var autoScrollButtom = document.querySelector(".autoScrollButtom"); 
  if (window.pageYOffset > 100) { 
    autoScrollButtom.style.opacity = 1; 
  } else { autoScrollButtom.style.opacity = 0; 
  } 
  });
  

  function scrollToTop() {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }