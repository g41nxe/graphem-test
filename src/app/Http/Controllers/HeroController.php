<?php

namespace App\Http\Controllers;

use App\Hero;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Faker\Generator;

class HeroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Hero::all()->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'requierd|string',
            'hit_points' => 'required|integer',
            'attack' => 'required|integer',
            'side' => 'requierd|in:Dark,Light',
            'special_ability' => 'required|text'
        ]);

        $hero = new Hero();
        $hero->fill($data);
        $hero->save();
      
        return response($hero->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Hero  $hero
     * @return \Illuminate\Http\Response
     */
    public function show(Hero $hero)
    {
        return response($hero->jsonSerialize(), Response::HTTP_CREATED);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Hero  $hero
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hero $hero)
    {
        $hero->delete();

        return response(null, Response::HTTP_OK);
    }
}
