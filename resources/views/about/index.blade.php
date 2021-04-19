@extends('layouts.app')

@php
$title = 'About';
$menuItem = 'about';
// $description = 'description';
$bodyClass = 'about-page';
@endphp

@section('content')
<div class="section">
  <div class="container">
    <div class="about__top-section">
      <div class="about-top-section__left-container">
        <img src="https://media.q-camper.be/inline_images/image/1588081273/crop/2000/1600/2/davey-elien.jpg" alt="">
      </div>
      <div class="about-top-section__right-container">
        <h2 class="main-title">Over ons</h2>
        <p>Q-camper staat voor klantvriendelijkheid, persoonlijke benadering en correcte afhandeling. Wij zijn een
          jong
          bedrijf dat werkt zonder tussenpersonen of dealers, bij ons heb je altijd rechtstreeks contact met Davey of
          Elien. Dankzij onze gratis service, uniek in de sector, verloopt de verkoop van je tweedehands camper met
          een
          gerust hart en een tevreden gevoel.</p>
        <div class="circle-outline-grey"></div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="about__middle-section">
      <div class="grid">
        <div class="grid__item medium--one-half large--one-half">
          <div class="about-middle-section__person">
            <h2>Davey</h2>
            <picture class="visual visual--3x4">
              <source srcset="https://media.q-camper.be/inline_images/image/1586253310/crop/900/1350/3/davey.webp"
                type="image/webp">
              <img src="https://media.q-camper.be/inline_images/image/1586253310/crop/900/1350/3/davey.webp"
                alt="Example Image">
            </picture>
          </div>
        </div>
        <div class="grid__item medium--one-half large--one-half">
          <div class="about-middle-section__person female">
            <h2>Elien</h2>
            <picture class="visual visual--3x4">
              <source srcset="https://media.q-camper.be/inline_images/image/1586253312/crop/900/1350/5/elien.jpg"
                type="image/webp">
              <img src="https://media.q-camper.be/inline_images/image/1586253312/crop/900/1350/5/elien.jpg"
                alt="Example Image">
            </picture>
            <div class="sphere-green-big"></div>
            <div class="sphere-gray-small"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="about__testimonials">
  @include('components.slider.index')
</div>

@endsection