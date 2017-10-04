'use strict';

// $(document).on('scroll', function(){
//   var navTop = $(this).scrollTop();
//   if(navTop >= 450) {
//     $('.nav-menu').addClass('nav-fixed');
//   } else {
//     $('.nav-menu').removeClass('nav-fixed');
//   }
// });

document.addEventListener('scroll', function () {
  var navTop = window.pageYOffset || document.documentElement.scrollTop;
  if (navTop >= 450) {
    document.querySelector('.nav-menu').classList.add('nav-fixed');
  } else {
    document.querySelector('.nav-menu').classList.remove('nav-fixed');
  }
});