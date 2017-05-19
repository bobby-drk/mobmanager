<?php

namespace App\Http\Controllers;

use App\Models\Mob;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index ($slug = "") {

        $mob = [];
        if(!empty($slug)) {
            $mob = Mob::where("slug", $slug)->firstOrFail()->toArray();
        }

        return view('mobBoard', $mob);
    }
}
