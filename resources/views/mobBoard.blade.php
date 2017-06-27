@extends('layouts.master')

@section('content')
    <div >
        <mob-board {{ isset($slug) ? "slug=$slug" : '' }}></mob-board>
    </div>
    <mob-monitor></mob-monitor>
@stop

