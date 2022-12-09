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
                $user->update(["password"=>bcrypt($request->password)]);
            }
            if($request->phone_number){
                $user->update(["phone_number"=>$request->phone_number]);
            }
            return response()->json([
                "User" => $user
            ]);
        }
    }
}
