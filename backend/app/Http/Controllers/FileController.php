<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function get(Request $request)
    {
        $settings = Settings::first();

        $agent = $request->header('User-Agent');

        if (strpos($agent, 'Macintosh') !== false) {
            return response()->json(['file' => $settings->macos_file]);
        } else {
            return response()->json(['file' => $settings->windows_file]);
        } 
    }
}
