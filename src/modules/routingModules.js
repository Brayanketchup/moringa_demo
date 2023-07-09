import { loadHome, cleanupSlides } from './homeModule.js';
import { loadAbout, cleanupCarousel } from './aboutModule.js';
import { loadMoringa } from './moringaModule.js';
import { loadProduct } from './productModule.js';
import { loadContact } from './contactModule.js';
import { load404 } from './404.js';



const hamburgerMenu = document.querySelector('.hamburger');
let loadingImage = document.querySelector(".load");

const routes = {
  '/': loadHome,
  '/about': loadAbout,
  '/moringa': loadMoringa,
  '/product': loadProduct,
  '/contact': loadContact,
  '/404': load404
};

const contentDiv = document.getElementById('content');

let currentModuleCleanup = null;

function changeRoute(route) {
  loadingImage.classList.add('active');

  if (currentModuleCleanup) {
    currentModuleCleanup();
    currentModuleCleanup = null;
  }


  setTimeout(() => {
  const moduleFunction = routes[route];

  if (moduleFunction) {
    moduleFunction();
    window.history.pushState(route, '', route);
    currentModuleCleanup = getModuleCleanupFunction(moduleFunction);
    setTimeout(()=>{
      loadingImage.classList.remove('active')
    }, 1500)
  }
  }, 1500);

}

function popStateHandler(route) {
  loadingImage.classList.add('active');


if (currentModuleCleanup) {
  currentModuleCleanup();
  currentModuleCleanup = null;
}


setTimeout(() => {
const moduleFunction = routes[route];

// If a module function is found, execute it
if (moduleFunction) {
  moduleFunction();
  currentModuleCleanup = getModuleCleanupFunction(moduleFunction);
  setTimeout(()=>{
    loadingImage.classList.remove('active')
  }, 1500)
}else{
  handleMenu();
  changeRoute('/404');
}
}, 1500);
}



function getModuleCleanupFunction(moduleFunction) {
  if (moduleFunction === loadHome) {
    return cleanupSlides;
  }
  if (moduleFunction === loadAbout) {
    return cleanupCarousel;
  }


  return null;
}

const buttonRoutes = {
  'homeButton': '/',
  'aboutButton': '/about',
  'moringaButtom': '/moringa',
  'productButton': '/product',
  'contactButton': '/contact',
};

Object.entries(buttonRoutes).forEach(([buttonId, route]) => {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', () => {
    handleMenu();
    changeRoute(route);
    
  });
});




function handleMenu(){
  if (hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active')
    overlay.classList.toggle('active');
}
}



window.addEventListener('popstate', e => {

let url = e.state;
popStateHandler(url);
});



// Initial route
changeRoute('/');
