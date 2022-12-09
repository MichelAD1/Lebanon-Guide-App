<?php

namespace App\Http\Controllers;

use App\Models\Bar;
use Illuminate\Http\Request;

class BarController extends Controller
{
    function add(Request $request){
        $bar = new Bar;
        $bar->name=$request->name;
        $bar->location=$request->location;
        $bar->description=$request->description;
        $bar->reviewed_by=$request->reviewed_by;
        $bar->image=$request->image;
        if($bar->save()){
            return response()->json([
                "Bar" => $bar
            ]);
        }
    }
    function list(){
        $bar = Bar::all();
        return response()->json([
            "Bars" => $bar
        ]);
    }
}
