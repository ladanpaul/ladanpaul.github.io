'use strict';

// ===Slider===

jQuery(document).ready(function ($) {

  var bx1 = $('.bxslider-agro').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000
  });

  var bx2 = $('.bxslider-it').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000
  });

  var bx3 = $('.bxslider-traid').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000
  });

  var bx4 = $('.bxslider-devprod').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000
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