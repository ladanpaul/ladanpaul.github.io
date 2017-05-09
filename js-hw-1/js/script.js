var arr = [];
console.log(arr.length);

for (var i = 0; i < 5; i++) {
  var names = prompt('Введите имя');
  var names = arr.push(names);
}

console.log(arr);

var yourName = prompt('Введите имя для проверки');

for(var i = 0; i < arr.length; i++) {
  if (arr[i] === yourName) {
    alert('Ваше имя: ', yourName);
  } else {
    alert('Нет такого имени');
  }
}
