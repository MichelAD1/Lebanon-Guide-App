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
    function list(){
        $resto = Restaurant::all();
        return response()->json([
            "Restaurants" => $resto
        ]);
    }
    function searchPlace(Request $request){
        $resto = Restaurant::where("name", $request->name)->get();
        $bar = Bar::where("name", $request->name)->get();
        $beach = Beache::where("name", $request->name)->get();
        $cafe = Cafe::where("name", $request->name)->get();
        $rooftop = Rooftop::where("name", $request->name)->get();
        $result=array_merge(json_decode($resto, true),json_decode($bar, true),json_decode($beach, true),json_decode($cafe, true),json_decode($rooftop, true));
        return response()->json([
            "Places" => $result
        ]);
    }
}
