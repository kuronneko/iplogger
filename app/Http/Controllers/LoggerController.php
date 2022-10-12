<?php

namespace App\Http\Controllers;

use App\Models\Logger;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Jenssegers\Agent\Facades\Agent;
use Stevebauman\Location\Facades\Location;

class LoggerController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getNetwork(){
        try {
        /*     $ip = getenv('HTTP_CLIENT_IP')?:
            getenv('HTTP_X_FORWARDED_FOR')?:
            getenv('HTTP_X_FORWARDED')?:
            getenv('HTTP_FORWARDED_FOR')?:
            getenv('HTTP_FORWARDED')?:
            getenv('REMOTE_ADDR'); */
            $ip = '200.86.155.87';
            $uuid = Request::route('uuid');
            $logger = new Logger();
           // $logger->user_id = User::where('uuid', $uuid)->first()->id;
            $logger->user_id = Setting::where('uuid', $uuid)->first()->user->id;
            $logger->ip = $ip;
            $logger->country = Location::get($ip)->countryName;
            $logger->city = Location::get($ip)->cityName;
            $logger->browser = Agent::browser();
            $logger->browser_version = Agent::version(Agent::browser());
            $logger->platform = Agent::platform();
            $logger->platform_version = Agent::version(Agent::platform());
            $logger->agent = Request::header('user-agent');
            $logger->host = gethostbyaddr($ip);
            $logger->save();

            if($logger->user->setting->silence_mode == 1){
                return response()->json(['success' => 'Connection successfully']);
            }else if($logger->user->setting->silence_mode == 0 && $logger->user->setting->redirect =! null){
                return Redirect::away($logger->user->setting->redirect);
            }

        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $loggers = Logger::where('user_id', Auth::user()->id)->orderBy("created_at", 'desc');
        $search = "";
        if (request()->has("search")) {
            $search = request("search");
            $loggers = $loggers->where('ip', 'like', '%' . $search . "%")
                ->orWhere('country', 'like', '%' . $search . "%")
                ->orWhere('city', 'like', '%' . $search . "%");
        }
        $loggers = $loggers->paginate(10)->appends(request()->except("page"));
        return Inertia::render('Logger/Index', compact('loggers','search'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Logger $logger)
    {
        return Inertia::render('Logger/Index', compact('logger'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Logger $logger)
    {
        $logger->delete();
        return redirect()->back()->with('message', 'Logger deleted');
    }
}
