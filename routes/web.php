<?php

use App\Http\Controllers\WebController;
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

Route::get('/test', function () {
	return Inertia::render('TestPage', []);
});

Route::controller(WebController::class)->name('web.')->group(function () {

	Route::get('/', 'home')->name('home');

	Route::get('/projects/{project:slug}', 'project')->name('project');

	Route::get('/{member:slug}', 'member')->name('member');
});
