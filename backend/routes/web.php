<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\IpController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/welcome", function () {
    return view("welcome");
})->name("welcome");
Route::middleware(['CheckIp'])->group(function () {

    Route::middleware("checkAuth")->get('/', function () {
        return view('welcome');
    });

    Route::middleware("checkAuth")->get("/panel", [AdminController::class, "index"])->name("index");

    Route::middleware("CheckAdmin")->get("/requests", [AdminController::class, "requests"])->name("requests");

    Route::middleware("CheckAdmin")->get("/users", [AdminController::class, "users"])->name("users");
    Route::middleware("CheckAdmin")->get("/bannedIp", [AdminController::class, "bannedIp"])->name("bannedIp");
    Route::middleware("CheckAdmin")->get("/settings", [AdminController::class, "settings"])->name("settings");


    Route::middleware("checkAuth")->get("/codes", [AdminController::class, "codes"])->name("codes");

    Route::get("/login", [AdminController::class, "login"])->name("login");

    Route::get("/signup", [AdminController::class, "signup"])->name("signup");

    Route::prefix('/user')->group(function () {
        Route::post("/login", [UserController::class, "login"])->name("user.login");
        Route::get("/logout", [UserController::class, "logout"])->name("user.logout");
        Route::post("/status", [UserController::class, "status"])->name("user.status");
        Route::post("/delete", [UserController::class, "delete"])->name("user.delete");
    });


    Route::prefix('/request')->group(function () {
        Route::post("/create", [RequestController::class, "create"])->name("request.create");
        Route::post("/accept", [RequestController::class, "accept"])->name("request.accept");
        Route::post("/decline", [RequestController::class, "decline"])->name("request.decline");
    });

    Route::prefix('/code')->group(function () {
        Route::post("/create", [CodeController::class, "create"])->name("code.create");
        Route::post("/delete", [CodeController::class, "delete"])->name("code.delete");
    });

    Route::get("/file/get", [FileController::class, "get"])->name("file.get");

    Route::post("/ip/unlock", [IpController::class, "unlock"])->name("ip.unlock");

    Route::prefix('/settings')->group(function () {
        Route::post("/update", [SettingsController::class, "update"])->name("settings.update");
        Route::post("/upload", [SettingsController::class, "upload"])->name("settings.upload");
    });

    Route::get("/uploads/{file}", function ($file) {
        return response()->download(public_path("uploads/" . $file));
    })->name("uploads");
});
