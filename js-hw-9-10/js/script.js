// ===Slider===

$('document').ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    randomStart: true,
    auto: true,
    pause: 7000
  });
});

// ===SELECT===

$('document').ready(function(){
  $(".dropdown").chosen({
    no_results_text: 'Поищи в другом месте: '
  });
});

//== Drop MENU===


$('document').ready(function(){
  var $menuli = $('.menu li'),
      $menuitem = $('.menu__item');
    $menuli.hover(function(){
      $(this).children(':first-of-type').fadeIn();
    }, function(){
      $(this).children(':first-of-type').hide();
      $menuitem.find('a').show();
    }
  );
});


// =========CheckBox=====

$('document').ready(function(){
var $text = $('#text');
  $text.click(function(){
    $text.text('Жми ещё');
    if($text.text('Жми ещё')) {
      $text.click(function(){
        $text.text('Поломал :(');
      });
    }
      $text.click(function(){
        if($text.text('Поломал :(')){
          $('input').attr('disabled','disabled');
          $('.checkBox').css('background-color', '#aaaaaa');
        }
      });
  });
});
