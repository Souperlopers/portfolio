<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', "HomeController")->name('home');

Route::get('/projects', "ProjectController@index")->name('projects');
Route::get('/projects/{projectSlug}', "ProjectController@show")->name('project');

Route::get('/members', "MemberController@index")->name('members');
Route::get('/{userSlug}', "MemberController@show")->name('member');

Route::fallback(function () {
    return view('pages.404');
});
