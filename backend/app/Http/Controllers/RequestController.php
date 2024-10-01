<?php

namespace App\Http\Controllers;

use App\Models\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\BannedIp;
use App\Http\Controllers\TelegramClass;

class RequestController extends Controller
{
    public function decline(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $request = Requests::find($request->id);

        // Испурльзование firstOrNew для избежания дубликатов
        $bannedIp = BannedIp::firstOrNew(['ip' => $request->ip]);
        // Так как firstOrNew не вызывает save() автоматически, нам все равно нужно вызвать save()
        $bannedIp->save();
        Auth::logout();

        $request->delete();

        TelegramClass::send("Заявка для " . $request->ip . " была отклонена");

        return response()->json(['status' => $request->status], 200);
    }
    public function accept(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $request = Requests::find($request->id);

        $user = new User;

        $user->name = $request->name;
        $user->password = $request->password;
        $user->status = "user";
        $user->ip = $request->ip;

        $user->save();

        $request->delete();

        TelegramClass::send("Заявка принята\nИмя:".$request->name."\nIP: " . $request->ip);


        return response()->json(['status' => $request->status], 200);
    }
    public function create(Request $request)
    {
        // Валидация
        $validator = Validator::make($request->all(), [
            'login' => 'required|max:255|unique:users,name|unique:requests,name',
            'password' => 'required',
            'confirmPassword' => "required"
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->password != $request->confirmPassword) {
            return response()->json(['message' => 'Passwords do not match'], 400);
        }

        $newRequest = new Requests;
        $ip = $request->ip();
        $newRequest->name = $request->login;
        $newRequest->password = bcrypt($request->password);
        $newRequest->ip = $ip;
        try {
            $newRequest->save();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Request already exists'], 400);
        }

        TelegramClass::send("📢Кто-то оставил заявку:\n🚨Имя: " . $request->login . "\n🧑‍💻IP: " . $ip);

        return response()->json($request, 200);
    }
}
