@extends('layouts.master')

@section('content')

<div class="panel panel-default">

    <div class="panel-heading">
        {{ $mob->name }} {{ ":" . $details->featureName }}
    </div>

    <div class="panel-body">
        Basic panel example
    </div>
</div>





@stop

