@extends('layouts.app')

@php
$title = 'Contact';
$menuItem = 'contact';
$dataPage = 'contact';
$breadcrumbs = [
['label' => $title, 'url' => '#'],
];
@endphp

@section('content')
<div class="section">
  <div class="container">
    <div class="grid grid--justify-center">
      <div class="grid__item three-fifths">
        <div class="contact">
          <div class="contact__top-section">
            <h2 class="main-title contact-top-section__title">Neem contact met ons op </h2>
            <p class="contact-top-section__text">Heb je een vraag? Check zeker onze FAQ. Vind je niet meteen een
              antwoord of is je vraag specifiek? Stuur
              ons gerust een mailtje of bel ons en wij nemen snel contact met je op.</p>
            <div class="grid">
              <div class="grid__item one-half">
                <button class="main-button">
                  +32 (0)495 99 68 90
                </button>
              </div>
              <div class="grid__item one-half">
                <button class="main-button">
                  q-camper@outlook.be
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="section">
  <div class="container">
    <div class="grid grid--justify-center">
      <div class="grid__item three-fifths">
        <div class="contact__top-section">
          <h2 class="main-title contact-top-section__title">Hoe kunnen we je helpen? </h2>
          @include('components.forms.contact')
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section"></div>

@endsection