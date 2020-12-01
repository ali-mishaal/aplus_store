<?php


Route::get('/us/{page}','UiModuleController')
->name('page')
->where('page','about');

//homepage part
Route::get('slider','UiModuleController@getSlider');
Route::get('categories','UiModuleController@getCategories');
Route::get('getRandCategories','UiModuleController@getRandCategories');
Route::get('get_latest_products','UiModuleController@get_latest_products');
Route::get('getLatestNews','UiModuleController@getLatestNews');
Route::get('getLatestInformations','UiModuleController@getLatestInformations');
Route::get('getLatesCareers','UiModuleController@getLatesCareers');
Route::get('getLatestServices','UiModuleController@getLatestServices');

//cart part

Route::post('addToCart','CartController@addToCart');
Route::post('refreshCart','CartController@refreshCart');