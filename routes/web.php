<?php
Route::get('/{slug?}', 'MainController@index');
Route::resource('report', 'ReportController', ['only' => [
    'show'
]]);

