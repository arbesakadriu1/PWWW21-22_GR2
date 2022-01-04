$(document).on("click", "ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  window.addEventListener( "load", start, false );
  function start(){                 
                 var button = document.getElementById( "button" ); 
                 button.addEventListener( "click", cc, false );
              }

 function cc(){
  var radiobuton = document.getElementById("creditcard"); 

  if(radiobuton.checked){   document.writeln("<p>You should be logged in</p>")
   window.location.href ="index1.html";   }
 }

var currentTime = new Date().getHours();
if (document.body) {
    if ( currentTime<=6 && currentTime > 18) {

        document.body.style.backgroundColor = "rgb(190,190,190)";
    }
    else {
        document.body.style.backgroundColor = "rgb(256,256,256)"
    }
}