'use strict';

var data = {
	title: 'Important test!',
	questions: [
		{
			question: 1,
			title: '2*2+3*3',
			answers: [12,11,13,15],
			right: [3]
		},
		{
			question: 2,
			title: '2*10-15',
			answers: [10,'50/10','3*2-2',5,6],
			right: [2,4]
		},
		{
			question: 3,
			title: '(2*14)-(17-3)',
			answers: ['7*27-2*3', '8*8-3', '28+2-16', '28*(30+2)/31', '17*2-20'],
			right: [3,5]
		}
	]
}

var templateScript = $('#data').html(),
	template = Handlebars.compile(templateScript);
$(document.body).append(template(data));

var resultButton = document.querySelectorAll('button')[0],
	answInp = document.querySelectorAll('input');
resultButton.addEventListener('click', testing);

function testing(){
	
	var answArr = [],
		correctAnswersArr = [];
		
	for(let i = 0; i < answInp.length; i++){
		answArr.push(answInp[i].checked);
	}

	for(let i = 0;  i < data.questions.length; i++){
	  for(let j = 0; j < data.questions[i].answers.length; j++){
		correctAnswersArr.push(data.questions[i].right.includes(j+1));
	  }
	}
		
	var correctAnswersArrToString = JSON.stringify(correctAnswersArr),
		answArrToString = JSON.stringify(answArr);
	
	var wrapInner = document.getElementById('wrapper__inner');
		wrapInner.style.display = 'none';
		resultButton.style.display = 'none';
	var modaleClose = document.getElementById('modaleClose'),
		result = document.getElementById('result'),
		resultText = document.getElementById('result-text');
		
		modaleClose.addEventListener('click', closeModal);
		result.style.display = 'flex';
		
	function closeModal(){
		result.style.display = 'none';
		wrapInner.style.display = 'block';
		resultButton.style.display = 'block';
	}
	
	if (correctAnswersArrToString == answArrToString) {
		resultText.textContent = 'Yes, you won :)'
	} else {
		resultText.textContent = 'No luck, you lost :(';
	}
}



