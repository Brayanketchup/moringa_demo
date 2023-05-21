//hamburger variables
const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.mobile_display_overlay');

//hamburger working settings
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active')
  overlay.classList.toggle('active');
})
