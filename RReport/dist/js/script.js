'use strict';

// ===Slider===

jQuery(document).ready(function ($) {

  var bx1 = $('.bxslider-agro').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000
  });

  var bx2 = $('.bxslider-it').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000
  });

  var bx3 = $('.bxslider-traid').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000
  });

  var bx4 = $('.bxslider-devprod').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 6000
  });
});

// open form
var openForm = false;
var form = $('.form-content');
form.css('display', 'none');

$('#phone-click').click(function () {
  openForm = true;
  form.slideDown(100);
});

$('#q-send-btn').click(function () {
  openForm = !openForm;
  if (openForm) {
    form.slideDown(100);
  } else {
    form.slideUp(100);
  }
});

// init animate WOW

new WOW().init();

// animate puzzle hover

var puzzle = $('.puzzles .item');

puzzle.mouseenter(function () {
  puzzle.css("opacity", ".5");
  $(this).css("opacity", "1");
});

puzzle.mouseleave(function () {
  puzzle.css({
    "opacity": "1",
    "transition": "opacity ease-in-out .2s"
  });
});

// sticky header
$(document).on('scroll', function () {
  var navTop = $(this).scrollTop();
  if (navTop >= 70) {
    $('.header').addClass('header-fixed');
  } else {
    $('.header').removeClass('header-fixed');
  }
  if (navTop >= 100) {
    $('#arrow-btn').css('display', 'block');
  } else {
    $('#arrow-btn').css('display', 'none');
  }
});

var $input = $('input:text');
var $register = $('#register');
$register.attr('disabled', true);

$input.keyup(function () {
  var trigger = false;
  $input.each(function () {
    if (!$(this).val()) {
      trigger = true;
    }
  });
  trigger ? $register.attr('disabled', true) : $register.removeAttr('disabled');
});

$register.click(function () {
  setTimeout(function () {
    alert('Спасибо за заявку! Наш специалист свяжется с Вами в ближайшее время');
  }, 2000);
});