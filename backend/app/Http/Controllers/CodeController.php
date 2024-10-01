<?php

namespace App\Http\Controllers;

use App\Models\Codes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;


use App\Http\Controllers\TelegramClass;

class CodeController extends Controller
{
    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|max:255|exists:codes,code'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $code = Codes::where("code", $request->code)->first();
        $code->delete();


        return response()->json(['message' => 'Code deleted successfully'], 200);
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|max:255|unique:codes',
            "userId" => "required|exists:users,id"
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $code = new Codes;

        $code->code = $request->code;
        $code->userId = $request->userId;
        $code->platform = "default";
        $code->status = "active";

        $code->save();
        $user = User::where("id", $request->userId)->first();
        TelegramClass::send("🔑Новый код создан: \n🗝Код: " . $request->code . "\n 🏅Воркер: " . $user->name);

        return response()->json(['message' => 'Code created successfully'], 200);
    }
}
