'use strict'

$(function(){

  var sw1 = "#sw1";
  var sw2 = "#sw2";
  var sw3 = "#sw3";
	var countWrap = ".count-wrapper";
  var rw1 = "#rw1";
  var rw2 = "#rw2";
  var rw3 = "#rw3";
	
	var show = true;

	$(window).on("scroll", function(){
    checkVisibility(sw1);
    checkVisibility(sw2);
    checkVisibility(sw3);
		checkVisibility(countWrap);
    checkVisibility(rw1);
    checkVisibility(rw2);
    checkVisibility(rw3);
	});

  $('.masthead').find('h1').addClass('animated fadeIn')
    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
         function() {
            $(this).removeClass('hidden animated fadeIn').addClass('animated pulse');
         });

  $('.masthead').find('p').addClass('animated fadeInDown');
  $('.masthead').find('a').addClass('animated fadeInDown');

	function checkVisibility(element) {
		
	    var w_top = $(window).scrollTop();
	    var e_top = $(element).offset().top;
	    var w_width = $(window).width();
      var e_height = $(element).outerHeight();
	
	    switch(element) {

          case sw1:
          case sw2:
          case sw3:
              if(w_top + w_width / 2 + e_height >= e_top) {
                  $(element).closest('.service').removeClass('hidden')
                                              .addClass('animated fadeInDown');
              }

              break;

    	    case countWrap:
              if(!show) return false;
      	    	  if(w_top + w_width / 3 + e_height >= e_top) {
      	    	       $('.count-wrapper').removeClass('hidden');
      	             count();
      	             show = false;
                }

              break;

          case rw1:
              if(w_top + w_width / 3 + e_height >= e_top) {
                  $(element).closest('.review').removeClass('hidden')
                                      .addClass('animated fadeInLeft');
              }

              break;

          case rw2:
              if(w_top + w_width / 5 + e_height >= e_top) {
                  if(w_width >= 992) {
                    $(element).closest('.review').removeClass('hidden')
                                       .addClass('animated fadeInUp');
                  } else {
                    $(element).closest('.review').removeClass('hidden')
                                       .addClass('animated fadeInRight');
                  }
                }

              break;

            case rw3:
                if(w_top + w_width / 5 + e_height >= e_top) {
                    if(w_width >= 992) {
                      $(element).closest('.review').removeClass('hidden')
                                         .addClass('animated fadeInRight');
                    } else {
                      $(element).closest('.review').removeClass('hidden')
                                         .addClass('animated fadeInLeft');
                    }
                  }

                break;
            }

      	 }




	function count() {
		$('.count-digits').each(function() {
			$(this).prop('Counter', 0).animate({
				Counter:$(this).text()
			},{
				duration: 3000,
				step:function(now){
					$(this).text(Math.ceil(now))
				}
			})
		})
	}

});

