$(document).ready(function(){
    var btn = document.getElementsByClassName("solution-collapse");
   /* $('.solution-collapse').each(function(){
        console.log("hello")
        this.addEventListener("click", function(){
            console.log("hyyy")
            var content = this.nextElementSibling;
            if (content.display === "block") {
                content.display = "none";
            } else {
                content.display = "block";
            }
        })
    }) */

    /*
    $('.content-solution-list').hide()
    Array.prototype.forEach.call(btn, function(element) {
        element.addEventListener("click", function() {
            console.log("yoo")
            var content = element.nextElementSibling;
            if (content.display === "block") {
                content.display = "none";
            } else {
                content.display = "block";
            }
        });
      });
    */

    var classname = document.getElementsByClassName('solution-name');
    $('.content-solution-list').hide()
    var myFunction = function() {
          var content = this.nextElementSibling
          if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    };
      
    for (var i = 0; i < classname.length; i++) {
          classname[i].addEventListener('click', myFunction, false);
    }
})