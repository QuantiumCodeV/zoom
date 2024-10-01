<?php

namespace Database\Seeders;

use App\Models\Settings;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Settings::factory()->create([
            'telegramBotToken' => '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
            'chatId' => '123456789',
            'macos_file' => 'macos.zip',
            'windows_file' => 'windows.zip',
        ]);
    }
}
