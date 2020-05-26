<?php

  $footerUserName = $_POST['footerUserName'];
  $footerQuestion = $_POST['footerQuestion'];
  $footerUserPhone = $_POST['footerUserPhone'];

  require 'phpmailer/Exception.php';
  require 'phpmailer/PHPMailer.php';
  require 'phpmailer/SMTP.php';

  $footerMail = new PHPMailer\PHPMailer\PHPMailer();

    try {
        $footerMail->SMTPDebug = 0;
        $footerMail->CharSet = 'UTF-8';
        $footerMail->isSMTP();     
        $footerMail->Host       = 'smtp.gmail.com';
        $footerMail->SMTPAuth   = true;            
        $footerMail->Username   = 'ilyagusevworkmail@gmail.com';                     
        $footerMail->Password   = '199922b199922';
        $footerMail->SMTPSecure = 'ssl'; 
        $footerMail->Port       = 465;   

        //Recipients
        $footerMail->setFrom('ilyagusevworkmail@gmail.com');
        $footerMail->addAddress('uectd-99@mail.ru');     
        // Content
        $footerMail->isHTML(true);                       
        $footerMail->Subject = 'Новая заявка с сайта';
        $footerMail->Body    = "Имя пользователя: ${footerUserName}, его телефон: ${footerUserPhone}. Его вопрос: ${footerQuestion}";

        if ($footerMail->send()) {
            echo "ок!";
        } else {
            echo "Письмо не отправлено. Код ошибки: {$mail->ErrorInfo}";
        }
    } catch (Exception $e) {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }

?>