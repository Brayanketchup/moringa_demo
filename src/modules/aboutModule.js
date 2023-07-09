

//declaring variables
let carousel, card, StopAnimationID, cardWidth;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

//load the about page function
export function loadAbout() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
    
    <div class="banner">
        <h1 class="bannerText">Nosotros</h1>
        <figure>
            <img src="../images/FOTOS-HEADER2-1.png" alt="banner" style="width: 100vw;">
        </figure>
    </div>

    <article class="article">
        <h1 class="tittleText centerColumn">Nuestra historia</h1>
        <div class="centerColumn">
            <div class="infoColumnWidth">
                <p class="infoParagraph">Fue a mediados del año 2010, cuando llegó a oídos del Zootecnista
                    Fausto Mantilla Huerta, el nombre de “Moringa” una planta Hindú con atributos muy especiales que
                    despertó su interés y que
                    cambiaría el curso de su vida y de la multitud de personas que se beneﬁciarían cada día con su
                    consumo. Fausto, junto a sus hijos,
                    Daniel, Erika y Jorge, empezaron a darle un mayor sentido a la moringa como alternativa de bajo
                    costo para contrarrestar la
                    desnutrición infantil en el país y un gran número de enfermedades letales, como cáncer,
                    hipertensión, diabetes, etc. En ese mismo año
                    decidieron crear la empresa ECUAMORINGA. Iniciando con la obtención desde el exterior de semillas de
                    “Moringa Oleífera” e implementando
                    los primeros cultivos de plantas y bosques de moringa en diferentes sectores del país.
                    ECUAMORINGA ha ido adquiriendo gran experiencia y motivación al constatar día a día los
                    extraordinarios beneﬁcios que ofrece la moringa en
                    la salud humana. Esto se evidencia en análisis nutricionales de la planta, como también en múltiples
                    testimonios de médicos nacionales
                    y extranjeros que recetan “El Árbol de la Vida” (como mundialmente se la conoce) y de los cientos de
                    consumidores de Ecuador que nos impulsan a
                    continuar con el desarrollo de moringa en el país. La moringa, ha sido también investigada
                    ampliamente por ECUAMORINGA en áreas pecuarias, como un
                    extraordinario suplemento alimenticio de todo tipo de animales especialmente para el incremento de
                    la producción de leche, carne y salud de los animales.
                </p>
            </div>
            <div class="infoColumnWidth">
                <figure class="">
                    <img src="../images/DSC06181-1-1.png" alt="Moringa historia" style="width:100%; border-radius: 15px;">
                </figure>
                <p class="infoParagraph">Lo que empezó como una iniciativa viable para mejorar la salud de las personas
                    e incrementar
                    la siembra de moringa en el país, se convirtió en la gran familia ECUAMORINGA, proporcionando salud
                    por medio de
                    sus productos de primera calidad a nivel nacional e internacional y cumpliendo la visión de lograr
                    ser los productores
                    más grandes del país. ECUAMORINGA, sembramos vida.
                </p>
            </div>
        </div>
    </article>
    <article class="whyUs">
        <section class="carouselSection">
            <h1 class="tittleText centerColumn">¿Por qué escoger Ecuamoringa?</h1>
            <!-- <i class="fa-solid fa-car-building"></i> -->
            <div class="wrapper">
                <div id="carousel" class="carousel">
                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-square-check"
                                style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Trazabilidad</h2>
                        <p class="infoParagraph carouselText">Cumplimos con los estándares más altos de calidad</p>
                    </div>

                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-percent" style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Inocuidad</h2>
                        <p class="infoParagraph carouselText">Rigurosos procesos de seguridad alimentaria dan
                            tranquilidad
                            que nuestros clientes necesitan</p>
                    </div>

                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-tree" style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Precios competitivos</h2>
                        <p class="infoParagraph carouselText">Calidad a precios justos y competitivos</p>
                    </div>

                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-building-circle-check"
                                style="color: #209e2e;"></i></div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Calidad TOP</h2>
                        <p class="infoParagraph carouselText">100% Hojas de moringa con alto contenido nutricional</p>
                    </div>

                    <div class="card originalCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-square-check"
                                style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Trazabilidad</h2>
                        <p class="infoParagraph carouselText">Cumplimos con los estándares más altos de calidad</p>
                    </div>

                    <div class="card originalCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-percent" style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Inocuidad</h2>
                        <p class="infoParagraph carouselText">Rigurosos procesos de seguridad alimentaria dan
                            tranquilidad
                            que nuestros clientes necesitan</p>
                    </div>

                    <div class="card originalCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-tree" style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Precios competitivos</h2>
                        <p class="infoParagraph carouselText">Calidad a precios justos y competitivos</p>
                    </div>

                    <div class="card originalCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-building-circle-check"
                                style="color: #209e2e;"></i></div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Calidad TOP</h2>
                        <p class="infoParagraph carouselText">100% Hojas de moringa con alto contenido nutricional</p>
                    </div>

                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-square-check"
                                style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Trazabilidad</h2>
                        <p class="infoParagraph carouselText">Cumplimos con los estándares más altos de calidad</p>
                    </div>

                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-percent" style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Inocuidad</h2>
                        <p class="infoParagraph carouselText">Rigurosos procesos de seguridad alimentaria dan
                            tranquilidad
                            que nuestros clientes necesitan</p>
                    </div>

                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-tree" style="color: #209e2e;"></i>
                        </div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Precios competitivos</h2>
                        <p class="infoParagraph carouselText">Calidad a precios justos y competitivos</p>
                    </div>

                    <div class="card cloneCard">
                        <div class="iconContainerCarousel"><i class="fa-solid fa-building-circle-check"
                                style="color: #209e2e;"></i></div>
                        <div class="carouselOverlay"></div>
                        <h2 class="moringaPros carouselText">Calidad TOP</h2>
                        <p class="infoParagraph carouselText">100% Hojas de moringa con alto contenido nutricional</p>
                    </div>
                </div>
            </div>
        </section>
    </article>
