$(document).ready(function(){
    var selector = '.topnav a.nav-links';
    
    $(selector).on('click', function(){

        var x = document.getElementsByClassName("menu-div");
        x[0].classList.remove("responsive");
        
    })

    var nav = document.getElementsByClassName("icon-div");
    nav[0].addEventListener("click", function(){
        var x = document.getElementsByClassName("menu-div");
    if (x[0].className === "menu-div") {
        x[0].className += " responsive";
    } else {
        x[0].className = "menu-div";
    }
    })
       
})