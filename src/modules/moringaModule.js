export function loadMoringa() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `   
    <div class="banner">
    <h1 class="bannerText">¿Qué es la moringa?</h1>
    <figure>
        <img src="../images/FOTOS-HEADER2.png" alt="banner moringa" style="width: 100vw;">
    </figure>
</div>



<article class="moringaArticle">
    <div>
        <h1 class="tittleText centerColumn">Conoce sus propiedades</h1>
        <span class="infoParagraph centerColumn">¡conoce la moringa!</span>
    </div>

    <div class="centerColumn">
        <p class="paragraphColumnWidth infoParagraph">La Moringa es uno de los mejores superalimento (SUPERFOODS) del planeta. 
        Proporciona energía natural, tiene propiedades antiinflamatorias, y es una 
        potencia nutricional que deja muchos otros superalimentos atrás. Las hojas de 
        moringa no tienen rival en riqueza de nutrientes, repletas de proteínas, 
        aminoácidos esenciales, 27 vitaminas y 46 antioxidantes.</p>

        <figure>
            <img src="../images/Mesa-de-trabajo-2@4x-1-pra324ws31kg4flcgjtt0k8twb1cpathgycomjgltc.png" alt="propiedades de la moringa" style="width:100%;">
        </figure>
    </div>
    

        <div class="centerColumn">
            <div class="infoColumnWidth"><figure><img src="../images/RECIPIENTE-857x1024.png" alt="moringa seca" style="width:60%;"></figure></div>
            <div class="ColumnWidth">
                <!-- right 1 -->
                <div class="propiedadesMoringa">
                    <h1 class="tittleText">100% natural</h1>
                    <p class="infoParagraph">La moringa es una especie milenaria comestible para todo 
                        ser humano y animal que contiene 96 nutrientes, lo máximo 
                        en contenido de Clorofila, Fito-químicos, Hierro, Calcio, 
                        Potasio, Cobre, Magnesio y Zinc.</p>
                </div>
                <!-- right 2 -->
                <!-- 45vw -->
                <div class="propiedadesMoringa">
                    <h1 class="tittleText">Super alimento</h1>
                    <p class="infoParagraph">Es un súper alimento que te llena de energía, rejuvenece tus 
                        células y ayuda al correcto funcionamiento de todos tus órganos, 
                        además de eliminar los procesos inflamatorios en forma natural.</p>
                </div>
                <!-- right 3 -->
                <div class="propiedadesMoringa">
                    <h1 class="tittleText">Fuente de nutrición</h1>
                    <p class="infoParagraph">La moringa contiene antioxidantes, anti inflamatorios, aminoácidos 
                        esenciales como la lisina, leucina, isoleucina, valina, cisteína, 
                        arginina, triptófano, teorina, mitionina, Vitamina A, Vitamina B y 
                        Vitamina C, minerales como el calcio, cobre, potasio, hierro, fósforo.</p>
                </div>
            </div>
        </div>
</article>`;

//declare variables to change the current page buttom color
let prevCur = document.querySelector(".current");
let current = document.getElementById("moringaButtom");
//call function to set the current page buttom to green 
currentpage(prevCur, current);

};
  //Change current page buttom to green function
  function currentpage(prevCur, current){
    if(prevCur){
        prevCur.classList.remove("current");
      }
    current.classList.add("current");
}