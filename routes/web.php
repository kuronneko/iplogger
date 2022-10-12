<?php

use App\Http\Controllers\LoggerController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Jenssegers\Agent\Facades\Agent;
use Stevebauman\Location\Facades\Location;
use Illuminate\Support\Facades\Request;

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
/*     $ip = getenv('HTTP_CLIENT_IP')?:
    getenv('HTTP_X_FORWARDED_FOR')?:
    getenv('HTTP_X_FORWARDED')?:
    getenv('HTTP_FORWARDED_FOR')?:
    getenv('HTTP_FORWARDED')?:
    getenv('REMOTE_ADDR'); */
    $ip = '200.86.155.87';
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'date' => now(),
        'userAgent' => Request::header('user-agent'),
        'location' =>  Location::get($ip),
        'browser' => Agent::browser(),
        'browserVersion' => Agent::version(Agent::browser()),
        'platform' => Agent::platform(),
        'platformVersion' => Agent::version(Agent::platform()),
        'host' => gethostbyaddr($ip),
    ]);
});

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified', ])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', ['user'=> User::where('id', Auth::user()->id)->with(['setting'])->first() ]);
    })->name('dashboard');
    //Route::get('/dashboard', [LoggerController::class, 'index'])->name('dashboard');
    Route::resource('logger', LoggerController::class);
    Route::post('/silence-mode', [LoggerController::class, 'silenceToggle'])->name('silence_mode');
    Route::post('/save-redirect', [LoggerController::class, 'saveRedirect'])->name('save_redirect');
});