`
//declaring variables to change the current page buttom color
let prevCur = document.querySelector(".current");
let current = document.getElementById("aboutButton");
//calling function to set the current page buttom to green 
currentpage(prevCur, current);

//assigning variables 
carousel = document.getElementById('carousel');
card = document.querySelector('.card');
cardWidth = card.offsetWidth;

//event listeners
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('touchend', dragEnd);
carousel.addEventListener('mousemove', dragMove);
carousel.addEventListener('touchmove', dragMove);

startFrameAnimation();
};

//function to change current page buttom to green
function currentpage(prevCur, current){
    if(prevCur){
        prevCur.classList.remove("current");
      }
    current.classList.add("current");
}
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
    carousel = document.getElementById('carousel');
    if(currentTranslate>-cardWidth){
      currentTranslate = currentTranslate-(4 * cardWidth);}
  else if(currentTranslate<-(cardWidth*(Math.round(carousel.offsetWidth / cardWidth)-4))){
    currentTranslate = currentTranslate+(4 * cardWidth);
  }
  }
  
  // animation of autoScroll
  function startFrameAnimation() {
    if(StopAnimationID){cancelAnimationFrame(StopAnimationID);}
    function step() {
      currentTranslate = currentTranslate -1;
      infiniteScroll();
      carousel.style.transform = `translateX(${currentTranslate}px)`
      StopAnimationID = window.requestAnimationFrame(step);
    }
  
    StopAnimationID = window.requestAnimationFrame(step);
  }
  
  // when drag is finished then cancel dragging animation, and reset variables
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

  //function to clean eventlisteners when another page is load
  export function cleanupCarousel() {
    cancelAnimationFrame(StopAnimationID);
        
    if (carousel) {
    
        carousel.removeEventListener('mousedown', dragStart);
        carousel.removeEventListener('touchstart', dragStart);
        carousel.removeEventListener('mouseup', dragEnd);
        carousel.removeEventListener('touchend', dragEnd);
        carousel.removeEventListener('mousemove', dragMove);
        carousel.removeEventListener('touchmove', dragMove);
        carousel = null;
    }

}