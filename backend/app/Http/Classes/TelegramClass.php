<?php

namespace App\Http\Controllers;

use App\Models\Codes;
use App\Models\Requests;
use App\Models\Settings;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\BannedIp;

class TelegramClass 
{
    public function send($text){
        $settings = Settings::find(1);
        $chat_id = $settings->chatId;
        $token = $settings->botToken;
        $url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$text";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

}

