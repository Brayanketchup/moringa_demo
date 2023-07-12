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


//function to navigate to each route
function changeRoute(route) {
  handleMenu();
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
      setTimeout(() => {
        loadingImage.classList.remove('active')
      }, 1500)
    } else {
      changeRoute('/404');
    }
  }, 1500);
}


function popStateHandler(route) {
  handleMenu();
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
      setTimeout(() => {
        loadingImage.classList.remove('active')
      }, 1500)
    } else {
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

//event listener for buttoms
Object.entries(buttonRoutes).forEach(([buttonId, route]) => {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', () => {
    handleMenu();
    changeRoute(route);

  });
});



//close menu
function handleMenu() {
  if (hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active')
    overlay.classList.toggle('active');
  }
}


//on popstate
window.addEventListener('popstate', e => {
  let url = window.location.pathname;
  popStateHandler(url);
});



//get the path name form the url on load
let urlGo = window.location.pathname;
if (urlGo === '/index.html') {
  changeRoute('/');
} else {
  changeRoute(urlGo);
};
