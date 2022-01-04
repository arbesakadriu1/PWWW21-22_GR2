// Ju jep ngjyre linqeve ne nav kur te jene aktive click-event ,$-sektor
$('.nav-ul .nav-link').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

// Kur te klikohet njeri kontroll mundesoon qe te tjeret te ken pamje tjeter 
$('.controls .buttons').click(function(){
      $(this).addClass('button-active').siblings().removeClass('button-active');

    //   metoda attr() ne jquery perdoret per me kthy vleren e  atributet psh all, pizza etc
      let filter=$(this).attr('data-filter');
      if(filter=='all'){
          $('.dish .image' ).show(400);

      }
    //   hide-callback
      else{
        $('.dish .image' ).not('.'+filter).hide(200);
        $('.dish .image' ).filter('.'+filter).show(400);


      }
  });