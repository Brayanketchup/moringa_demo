

// country name tag display
const countryName = document.querySelector(".countryName");


// change the positon of the tag acording to the position of the mouse
document.body.addEventListener('mousemove', function followMouse(x){

    let experiment = (x.clientY - 55);
    countryName.style.left = x.clientX + 'px';
    countryName.style.top = experiment + 'px';
});

//functions to update the tag content
function changeTagContent(text){
    countryName.innerHTML = text;
    countryName.style.opacity = 1;
}
function clearTagContent(){
    countryName.innerHTML = '';
    countryName.style.opacity = 0;
}
