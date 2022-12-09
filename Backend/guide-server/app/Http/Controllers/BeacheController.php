<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beache;
class BeacheController extends Controller
{
    function add(Request $request){
        $beach = new Beache;
        $beach->name=$request->name;
        $beach->location=$request->location;
        $beach->description=$request->description;
        $beach->reviewed_by=$request->reviewed_by;
        $beach->image=$request->image;
        if($beach->save()){
            return response()->json([
                "Beach" => $beach
            ]);
        }
    }
    function list(){
        $beach = Beache::all();
        return response()->json([
            "Beaches" => $beach
        ]);
    }
}
