'use strict';
var inputQ = document.getElementById('question'),
	inputA = document.getElementById('answers'),
	inputCA = document.getElementById('currentAnswers'),
	Add = document.getElementById('add'),
	arrAnsw = [],
	arrCuAnsw = [],
	dataTest = [],
	qNumber = 0,
	arrCuAnswToNum,
	templateScript = $('#data').html(),
	template = Handlebars.compile(templateScript);

var data = {
	title: 'Your own test',
	questions: []
};

// ADD New question

Add.addEventListener('click', function(){
	if (inputQ.value && inputA.value && inputCA.value == true){
		arrAnsw.push(...inputA.value.split(/\s*,\s*/));
		arrCuAnsw.push(...inputCA.value.split(/\s*,\s*/));
		arrCuAnswToNum = arrCuAnsw.map(function(item){
			return +item;
		});

	data.questions.push(
			{
				question: ++qNumber + '-й вопрос',
				title: inputQ.value,
				answers: arrAnsw,
				right: arrCuAnswToNum,
			},
		);

		arrAnsw = [];
		arrCuAnsw = [];
		inputA.value = '';
		inputCA.value = '';
		inputQ.value = '';
		console.log(data);
		dataTest.push(...data.questions);
		console.log('dataTest: ',dataTest);

		$(document.body).append(template(data));

		resultButton = document.getElementById('testingButton');
		resultButton.addEventListener('click', testing);

		data.questions = [];
	} else {
		alert('Заполни все поля');
	}
});

// TEST - TEST :)

var	answInp = document.getElementsByClassName('checkbox');
var resultButton;

function testing(){
	
	var answArr = [],
		correctAnswersArr = [];
		
	for(let i = 0; i < answInp.length; i++){
		answArr.push(answInp[i].checked);
	}
	
	for(let i = 0;  i < dataTest.length; i++){
	  for(let j = 0; j < dataTest[i].answers.length; j++){
		correctAnswersArr.push(dataTest[i].right.includes(j+1));
	  }
	}
		
	var correctAnswersArrToString = JSON.stringify(correctAnswersArr),
		answArrToString = JSON.stringify(answArr);
		resultButton.style.display = 'none';
	var modaleClose = document.getElementById('modaleClose'),
		result = document.getElementById('result'),
		resultText = document.getElementById('result-text');
		
		modaleClose.addEventListener('click', closeModal);
		result.style.display = 'flex';
		
	function closeModal(){
		result.style.display = 'none';
		resultButton.style.display = 'block';
		for(let i = 0; i < answInp.length; i++){
			answInp[i].checked = false;
		}
	}
	
	if (correctAnswersArrToString == answArrToString) {
		resultText.textContent = 'Молодчинка :)'
	} else {
		resultText.textContent = 'Иди учись :(';
	}
	
}