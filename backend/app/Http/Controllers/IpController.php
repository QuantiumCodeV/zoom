<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BannedIp;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\TelegramClass;

class IpController extends Controller
{
    
    public function unlock(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:banned_ips,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $bannedIp = BannedIp::find($request->id);

        $bannedIp->delete();

        TelegramClass::send("🚨Ip - " . $bannedIp->ip . " разбанен");

        return response()->json(['message' => 'Ip unbanned successfully'], 200);
    }
}
