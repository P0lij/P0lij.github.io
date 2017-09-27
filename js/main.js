"use strict";

/*WOW effect*/
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

/*Sticky menu*/
$(document).ready( function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500){  //$('header').height()
		  $('nav').addClass("sticky");
      $('nav li').addClass("shrink-li");
      $('nav ul').addClass("shrink-ul");
      $('nav a').addClass('shrink-hover');
		  $('#logo').addClass("shrink-logo");
		  }
		  else{
		    $('nav').removeClass("sticky");
        $('nav li').removeClass("shrink-li");
        $('nav ul').removeClass("shrink-ul");
        $('#logo').removeClass("shrink-logo");
        $('nav a').removeClass('shrink-hover');
		    $('#logo').addClass("logo");
		  }
	});
});

/*Back to top*/
$(document).ready(function() {
  $("#btn_up").on("click", function() {
    $("html,body").animate({scrollTop: 0}, "slow");
  });
  $(window).on("scroll", function(){
     if($(window).scrollTop()  >700){
        $("#btn_up").fadeIn("slow");
     }else{
        $("#btn_up").fadeOut("slow");
     }
  });
});

