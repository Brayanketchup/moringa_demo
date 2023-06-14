
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
  function navigateTo(route, bid) {
    if (routes.hasOwnProperty(route)) {
      const fileName = routes[route];
      const contentContainer = document.getElementById('content');
      loadContent(`pages/${fileName}`, 'content');
      window.history.pushState({bid},"",route);
    } else {
      console.error('Route not found:', route);
      navigateTo(404);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const buttoms = document.querySelectorAll('.menuText');
    buttoms.forEach(buttom => {
      buttom.addEventListener('click', (event) => {
        var loadcontainer = document.querySelector(".load");
        loadcontainer.classList.add('active');
        event.preventDefault();
        let prevCurrent = document.querySelector('.current');
        prevCurrent.classList.remove("current");
        setTimeout(() => {
            const route = buttom.getAttribute('data-route');
            const bid = buttom.getAttribute('id');
            buttom.classList.add('current');
            navigateTo(route, bid);
        }, 1000);
      });
    });
  });

  navigateTo('/');


