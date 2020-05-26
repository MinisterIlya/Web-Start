<?php

  $modalUserName = $_POST['modalUserName'];
  $modalUserEmail = $_POST['modalUserEmail'];
  $modalUserPhone = $_POST['modalUserPhone'];
  





// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->SMTPDebug = 0;
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();     
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;            
    $mail->Username   = 'ilyagusevworkmail@gmail.com';                     
    $mail->Password   = '199922b199922';
    $mail->SMTPSecure = 'ssl'; 
    $mail->Port       = 465;   

    //Recipients
    $mail->setFrom('ilyagusevworkmail@gmail.com');
    $mail->addAddress('uectd-99@mail.ru');     
    // Content
    $mail->isHTML(true);                       
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${modalUserName}, его телефон: ${modalUserPhone}. Его почта: ${modalUserEmail}";
    // $mail->Body    = "Имя пользователя: ${controlUserName}, его телефон: ${controlUserPhone}.";
    // $mail->Body    = "Имя пользователя: ${footerUserName}, его телефон: ${footerUserPhone}. Его вопрос: ${footerQuestion}";

    if ($mail->send()) {
      echo "ок!";
  } else {
      echo "Письмо не отправлено. Код ошибки: {$mail->ErrorInfo}";
  }
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}





?>