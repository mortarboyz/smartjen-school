<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('admin')->group(function () {
    Route::post('/register', [AdminController::class, 'store']);
    Route::post('/login', [LoginController::class, 'authenticate']);
    Route::post('/invite', [AdminController::class, 'invite'])->middleware(['auth:sanctum:admins']);
});
Route::resource('users', UserController::class)->except(['create', 'edit']);
Route::get('roles', [UserController::class, 'getRoles']);
