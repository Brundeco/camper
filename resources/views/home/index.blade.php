@extends('layouts.app')

@php
$title = 'Home';
$menuItem = 'home';
// $description = 'description';
$bodyClass = 'home';
@endphp

@section('content')
<div class="section">
  <div class="container">
    @include('components.header.index')
  </div>
</div>

<div class="section">
  <div class="container">
    <h3>Methode</h3>
  </div>
</div>
@endsection