<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cafe;
class CafeController extends Controller
{
    function add(Request $request){
        $cafe = new cafe;
        $cafe->name=$request->name;
        $cafe->location=$request->location;
        $cafe->description=$request->description;
        $cafe->reviewed_by=$request->reviewed_by;
        $cafe->image=$request->image;
        if($cafe->save()){
            return response()->json([
                "Cafe" => $cafe
            ]);
        }
    }
}
