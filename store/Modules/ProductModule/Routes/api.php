<?php



Route::group(['middleware' => ['jwt.verify'],'prefix'=>'admin'], function() {
    Route::resource('/category','CategoryController');
    Route::get('/subCategory','CategoryController@subCategories');
    Route::resource('/products','ProductController');
    Route::resource('/attributes','AttributeController');
    Route::resource('/attributeValues','AttributeValueController');
    Route::resource('/measurements','MeasurementController');
});



