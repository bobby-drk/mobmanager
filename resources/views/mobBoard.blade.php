@extends('layouts.master')

@section('content')
    <div class='mob-board'>
        <mob-board {{ isset($slug) ? "slug=$slug" : '' }}></mob-board>
    </div>
    <mob-monitor></mob-monitor>

@stop

