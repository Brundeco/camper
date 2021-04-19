@extends('layouts.app')

@php
$title = 'Approach';
$menuItem = 'approach';
// $description = 'description';
$bodyClass = 'approach-page';
@endphp

@section('content')

<div class="approach-page">
  <div class="section">
    <div class="container">
      <div class="approach-page__visual">
        <div class="grid">
          <div class="grid__item one-whole">
            <picture class="visual visual--2x1">
              <source srcset="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80" type="image/webp">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80" alt="Example Image">
           </picture>

            {{-- <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2016&q=80" alt=""> --}}
          </div>
        </div>
        <div class="sphere-green-big"></div>
        <div class="sphere-green-small"></div>
        <div class="sphere-grey-small"></div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      @include('components.approach.index')
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="apporach-page__faq">
        <div class="grid grid--justify-center">
          <div class=" grid__item two-thirds">
            <h2 class="text-center">Veelgestelde vragen</h2>

            @include('components.accordion.index')

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

@endsection