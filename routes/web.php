<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::get('/journal', function() {
    $posts = App\Models\Post::where('deleted_at', null)->orderBy('created_at', 'desc')->paginate(10);
    return view('journal.home', compact('posts'));
})->name('journal.home');

Route::get('/u/journal/index', [App\Http\Controllers\JournalController::class, 'index'])->name('journal.index');
Route::get('/u/journal/create', [App\Http\Controllers\JournalController::class, 'create'])->name('journal.create');
Route::post('/u/journal/store', [App\Http\Controllers\JournalController::class, 'store'])->name('journal.store');
Route::get('/u/journal/{url}/edit', [App\Http\Controllers\JournalController::class, 'edit'])->name('journal.edit');
Route::put('/u/journal/update/{id}', [App\Http\Controllers\JournalController::class, 'update'])->name('journal.update');
Route::get('/journal/{url}', function($url){
    $post = App\Models\Post::where('post_url', $url)->first();
    return view('journal.show', compact('post'));
})->name('journal.show');

Route::get('/resume', function () {
    return view('resume');
})->name('resume');

Route::get('/u/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
