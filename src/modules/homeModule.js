//declaration of variables
let slideChangeButtom, slider, slideImage, slideText, prevButtom, nextButtom, activeSlide, slideInterval;

//load home function
export function loadHome() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <div class="page-container">
    <section id="slides">
        <div class="slider">

            <div class="slideChangeButtomSection SlideChangeleftButtom">
    
                <div class="slideChangeButtom previousSlideButtom">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
    
            </div>
    
            <div class="progressBar activated"></div>
             <div class="slide">
                <!-- slide 1 -->
                 <div class="slideText">
                    <h2>Moringa es vidas</h2>
                    <h1>SEMBRAMOS VIDA</h1>
                    <h3>Somos pioneros en desarrollo e investigación de la moringa en el Ecuador<br>desde hace 12
                        años.<br>Productos 100% orgánicos</h3>
                </div>
                <img class="slideImage active" src="../images/FOTOS-BANER.png" alt="slide 1" /> 
    
                <!-- slide 2 -->
                 <div class="slideText">
                    <h2>Más de</h2>
                    <h1>1,100.000 de <br>árboles sembrados</h1>
                    <h3>En el Ecuador. <br>Moringa ecuatoriana procedente de tierras vírgenes en el mundo.</h3>
                </div>
                <img class="slideImage" src="../images/FOTOS-BANER2.png" alt="slide 2"/>
            </div>
    
            <div class="slideChangeButtomSection SlideChangeRightButtom">
    
                <div class="slideChangeButtom nextSlideButtom">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
    
            </div>
    
        </div>
    </section>



    <!-- ceriticates -->

    <section id="CertificateSection">
        <div class="Certificates">
            <figure class="certificate">
                <img src="../images/Mesa-de-trabajo-1@4x-1.png" alt="Mesa-de-trabajo-1">
                <figcaption>USDA ORGANIC</figcaption>
            </figure>
            <figure class="certificate">
                <img src="../images/Mesa-de-trabajo-2@4x-3.png" alt="Mesa-de-trabajo-2">
                <figcaption>EU ORGANIC</figcaption>
            </figure>
            <figure class="certificate">
                <img src="../images/Mesa-de-trabajo-3@4x-1.png" alt="Mesa-de-trabajo-3">
                <figcaption>CANADA ORGANIC</figcaption>
            </figure>
            <figure class="certificate">
                <img src="../images/Mesa-de-trabajo-4@4x-1.png" alt="Mesa-de-trabajo-4">
                <figcaption>GMP CERT</figcaption>
            </figure>
        </div>

    </section>

    <!-- destinations and interactive map -->
    <section id="destinos">
        <div class="tittleText mapTittle">Destinos de exportación</div>
        <div class="interactiveMapContainer">
            <iframe src="../interactiveMap/world.html" scrolling="no" class="interactiveMap"></iframe>
        </div>
    </section>
    <br>
    <div style="clear:both;"></div>
    <div class="horizontalLine"></div>

    <br>

    <!-- bottom extra info -->
    <section id="extraInformativeSection">
        <div class="infoColumnWidth">
            <img src="../images/DSC06158-1-1.png" alt="moringa proposito" style="width:100%; border-radius: 15px;">
        </div>
        <div class="infoColumnWidth">
            <div class="tittleText">Ecuamoringa nació con el propósito de ayudar al más necesitado</div>
            <p class="infoParagraph">Somos fieles creyentes que los beneficios de la moringa fueron puestos en
                este mundo para que todos podamos ser beneficiados de sus grandes cualidades. Es por eso que
                constantemente estamos donando moringa a comunidades donde hay personas necesitadas. Todos los
                sábados
                a las 6am desde hace 8 años tenemos el agrado de compartir té caliente de moringa en las afuera de
                la Iglesia San Francisco en Guayaquil.</p>
        </div>
    </section>
