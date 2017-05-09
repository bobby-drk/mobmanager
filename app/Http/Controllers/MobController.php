<?php

namespace App\Http\Controllers;

use App\Models\Mob;
use Illuminate\Http\Request;
use Response;

class MobController extends Controller
{
    public function store(Request $request)
    {
        $name = $request->input('name');
        $data = $request->input('data');

        $mob = new Mob;

        $mob->name = $request->name;
        $mob->data = $request->data;

        $mob->save();

        return Response::json([
            'data' => $mob
        ], 201);
    }
}
