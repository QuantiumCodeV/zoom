<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::find($request->id);

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }

    public function status(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::find($request->id);

        $user->status = $request->status;

        $user->save();

        return response()->json(['status' => $user->status], 200);
    }
    public function create(Request $request)
    {   
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User;

        $user->name = $request->name;
        $user->password = bcrypt($request->password);

        $user->save();

        return response()->json(['message' => 'User created successfully'], 200);
    }

    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'login' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        
        if (Auth::attempt(['name' => $request->login, 'password' => $request->password])) {
            return redirect()->route("index");
        }
        return redirect()->route("login");

    }
    public function logout()
    {
        Auth::logout();
        return redirect()->route("login");
    }

    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::find($request->id);

        $user->password = bcrypt($request->password);

        $user->save();

        return response()->json(['message' => 'Password changed successfully'], 200);
    }
}
