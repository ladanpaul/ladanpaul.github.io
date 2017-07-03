;(function($){
  'use strict';
  $.fn.slider = function(){
	    var $slide = $('.pslider__item'),
        $img = $('.pslider__item img'),
        $move = 0,
        $amountImg = 0;
        $('#pre').attr('disabled', 'disabled').css({
          display: 'none'
        });

    $('#next').click(function(){
        $('#pre').removeAttr('disabled').css({
          display: 'inline-block',
        });
        $move -= 500;
        $amountImg += 1;
        $slide.css({
          left: $move+'px',
        });
        if($amountImg == $slide.length - 1){
          $('#next').attr('disabled', 'disabled').css({
            display: 'none',
          });
        }
		
    });

    $('#pre').click(function(){
      $('#next').removeAttr('disabled').css({
        display: 'inline-block',
      });
      $move += 500;
      $amountImg -= 1;
      $slide.css({
        left: $move+'px',
      });
      if($amountImg === 0){
        $('#pre').attr('disabled', 'disabled').css({
          display: 'none',
        });
      }
    });  
	 
	
	return this;
  }
	
})(jQuery);
