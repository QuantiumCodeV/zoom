<?php

namespace App\Http\Controllers;

use App\Models\Codes;
use App\Models\Requests;
use App\Models\Settings;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\BannedIp;

class AdminController extends Controller
{
    public function settings(){
        $activeUser = auth()->user();
        $settings = Settings::find(1);
        $requestsCount = Requests::all()->count();
        return view("settings", [
            "activeUser" => $activeUser,
            "requests" => $requestsCount,
            "settings" => $settings,
        ]);
    }
    public function bannedIp(){
        $bannedIp = BannedIp::all();
        $activeUser = auth()->user();
        $requestsCount = Requests::all()->count();
        return view("ips", [
            "bannedIps" => $bannedIp, 
            "activeUser" => $activeUser,
            "requests" => $requestsCount,
        ]);
    }

    public function index(){
        $activeUser = auth()->user();
        $count = Codes::where("userId", $activeUser->id)->count();
        $totalActivations = Codes::where('userId', $activeUser->id)->sum('activations');
        $requestsCount = Requests::all()->count();

        return view("index", [
            "activeUser" => $activeUser, 
            "count" => $count,
            "requests" => $requestsCount,
            "totalActivations" => $totalActivations,
        ]);
    }

    public function codes(){

        $user = auth()->user();

        if($user->status != "admin"){
            $codes = Codes::where("userId", $user->id)->get();
        }
        else{
            $codes = Codes::all();
        }
        $requestsCount = Requests::all()->count();
        return view("codes", [
            "activeUser" => $user,
            "codes" => $codes,
            "requests" => $requestsCount,
        ]);
    }

    public function users(){
        $users = User::all();
        $activeUser = auth()->user();
        $requestsCount = Requests::all()->count();
        return view("users", [
            "users" =>  $users,
            "activeUser" => $activeUser,
            "requests" => $requestsCount,
        ]);
    }

    public function login(){
        if(auth()->check()){
            return redirect()->route("index");
        }
        return view("login");
    }

    public function requests(){
        $activeUser = auth()->user();
        $requestsCount = Requests::all()->count();
        return view("requests", [
            "requests" => Requests::all(), 
            "activeUser" => $activeUser,
            "requestsCount" => $requestsCount,
        ]);
    }

    public function signup(){
        if(auth()->check()){
            return redirect()->route("index");
        }
        return view("signup");
    }
}
