//load product page function
export function loadProduct() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `    
    <section class="moringaArticle">
    <section id="granel" class="productSections">
        <h1 class="tittleText centerColumn productTittles">Productos al granel</h1>

        <div class="productList">
            <div class="productCard">
                <figure class="productImg"><img src="../images/Mesa-de-trabajo-8@4x.png" alt="polvo de moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Polvo de Moringa <br />(Según requerimiento)</figcaption>
                </figure>
            </div>

            <div class="productCard">
                <figure class="productImg"><img src="../images/DESHIDRATADAS-MORINGA.png" alt="hoja de moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Hojas deshidratadas de Moringa</figcaption>
                </figure>

            </div>


            <div class="productCard">
                <figure class="productImg"><img src="../images/Mesa-de-trabajo-9@4x.png" alt="te de moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Té de Moringa</figcaption>
                </figure>

            </div>

        </div>

    </section>
    <section id="terminados" class="productSections">
        <h1 class="tittleText centerColumn productTittles">Productos terminados</h1>

        <div class="productList">
            <div class="productCard">
                <figure class="productImg"><img src="../images/Mesa-de-trabajo-1@4x.png" alt="polvo moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Polvo de Moringa</figcaption>
                </figure>

            </div>


            <div class="productCard">
                <figure class="productImg"><img src="../images/Mesa-de-trabajo-3@4x.png" alt="hoja de moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Hojas de Moringa</figcaption>
                </figure>

            </div>


            <div class="productCard">
                <figure class="productImg"><img src="../images/Mesa-de-trabajo-7@4x.png" alt="te de moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Té de Moringa</figcaption>
                </figure>

            </div>


            <div class="productCard">
                <figure class="productImg"><img src="../images/Mesa-de-trabajo-6@4x.png" alt="semillas de moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Semillas de Moringa</figcaption>
                </figure>

            </div>


            <div class="productCard">
                <figure class="productImg"><img src="../images/Mesa-de-trabajo-10@4x.png" alt="aceite de moringa"
                        style="width: inherit;">
                    <figcaption class="productCaption">Aceite de Moringa</figcaption>
                </figure>

            </div>
    </section>
</section>
`;

//declare variables to change the current page buttom color
let prevCur = document.querySelector(".current");
let current = document.getElementById("productButton");
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

