<?php


Route::get('/us/{page}','UiModuleController')
->name('page')
->where('page','about');
