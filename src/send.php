<?php
$fio = $_POST['fname'];
$phone = $_POST['phone'];
$email = $_POST['user_email'];
$fio = htmlspecialchars($fname);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($user_email);
$fio = urldecode($fname);
$phone = urldecode($phone);
$email = urldecode($user_email);
$fio = trim($fname);
$phone = trim($phone);
$email = trim($user_email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("thedickst@gmail.com", "Заявка с сайта", "ФИО:".$fname.".Номер телефона: "$phone". E-mail: ".$user_email , "From:" $user_email))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>