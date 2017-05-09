var arr = [];

for (var i = 0; i < 5; i++) {
  var names = prompt('Введите имя');
  arr.push(names);
}

console.log(arr);

var yourName = prompt('Введите имя для проверки');

var trigger = 0;

for(var i = 0; i < arr.length; i++) {
  if (arr[i] == yourName) {
    trigger++;
  }
}

if (trigger > 0) {
  alert("Ваше имя " + yourName);
} else {
  alert('Такого имени не существует');
}
