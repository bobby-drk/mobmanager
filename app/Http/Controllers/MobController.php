<?php

namespace App\Http\Controllers;

use App\Models\Mob;
use Illuminate\Http\Request;
use Response;

class MobController extends Controller
{
    public function show($slug)
    {
        return Response::json([
            'data' => Mob::where("slug", $slug)->firstOrFail()
        ], 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:mobs|max:255',
            'storage' => 'required|json',
        ]);

        $mob = new Mob;

        $mob->name = $request->name;
        $mob->slug = str_slug($request->name);
        $mob->storage = $request->storage;

        $mob->save();

        return Response::json([
            'data' => $mob
        ], 201);
    }

    public function update(Request $request, $slug)
    {
        $this->validate($request, [
            'storage' => 'required|json',
        ]);
        $mob = Mob::where("slug", $slug)->firstOrFail();
        $mob->storage = $request->storage;
        $mob->save();

        return Response::json([], 200);
    }
    public function destroy(Request $request, $slug)
    {
        $mob = Mob::where("slug", $slug)->firstOrFail();
        $mob->delete();
    }

    public function changeName(Request $request)
    {
        $this->validate($request, [
            'current' => 'required|max:255',
            'name' => 'required|unique:mobs|max:255',
        ]);
        $mob = Mob::where("slug", $request->current)->firstOrFail();
        $mob->name = $request->name;
        $mob->save();

        return Response::json([], 200);
    }
}
