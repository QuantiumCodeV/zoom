<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;

class SettingsController extends Controller
{

    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file',
        ]);

        $file = $request->file('file');
        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('uploads'), $fileName);

        // возвращает путь к файлу
        $filePath = asset('uploads/' . $fileName);

        return response()->json(['file' => $filePath]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'telegramBotToken' => 'required|string',
            'chatId' => 'required|string',
            'macos_file' => 'required|string',
            'windows_file' => 'required|string',
            'macos_file_modal' => 'required|string',
            'windows_file_modal' => 'required|string',
            'chatId2' => 'required|string',
        ]);

        $settings = Settings::first();
        $settings->telegramBotToken = $request->telegramBotToken;
        $settings->chatId = $request->chatId;
        $settings->chatId2 = $request->chatId2;
        $settings->macos_file_modal = $request->macos_file_modal;
        $settings->windows_file_modal = $request->windows_file_modal;
        $settings->macos_file = $request->macos_file;
        $settings->windows_file = $request->windows_file;
        $settings->save();

        TelegramClass::send("🔐Настройки обновлены");

        return redirect()->route('settings')->with('success', 'Settings updated successfully');
    }
}
