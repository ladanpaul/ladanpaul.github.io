<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$industry = $_POST['user_industry'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'developer08720@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$ctrDEV87'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('developer08720@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('p.ladan08720@gmail.com');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body = 'Пользователь <b>' .$name. '</b> оставил заявку, его данные: <br><b>Телефон:</b> ' .$phone. '<br><b>Почта:</b> ' .$email. '<br><b>Деятельность:</b> ' .$industry. '<br><b>Сообщение:</b> ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>