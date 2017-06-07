//==========TABS===
$(document).ready(function(){
  'use strict';

  var $tab__item = $('.tab__item'),
  $tab = $('.tab'),
  $wrapper = $('.wrapper');
  $tab__item.not(':first-of-type').hide();
  $tab.addClass('active').not(':first-of-type').removeClass('active');

  $tab.click(function(){
    $tab.removeClass('active').eq($(this).index()).addClass('active');
    $tab__item.hide().eq($(this).index()).fadeIn();
  });
});

//=========Form=======

$(document).ready(function(){
  'use strict';
  var $showHelp = $('#showHelp'),
      $input = $('.form__input'),
      $label = $('.form__item'),
      $hint = $('.hint');

      $input.hover(
        function(){
        $(this).next($hint).fadeIn(600);
      }, function(){
        $hint.hide();
      }
    );

    $showHelp.click(function(){
      $hint.show();
    });

});
