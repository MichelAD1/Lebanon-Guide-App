<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rooftop;
class RooftopController extends Controller
{
    function add(Request $request){
        $rooftop = new rooftop;
        $rooftop->name=$request->name;
        $rooftop->location=$request->location;
        $rooftop->description=$request->description;
        $rooftop->reviewed_by=$request->reviewed_by;
        $rooftop->image=$request->image;
        if($rooftop->save()){
            return response()->json([
                "Rooftop" => $rooftop
            ]);
        }
    }
    function list(){
        $rooftop = rooftop::all();
        return response()->json([
            "Rooftops" => $rooftop
        ]);
    }
    function get($id){
        $rooftop=rooftop::find($id);
        return response()->json([
            "Rooftop"=>$rooftop
        ]);
    }
}
