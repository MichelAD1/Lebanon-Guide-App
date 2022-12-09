<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BarController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\BeacheController;
use App\Http\Controllers\CafeController;
use App\Http\Controllers\RooftopController;

Route::group(["prefix" => "v0.1"], function() {
	Route::group(["prefix" => "users"], function() {
		Route::post("signup/{id?}",[UserController::class,"signupOrUpdate"]);
		Route::post("login",[UserController::class,"login"]);
		Route::get("get/{id}",[UserController::class,"getUser"]);
	});
	Route::group(["prefix" => "places"], function() {
		
		Route::group(["prefix" => "bars"], function() {
		
		});
		Route::group(["prefix" => "restaurants"], function() {
			
		});
		Route::group(["prefix" => "beaches"], function() {
			
		});
		Route::group(["prefix" => "cafes"], function() {
			
		});
		Route::group(["prefix" => "rooftops"], function() {
			
		});
	});
    
});