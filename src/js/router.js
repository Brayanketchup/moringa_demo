
function loadOut(){
  var loadcontainer = document.querySelector(".load");
  loadcontainer.classList.remove('active');
}

const routes = {
  404: '404.html',
  '/': ['home.html', 'slides.js'],
  '/about': ['about.html', 'carousel.js'],
  '/contact': 'contact.html',
  '/producto': 'producto.html',
  '/moringa': 'moringa.html'
};

let currentScript = null;

function loadContent(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(content => {
      const element = document.getElementById(elementId);
      element.innerHTML = content;
      console.log(content);
    })
    .catch(error => console.error('Error loading content:', error));
}

function removeCurrentScript() {
  if (currentScript) {
    document.body.removeChild(currentScript);
    currentScript = null;
  }
}

function navigateTo(route, bid) {
  if (routes.hasOwnProperty(route)) {
    const routeData = routes[route];
    if (Array.isArray(routeData)) {
      const [htmlFile, jsFile] = routeData;
      loadContent(`pages/${htmlFile}`, 'content');
      loadOut();
      removeCurrentScript();
      if (jsFile) {
        const scriptElement = document.createElement('script');
        scriptElement.src = `js/${jsFile}`;
        document.body.appendChild(scriptElement);
        currentScript = scriptElement;
      }
    } else {
      loadContent(`pages/${routeData}`, 'content');
      removeCurrentScript();
    }
    window.history.pushState({ bid }, '', route);
  } else {
    console.error('Route not found:', route);
    navigateTo('/404');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menuText');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const loadContainer = document.querySelector(".load");
      loadContainer.classList.add('active');
      event.preventDefault();
      const prevCurrent = document.querySelector('.current');
      prevCurrent.classList.remove("current");
      setTimeout(() => {
        const route = button.getAttribute('data-route');
        const bid = button.getAttribute('id');
        button.classList.add('current');
        navigateTo(route, bid);
        loadContainer.classList.remove('active');
      }, 1000);
    });
  });
});

navigateTo('/');