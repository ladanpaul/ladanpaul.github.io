(function() {
  'use strict';
  var test = {
    data: {
          title: 'Тест по какой-то теме',
          questions: [
            {
              title: 'Вопрос №1',
              answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3']
            },
            {
              title: 'Вопрос №2',
              answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3', 'Вариант ответа 4']
            },
            {
              title: 'Вопрос №3',
              answers: ['Вариант ответа 1', 'Вариант ответа 2']
            }
          ]
        },
    generatePage: function(){
      var questions = this.data.questions;
      var form = addElem('form', null, null);
      var topTitle = addElem('h1', 'topTitle', 'Тест по программированию');
      form.appendChild(topTitle);

      for (var q = 0, length = questions.length; q < length; q++) {

        var h4 = addElem('h4', 'title', questions[q].title);
        var ul = addElem('ul', 'list', null);
        ul.appendChild(h4);
        form.appendChild(ul);
        form.setAttribute('action', '#');

            for (var a = 0, lengthArr = questions[q].answers.length; a < lengthArr; a++){
              var li = addElem('li', 'item', null);
              var label = addElem('label', null, null);
              var checkbox = addElem('input', 'check', null);
              var span = addElem('span', null, questions[q].answers[a]);
              checkbox.setAttribute('type', 'checkbox');
              ul.appendChild(li);
              li.appendChild(label);
              label.appendChild(checkbox);
              label.appendChild(span);
            }
      }

      var submit = addElem('input', 'submit', null);
      submit.setAttribute('type','submit');
      submit.setAttribute('value','Проверить мои результаты');
      form.appendChild(submit);

      function addElem (tag, cls, node) {
          var newTag = document.createElement(tag);

          if (cls && (typeof cls === 'string')){
            newTag.classList.add(cls);
          }
          if(node && (typeof node === 'string')){
            newTag.appendChild(document.createTextNode(node));
          }
          return newTag;

      }

      var root = document.getElementById('root');
      root.appendChild(form);
    }
  }

  test.generatePage();

})();
