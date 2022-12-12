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
    function get($id){
        $resto=restaurant::find($id);
        return response()->json([
            "Restaurant"=>$resto
        ]);
    }
    function searchPlace(Request $request){
        $array=[];
        $count=0;
        $count_e=0;
        $resto = Restaurant::where("name", $request->name)->get();
        $bar = Bar::where("name", $request->name)->get();
        $beach = Beache::where("name", $request->name)->get();
        $cafe = Cafe::where("name", $request->name)->get();
        $rooftop = Rooftop::where("name", $request->name)->get();
        if(!$cafe->isEmpty()){
            $count_e=count($cafe);
            for($i=0;$i<$count_e;$i++){
                $array[$count]="Cafe";
                $count++;
            }
            
        }if(!$rooftop->isEmpty()){
            $count_e=count($rooftop);
                for($i=0;$i<$count_e;$i++){
                    $array[$count]="Rooftop";
                    $count++;
                }
            
        }if(!$resto->isEmpty()){
            $count_e=count($resto);
                for($i=0;$i<$count_e;$i++){
                    $array[$count]="Restaurant";
                    $count++;
                }
        }if(!$bar->isEmpty()){
            $count_e=count($bar);
                for($i=0;$i<$count_e;$i++){
                    $array[$count]="Bar";
                    $count++;
                }    
        }if(!$beach->isEmpty()){
            $count_e=count($beach);
            for($i=0;$i<$count_e;$i++){
                $array[$count]="Beach";
                $count++;
            }
        }
        $result=array_merge(json_decode($resto, true),json_decode($bar, true),json_decode($beach, true),json_decode($cafe, true),json_decode($rooftop, true),$array);
        return response()->json([
            "Places" => $result
        ]);
    }
}
