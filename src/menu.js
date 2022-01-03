// Ju jep ngjyre linqeve ne nav kur te jene aktive
$(document).on("click", "ul li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });