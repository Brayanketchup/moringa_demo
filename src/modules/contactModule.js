//load contact page function
export function loadContact(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
    <div class="banner">
    <h1 class="bannerText">Contacto</h1>
    <figure>
        <img src="../images/FOTOS-HEADER3.png" alt="banner" style="width: 100vw;">
    </figure>
</div>

<section class="contactSection">

    <div class="contactList">
        <div class="contactCard">
            <figure class="contactIcon">
                <div class="contactItems iconContact itemColorChange">
                    <i class="fa-sharp fa-solid fa-map-location fa-2xl"></i>
                </div>
                <figcaption class="contactCaption itemColorChange">Visita nuestra oficina</figcaption>
                <p class="contactItems">Nueva Kennedy <br /> Av. Federico González Suárez 233</p>
            </figure>


        </div><span class="verticalSeparator"></span>
        <div class="contactCard">
            <figure class="contactIcon">
                <!-- icons -->
                <div class="contactItems iconContact itemColorChange">
                    <i class="fa-solid fa-phone-volume fa-2xl"></i>
                </div>
                <figcaption class="contactCaption itemColorChange">Llámanos</figcaption>
                <p class="contactItems">+593 994327303 <br />Lunes - Viernes: 09:00am a 06:00pm</p>
            </figure>


        </div><span class="verticalSeparator"></span>
        <div class="contactCard">
            <figure class="contactIcon">
                <!-- icons -->
                <div class="contactItems iconContact itemColorChange">
                    <i class="fa-solid fa-envelope fa-2xl"></i>
                </div>
                <figcaption class="contactCaption itemColorChange">Envianos un correo</figcaption>
                <p class="contactItems">info@ecuamoringa.com</p>
            </figure>
        </div>

    </div>

</section>
<section class="locationMap">
    <div class="googleMapContainer">
        <div class="googleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.4721646522144!2d-79.8958175!3d-2.1748527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6dc21e9f31cd%3A0xd0fa1a216772d4bd!2sEcuamoringa!5e0!3m2!1sen!2sus!4v1687476305192!5m2!1sen!2sus" 
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>
    `;

//declare variables to change the current page buttom color
    let prevCur = document.querySelector(".current");
    let current = document.getElementById("contactButton");
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