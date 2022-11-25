<?php

namespace App\Imports;

use App\Models\Logger;
use Maatwebsite\Excel\Concerns\ToModel;

class LoggersImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Logger([
            'id'     => $row[0],
            'user_id'    => $row[1],
            'ip'    => $row[2],
            'country'    => $row[3],
            'city'    => $row[4],
            'browser'    => $row[5],
            'browser_version'    => $row[6],
            'platform'    => $row[7],
            'platform_version'    => $row[8],
            'agent'    => $row[9],
            'host'    => $row[10],
            'created_at'    => $row[11],
            'updated_at'    => $row[12],
        ]);
    }
}