</div>`;

//declare variables to change the current page buttom color
let prevCur = document.querySelector(".current");
let current = document.getElementById("homeButton");

//call function to set the current page buttom to green 
currentpage(prevCur, current);

//assigning variables
 slideChangeButtom = document.querySelectorAll('.slideChangeButtom');
 slider = document.querySelector('.slider');
 slideText = document.querySelectorAll('.slideText');
 prevButtom = document.querySelector('.previousSlideButtom');
 nextButtom = document.querySelector('.nextSlideButtom');


//set eventlisteners for mause hovering effect
slider.addEventListener("mouseover", sliderButtomsOpacityOn);
slider.addEventListener("mouseout", sliderButtomsOpacityOff);


//previous and next buttoms action listener
prevButtom.addEventListener('click', prevSlideButtom);
nextButtom.addEventListener('click', nextSlideButtom);

//call for auto slide function
startAutoSlide()
}

//Change current page buttom to green function
function currentpage(prevCur, current){
  if(prevCur){
    prevCur.classList.remove("current");
  }
    current.classList.add("current");
}

//function to synchronize the progress bar and reset the interval when changing to the previous slide
const prevSlideButtom = () =>{
  resertProgressBar();
  clearInterval(slideInterval);
  slideInterval = setInterval(() => { prevSlide() }, 9000);
  prevSlide();
}

//function to synchronize the progress bar and reset the interval when changing to the next slide
const nextSlideButtom = () =>{
  resertProgressBar();
  clearInterval(slideInterval);
  slideInterval = setInterval(() => { nextSlide() }, 9000);
  nextSlide();

};

//function to change opacity to 1
const sliderButtomsOpacityOn = () => {
  for (let i = 0; i < slideChangeButtom.length; i++) {
    slideChangeButtom[i].style.opacity = 1;
  }
}

//function to change opacity to 0
const sliderButtomsOpacityOff = () => {
  for (let i = 0; i < slideChangeButtom.length; i++) {
    slideChangeButtom[i].style.opacity = 0;
  }
}

//auto slide changes the current slide every 9 seconds
function startAutoSlide() {
  slideImage = document.querySelectorAll('.slideImage');
  if (slideInterval) { clearInterval(slideInterval); }
  resertProgressBar();
  activeSlide = 0;
  slideImage[activeSlide].classList.add('active');
  slideText[activeSlide].classList.add('active');
  slideInterval = setInterval(() => { nextSlide() }, 9000);
}
//function to reset the progress bar
function resertProgressBar() {
  var progressBar = document.querySelector('.progressBar');
  progressBar.classList.remove("activated");
  void progressBar.offsetWidth;
  progressBar.classList.add("activated");
}


//change to next slide function
function nextSlide() {
  slideImage = document.querySelectorAll('.slideImage');
  let tempSlide = activeSlide;
  if (activeSlide == slideImage.length - 1) {
    activeSlide = 0;
  } else { activeSlide++; }

  slideImage[tempSlide].classList.remove('active');
  slideImage[activeSlide].classList.add('active');

  slideText[tempSlide].classList.remove('active');
  slideText[activeSlide].classList.add('active');

};

//change to previous slide function
function prevSlide() {
  slideImage = document.querySelectorAll('.slideImage');
  let tempSlide = activeSlide;
  if (activeSlide == 0) {
    activeSlide = slideImage.length - 1;
  } else { activeSlide--; }

  slideImage[tempSlide].classList.remove('active');
  slideImage[activeSlide].classList.add('active');

  slideText[tempSlide].classList.remove('active');
  slideText[activeSlide].classList.add('active');
};

//function to remove event listeners and interval when another page is load
export function cleanupSlides() {
  if (slider) {

    slider.removeEventListener("mouseover", sliderButtomsOpacityOn);
    //else hidde the bottoms
    slider.removeEventListener("mouseout", sliderButtomsOpacityOff);

    slider = null;
  }
  if(prevButtom){
    prevButtom.removeEventListener('click', prevSlideButtom);
    prevButtom = null;
  }
  if(nextButtom){
    nextButtom.removeEventListener('click', nextSlideButtom);
    nextButtom = null;
  }
  if (slideInterval) { clearInterval(slideInterval)}
}