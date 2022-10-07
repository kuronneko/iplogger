<?php

namespace App\Http\Controllers;

use App\Models\Logger;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoggerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $loggers = Logger::orderBy("id");

        //request()->session()->flash('message', 'Mensaje de prueba');

        $search = "";
        if (request()->has("search")) {
            $search = request("search");
            $loggers = $loggers->where('ip', 'like', '%' . $search . "%")
                ->orWhere('host', 'like', '%' . $search . "%");
        }

        $loggers = $loggers->paginate(10)->appends(request()->except("page"));

        //dd($users);
        return Inertia::render('Dashboard', compact('loggers','search'));

        //$loggers = Logger::paginate(5);
        //return Inertia::render('Dashboard', compact('loggers'));
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
    public function show($id)
    {
        //
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
    public function destroy($id)
    {
        //
    }
}
