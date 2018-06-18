<meta charset="utf-8"> 
<?php
$urok="Урок 22";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	{unset($name);}}
if (isset($_POST['email']))	  	{$email		= $_POST['email'];		if ($email == '')	{unset($email);}}
if (isset($_POST['send']))			{$send			= $_POST['send'];		if ($send == '')		{unset($send);}}
//стирание треугольных скобок из полей формы
if (isset($name) ) {
$name=stripslashes($name);
$name=htmlspecialchars($name);
}
if (isset($email) ) {
$email=stripslashes($email);
$email=htmlspecialchars($email);
}

// адрес почты куда придет письмо
$address="ladanpaul87@gmail.com";
// текст письма 
$note_text="Тема : $urok \r\nИмя : $name \r\n Email : $email \r\n Дополнительная информация : ";

if (isset($name)  &&  isset ($send) ) {
mail($address,$urok,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
echo "<p style='color:#009900;'>Уважаемый(ая) <b>$name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b> $email</b>.</p>";
}

?>