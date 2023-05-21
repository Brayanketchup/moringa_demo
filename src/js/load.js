

const loadcontainer = document.querySelector(".load");
const loadImage = document.querySelector(".loadImage"); 

window.onload= ()=>{ 
    //remove loading image
    loadImage.style.opacity = 0;
    setTimeout(()=>{ loadcontainer.style.display = "none"; },500);
  };
  