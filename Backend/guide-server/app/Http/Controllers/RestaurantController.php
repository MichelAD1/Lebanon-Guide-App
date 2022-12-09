<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use App\Models\Bar;
use App\Models\Cafe;
use App\Models\Rooftop;
use App\Models\Beache;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    function add(Request $request){
        $resto = new Restaurant;
        $resto->name=$request->name;
        $resto->location=$request->location;
        $resto->description=$request->description;
        $resto->reviewed_by=$request->reviewed_by;
        $resto->image=$request->image;
        if($resto->save()){
            return response()->json([
                "Restaurant" => $resto
            ]);
        }
    }
}
