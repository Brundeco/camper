@extends('layouts.app')

@php
$title = 'Home';
$menuItem = 'home';
// $description = 'description';
$bodyClass = 'home';
@endphp

@section('content')
    @include('components.header.index')
    @include('components.approach.index')
@endsection