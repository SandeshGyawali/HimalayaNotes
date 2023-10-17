$(document).ready(function(){

      var btn = document.getElementsByClassName("collapse");
      $('.left-sidebar-content-phone').hide()
        
        btn[0].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        })

        
        $("#notes-here").each(function(){
            var content = $(".notes-body").text()
            
            var converter = new showdown.Converter({tables: true}),
              text  = content,
              html  = converter.makeHtml(text);
              
              document.getElementById("notes-here").innerHTML=html
              
        }) 

        $('h2').each(function() 
        {
              var id= $(this).attr('id')
              $('#inside-list').append("<li> <a href=\"#" +id+ "\" >"+$(this).text()+"</a> </li>")
              $('#inside-list-phone').append("<li> <a href=\"#" +id+ "\" >"+$(this).text()+"</a> </li>")
              console.log(id)
        })
        
        /*var img = document.getElementsByTagName('img')[0].getAttribute('src');
        console.log(img)
        document.getElementsByTagName('img')[0].src="{% static "+"'"+img+"'"+ " %}";
        var path =document.getElementsByTagName('img')[0].getAttribute('src');
        console.log(path);*/

        /*
       scrollProgressBar();
        
        
        function scrollProgressBar() {
            var getMax = function () {
              return $(document).height() - $(window).height();
            };
          
            var getValue = function () {
              return $(window).scrollTop();
            };
          
            var progressBar = $(".progress-bar"),
              max = getMax(),
              value,
              width;
          
            var getWidth = function () {
              // Calculate width in percentage
              value = getValue();
              width = (value / max) * 100;
              width = width + "%";
              return width;
            };
          
            var setWidth = function () {
              progressBar.css({ width: getWidth() });
            };
          
            $(document).on("scroll", setWidth);
        $(window).on("resize", function () {
          // Need to reset max
          max = getMax();
          setWidth();
        });
           
          }
          */

         window.onscroll = function() {myFunction()};

         function myFunction() {
           var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
           var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
           var scrolled = (winScroll / height) * 100;
           document.getElementById("myBar").style.width = scrolled + "%";
         }
          

       
       
})