<?php
Route::get('/{slug?}', function ($slug = '') {
    return view('mobBoard');
});
