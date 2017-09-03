'use strict'

$(function(){

  $(window).on("scroll load", function(){

    var w_scrolled = $(window).scrollTop();
    var w_height = $(window).height();

    if(w_scrolled > w_height * 0.05) {

      $(".navbar").addClass('nav-scrolled');

    } else if (w_scrolled < w_height * 0.05) {

      $(".navbar").removeClass('nav-scrolled');

    }


  });

  $(".nav-link").click(function() {
      $(".navbar-collapse").removeClass('show');
      $(".navbar-toggler").addClass('show');
  });


  $("a").click(function() {
     var dest = $(this).attr('href');
     var w_width = $(window).width();
        if(dest == "#a-contacts") {
          $('html,body').animate({ scrollTop: $(dest).offset().top - 50}, 'slow');
        } else {
          $('html,body').animate({ scrollTop: $(dest).offset().top - 150}, 'slow');
        }
  });


});

