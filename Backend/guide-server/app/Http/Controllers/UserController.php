<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function signupOrUpdate(Request $request,$id=null){
        if($id){
            $user = User::find($id);
            if($request->has('first_name')){
                $user->update(["first_name"=>$request->first_name]);
            }
            if($request->has('last_name')){
                $user->update(["last_name"=>$request->last_name]);
            }
            if($request->has('email')){
                $users = User::where("email", $request->email)->exists();
                if($users){
                    return response()->json([
                        "User" => "Invalid email"
                    ]);
                }else{
                    $user->update(["email"=>$request->email]);
                }
            }
            if($request->has('password')){
                $user->update(["password"=> hash('sha256', $request->password)]);
            }
            if($request->phone_number){
                $user->update(["phone_number"=>$request->phone_number]);
            }
            return response()->json([
                "User" => $user
            ]);
        }else{
            $users = User::where("email", $request->email)->exists();
            if($users){
                return response()->json([
                    "User" => "User Exist"
                ]);
            }else{
                $user = new User;
                $user->first_name=$request->first_name;
                $user->last_name=$request->last_name;
                $user->email=$request->email;
                $user->password=hash('sha256', $request->password);
                $user->phone_number=$request->phone_number;
                if($user->save()){
                    $user = User::where("email", $request->email)
                        ->where("password", hash('sha256', $request->password))->get();
                    return response()->json([
                        "User" => $user 
                    ]);
                }
            }
        }
    }

    function login(Request $request){
        $user = User::where("email", $request->email)
                    ->where("password", hash('sha256', $request->password))->exists();
        if($user){
            $user = User::where("email", $request->email)
                        ->where("password", hash('sha256', $request->password))->get();
            return response()->json([
                "User" => $user
            ]);         
        }else{
            return response()->json([
                "User" => "Not found"
            ]); 
        }
    }
    function getUser($id){
        $user=User::find($id);
        return response()->json([
            "User"=>$user
        ]);
    }
    function deleteUser($id){
        $user=user::find($id);
        $user->delete();
        return response()->json([
            "User"=>"Removed"
        ]);
    }
}
