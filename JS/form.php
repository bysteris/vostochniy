<?php
$addresses = array(
    'ya.dom19@yandex.ru',
    'sb.steris@gmail.com',
);
 
if (isset($_REQUEST['mes']) && !empty($_REQUEST['mes'])){
    if (empty($_REQUEST['span'])){
        $name = $_REQUEST['name'];
        $phone = $_REQUEST['phone'];
        $comment = $_REQUEST['comment'];
        $send = "Заявка с сайта жквосточныйуфа.рф";
        $to= implode(', ', $addresses);
        $from = "no-replay@ru-bezh.ru";
        $subject = "Заявка от сайта";
        $headers = "From: $from\r\nReplay-To: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
        mail($to, $subject, $send, $headers);
    }
}
?>