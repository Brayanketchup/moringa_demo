export function load404() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
    <section class="PageNotFoundSection">
    <h1 class="notFound" style="font-size:10vw" >404</h1>
    <h2 class="notFound notFoundText " style="font-size:2vw" >Lo sentimos, la página no fue encontrada.</h2>
    <h6 class="notFound notFoundText " style="font-size:1vw" >Es posible que haya escrito mal la dirección.</h6>
    </section>  
`;

//locate what bottom is being show as current
let prevCur = document.querySelector(".current");
currentpage(prevCur);

  };

  function currentpage(prevCur){
    //if there was a bottom as current then remove current class
    if(prevCur){
      prevCur.classList.remove("current");
    }
}



