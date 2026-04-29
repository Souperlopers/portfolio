<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', HomeController::class)->name('home');

Route::get('/projects', [ProjectController::class, 'index'])->name('projects');
Route::get('/projects/{projectSlug}', [ProjectController::class, 'show'])->name('project');

Route::get('/members', [MemberController::class, 'index'])->name('members');
Route::get('/{userSlug}', [MemberController::class, 'show'])->name('member');

Route::fallback(function () {
    return Inertia::render('NotFound');
});
