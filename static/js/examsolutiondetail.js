$(document).ready(function(){
    $("#notes-here").each(function(){
        var content = $(".notes-body").text()
        
        var converter = new showdown.Converter({tables: true}),
          text  = content,
          html  = converter.makeHtml(text);
          
          document.getElementById("notes-here").innerHTML=html
          
    }) 

})