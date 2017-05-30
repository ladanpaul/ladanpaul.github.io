(function(){
  'use strict';
  var hrs, min, sec, mlsc, isOn, startTime, deltaTime;
  var pauseTime = 0;
  var start = document.getElementById('start');
  start.innerHTML = 'Старт';
  var stop = document.getElementById('stop');
  stop.innerHTML = 'Стоп';
  var seconds = document.getElementById('seconds');
  var millsec = document.getElementById('millsec');
  var minutes = document.getElementById('minutes');
  var hours = document.getElementById('hours');


  function timer() {
    deltaTime = Date.now() - startTime + pauseTime;
    hrs = Math.floor(deltaTime / 1000 / 26000%24);
    min = Math.floor(deltaTime / 1000 / 60%60);
    sec = Math.floor(deltaTime / 1000%60);
    mlsc = Math.floor(deltaTime / 1000 * 100%100);
    if (sec < 10) {
      sec = '0'+sec;
    }
    if (min < 10) {
      min = '0'+min;
    }
    if (hrs < 10) {
      hrs = '0'+hrs;
    }
    if (mlsc < 10) {
      mlsc = '0'+mlsc;
    }
    millsec.innerHTML = mlsc;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hours.innerHTML = hrs;
  }

  function handlerStart() {
    if(start.innerHTML == 'Старт'){
      startTime = Date.now();
      isOn = setInterval(timer,1);
      start.innerHTML = 'Пауза';
    } else {
      clearTimeout(isOn);
      startTime = 0;
      start.innerHTML = 'Старт';
      pauseTime = deltaTime;
    }
  }
  // var isActive = false;
  // function handlerStart() {
  //   if(!isActive){
  //     startTime = Date.now();
  //     isOn = setInterval(timer,1);
  //     start.innerHTML = 'Пауза';
  //     isActive = true;
  //   } else {
  //     clearTimeout(isOn);
  //     startTime = 0;
  //     start.innerHTML = 'Старт';
  //     pauseTime = deltaTime;
  //     isActive = false;
  //   }
  // }

  function handlerStop() {
    clearTimeout(isOn);
    deltaTime = 0;
    pauseTime = 0;
    start.innerHTML = 'Старт';
    millsec.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
  }

  start.addEventListener('click', handlerStart);
  stop.addEventListener('click', handlerStop);



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

})();
