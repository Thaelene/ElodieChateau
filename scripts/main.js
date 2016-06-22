var mdScreen = 982;
var smScreen = 768;
var xsScreen = 544;
$(document).ready(function() {

  /****************
    Gérer la navbar en md et sm + menu hamburger
  ****************/
  responsive();
  $(window).on('resize', function() {
    responsive();
  });
  // $('.hamburger').hide();

  function responsive() {

    if ($(window).width() < xsScreen) {

      $('.hamburger').show();
      $('.menu').hide();
      $('.nav').addClass('navbar-right').removeAttr('style');
      $('.nav li').removeAttr('style');


    } else if (xsScreen < $(window).width() /*&& $(window).width() < mdScreen*/ ) {

      $('.hamburger').hide();
      $('.menu').show();
      $('.nav').removeClass().addClass('nav navbar-nav').css({
        width: '100%',
        textAlign: 'center',
      });
      $('.nav li').css({
        display: 'inline-block',
        float: 'none',
      });

    }
  }

  if (smScreen < $(window).width()) {
    $('.locaux').animate({
      "left": "+=100%"
    }, 2000);

    $('.patuco').animate({
      "right": "+=100%"
    }, 2000);
  }


  // Menu hamburger
  $(".hamburger").on("click", function() {
    if ($('.menu').hasClass('active')) {
      $(this).toggleClass("is-active");
      $('.menu').hide().removeClass('active');
      $(".navbarMini").slideToggle();
    } else {
      $(this).toggleClass("is-active");
      $('.menu').show().addClass('active');
    }
  });



  /****************
  hover appartements
  ****************/


  /*
      $('.descri').show();
   $('.mont').on('mouseover', function() {
    $('.mont .descri').show();
  });
  $('.mont').on('mouseout', function() {
    $('.mont .descri').hide();
  });


  /****************
    Gérer l'apparition de .locaux et .patuco
  ****************/



  /****************
Scroll verticale
  ****************/
  $('.photos1').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
  });

  /****************
LOAD
  ****************/
  $("img.lazy").fadeIn(400);

  $("img.lazy").lazyload({
     effect : "fadeIn",
     effectspeed: 400,
     threshold : 3000,
     event : "wheel",
     event : "mouseover"
  });

});
