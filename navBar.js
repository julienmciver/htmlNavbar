var navBtns = document.getElementsByClassName("nav-button");

document.getElementById("burger").addEventListener("click", function(){
    document.getElementById("nav-buttons-div").classList.toggle("menu-toggle");
    
});

function toggleActive(elem){
    
    for(c = 0; c < navBtns.length; c++){
        if (navBtns[c].classList.contains("active")){
            navBtns[c].classList.toggle("active")
            
            break;
        }
    }
    elem.classList.toggle("active");
}

for (i=0;i<navBtns.length;i++) {
    navBtns[i].addEventListener('click',(function (i) {
      return function () {
        toggleActive(navBtns[i]);
      };
    }(i)));
}

