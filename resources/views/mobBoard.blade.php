@extends('layouts.master')

@section('content')
    <div class='mob-board'>
        <mob-board mob-id=></mob-board>
    </div>
    <div class='admin-loader' v-if="this.$store.state.adminLoader"><img src="{{ asset('images/admin-loader.gif') }}" /></div>
@stop

