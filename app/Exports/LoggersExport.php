<?php

namespace App\Exports;

use App\Models\Logger;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;

class LoggersExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        //return Logger::all();
        return Logger::where('user_id', Auth::user()->id)->get();
    }
}
