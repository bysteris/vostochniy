<?php
 
    header('Content-type: text/html; charset=utf-8 \r\n');
    
    //$hidden = empty($_POST['hidden'])? null : $_POST['hidden'];
    $name = empty($_POST['name'])? null : $_POST['name'];
    $phone = empty($_POST['tel'])? null : $_POST['tel'];
    $comment = empty($_POST['comment'])? null : $_POST['comment'];

    $message = '
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <title>Заявка с сайта ЖК Восточный</title>
    </head>
    <body>
    <h1>Заявка с сайта ЖК Восточный</h1>';

    if ($name) {
        $message .= '<strong>Имя: </strong>'.$name.'<br>';
    }
    if ($phone) {
        $message .= '<strong>Телефон: </strong>'.$phone.'<br>';
    }
    if ($comment) {
        $message .= '<strong>Комментарий: </strong>'.$comment.'<br>';
    }
    $message .= '</body>
    </html>';

    
    $subject = "Заявка с сайта ЖК Восточный";
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .='From: admin@no-reply.ru' . "\r\n";
    
    $to = "sales@uralsgroup.ru, eliseev.georgiy@yandex.ru";
    $result = mail($to, $subject, $message, $headers);
    
    if ($result)
    {
        echo json_encode(array('status' => true));
    }
    else
    {
        echo json_encode(array('status' => false));
    }