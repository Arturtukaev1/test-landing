<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

$name = htmlspecialchars ($name);
$email = htmlspecialchars ($email);
$msg = htmlspecialchars ($msg);

$name = urldecode ($name);
$email = urldecode ($email);
$msg = urldecode ($msg);

$name = trim($name);
$email = trim($email);
$msg = trim($msg);

if (mail(
    "admin@mail.com",
    "Новое письмо с сайта",
    "Имя:".$name."\n".
    "Email:".$email."\n".
    "Сообщение:".$msg,
    "From: no-reply@zztuk.com \r\n")
) {
    echo ('The email has been sent successfully!')
}

else {
    echo ('Error! Check the data.')
}
?>