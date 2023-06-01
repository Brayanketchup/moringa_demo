

//transition activators 
function loadIn(){
  var loadcontainer = document.querySelector(".load");
  loadcontainer.classList.add('active');
}
function loadOut(){
  var loadcontainer = document.querySelector(".load");
  loadcontainer.classList.remove('active');
}
// <!-- "/about /moringa  /producto /contact  /-->

const routes = {
    404: '404.html',
    '/': 'home.html',
    '/about': 'about.html',
    '/producto': 'producto.html',
    '/contact': 'contact.html',
    '/moringa': 'moringa.html'
  };
  
  // Function to load the HTML content into a specific element
  function loadContent(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(content => {
        const element = document.getElementById(elementId);
        element.innerHTML = content;
        loadOut();
      })
      .catch(error => console.error('Error loading content:', error));
  }
  
  // Function to handle navigation and inject the appropriate HTML file
  function navigateTo(route) {
    if (routes.hasOwnProperty(route)) {
      const fileName = routes[route];
      const contentContainer = document.getElementById('content');
      loadContent(`pages/${fileName}`, 'content');
      window.history.pushState({},"",route);
    } else {
      console.error('Route not found:', route);
      navigateTo(404);
    }
  }
  
  // Add event listeners to handle navigation
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-route]');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("loading new page");
        setTimeout(() => {
            const route = link.getAttribute('data-route');
            navigateTo(route);
        }, 1000);
      });
    });
  });

  navigateTo('/');


