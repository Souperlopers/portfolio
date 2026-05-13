<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\TagController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('/projects')->name('project')->group(function () {
    Route::get('/', [ProjectController::class, 'index'])->name('s');
    Route::get('/{project:slug}', [ProjectController::class, 'show']);
    Route::get('/{project:slug}/images', [ProjectController::class, 'images'])->name('.images');
    Route::get('/{project:slug}/technologies', [TagController::class, 'projectTags']);
    Route::get('/{project:slug}/contributors', [MemberController::class, 'index'])->name('.members');
    Route::get('/{project:slug}/contributors/{member:slug}', [TagController::class, 'ProjectMember'])->name('.member.tags');
});

Route::prefix('/members')->name('member')->group(function () {
    Route::get('/', [MemberController::class, 'index'])->name('s');
    Route::get('/{member:slug}', [MemberController::class, 'show']);
    Route::get('/{member:slug}/skills', [TagController::class, 'memberTags'])->name('.tags');
    Route::get('/{member:slug}/contributions', [ProjectController::class, 'index'])->name('.projects');
    Route::get('/{member:slug}/contributions/{project:slug}', [TagController::class, 'MemberProject'])->name('.project.tags');
});

Route::prefix('/technologies')->name('tag')->group(function () {
    Route::get('/', TagController::class)->name('s');
});
