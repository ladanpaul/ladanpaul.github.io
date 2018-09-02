// ===Slider===

jQuery(document).ready(function($){

  let bx1 = $('.bxslider-agro').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000,
  });
  
  let bx2 = $('.bxslider-it').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000,
  });

  let bx3 = $('.bxslider-traid').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000,
  });

  let bx4 = $('.bxslider-devprod').bxSlider({
    mode: 'horizontal',
    randomStart: true,
    auto: true,
    pause: 4000,
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























