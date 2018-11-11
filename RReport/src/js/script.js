// ===Slider===

jQuery(document).ready(function($){

  let bx1 = $('.bxslider-agro').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000,
  });
  
  let bx2 = $('.bxslider-it').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000,
  });

  let bx3 = $('.bxslider-traid').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000,
  });

  let bx4 = $('.bxslider-devprod').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000,
  });

});

// open form
let openForm = false;
const form = $('.form-content')
form.css('display', 'none')

$('#phone-click').click(() => {
  openForm = true;
  form.slideDown(100)
})

$('#q-send-btn').click(() => {
  openForm = !openForm
  if (openForm) {
    form.slideDown(100)
  } else {
    form.slideUp(100)
  }
})



// init animate WOW

new WOW().init()


// animate puzzle hover

let puzzle = $('.puzzles .item');

puzzle.mouseenter(
  function() {
    puzzle.css("opacity", ".5")
    $(this).css("opacity", "1")
  }
)

puzzle.mouseleave(
  function() {
    puzzle.css({
      "opacity": "1",
      "transition": "opacity ease-in-out .2s"
    })
  }
)

// sticky header
$(document).on('scroll', function(){
  const navTop = $(this).scrollTop();
  if(navTop >= 70) {
    $('.header').addClass('header-fixed');
  } else {
    $('.header').removeClass('header-fixed');
  }
  if(navTop >= 100) {
    $('#arrow-btn').css('display', 'block');
  } else {
    $('#arrow-btn').css('display', 'none');
  }
});


let $input = $('input:text');
const $register = $('#register');    
$register.attr('disabled', true);

$input.keyup(function() {
    var trigger = false;
    $input.each(function() {
      if (!$(this).val()) {
        trigger = true;
      }
    });
    trigger ? $register.attr('disabled', true) : $register.removeAttr('disabled');
});

$register.click(() => {
  setTimeout(() => {
    alert('Спасибо за заявку! Наш специалист свяжется с Вами в ближайшее время');
  }, 2000)
})