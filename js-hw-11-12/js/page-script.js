'use strict';
$('document').ready(function(){
	var $signIn = $('.signIn');
	var page = {
		birth: '',
		name: '',
		surname: '',
		phone: '',
		email: '',
		hobie: ''
	};
	
	$signIn.click(function(){
		page.birth = $('.dateOfBirth').val();
		page.name = $('.firstName').val();
		page.surname = $('.lastName').val();
		page.phone = $('.phone').val();
		page.email = $('.email').val();
		page.hobie = $('.hobie').val();

		var templateScript = $('#page').html(),
			template = Handlebars.compile(templateScript);

		$(document.body).append(template(page));
		
		$('.wrapper').css({
			display: 'none'
		})
		$('.page-substrate').css({
			display: 'flex'
		})
	});
});