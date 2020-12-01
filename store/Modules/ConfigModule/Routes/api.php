<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => ['jwt.verify'],'prefix'=>'admin'], function() {
        Route::resource('/configCategory','ConfigCategoryController');
        Route::resource('/config','ConfigModuleController');
        Route::resource('/sliders','SliderController');
        Route::resource('/news','NewsController');
        Route::resource('/informations','InformationController');
        Route::resource('/careers','CareerController');
        Route::resource('/services','ServiceController');
        
});
