<?php

$controlUserName = $_POST['controlUserName'];
$controlUserPhone = $_POST['controlUserPhone'];

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$controlMail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $controlMail->SMTPDebug = 0;
    $controlMail->CharSet = 'UTF-8';
    $controlMail->isSMTP();     
    $controlMail->Host       = 'smtp.gmail.com';
    $controlMail->SMTPAuth   = true;            
    $controlMail->Username   = 'ilyagusevworkmail@gmail.com';                     
    $controlMail->Password   = '199922b199922';
    $controlMail->SMTPSecure = 'ssl'; 
    $controlMail->Port       = 465;   

    //Recipients
    $controlMail->setFrom('ilyagusevworkmail@gmail.com');
    $controlMail->addAddress('uectd-99@mail.ru');     
    // Content
    $controlMail->isHTML(true);                       
    $controlMail->Subject = 'Новая заявка с сайта';
    $controlMail->Body    = "Имя пользователя: ${controlUserName}, его телефон: ${controlUserPhone}.";

    if ($controlMail->send()) {
        echo "ок!";
    } else {
        echo "Письмо не отправлено. Код ошибки: {$mail->ErrorInfo}";
    }
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}

?>