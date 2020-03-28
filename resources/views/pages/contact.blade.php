@extends('layouts.app')

@php
  $title = 'Contact';
  $menuItem = 'contact';
  $dataPage = 'contact';
@endphp

@section('content')
<div class="container">

  <div id="map" class="map"></div>

  <h1>Contact</h1>

  <div class="grid">
    <div class="grid__item medium--one-half">
      <h2>Adres</h2>
    </div>
    <div class="grid__item medium--one-half">
      <h2>Contacteer ons</h2>

      <form id="form-contact" action="#" method="post" class="validate">
        <div class="note note--error">
          <ul>
            <li>Naam is verplicht</li>
            <li>Geldig emailadres is verplicht</li>
          </ul>
        </div>
        <div class="note note--success">
          <p>Het contactformulier werd succesvol verstuurd. Wij proberen dit zo snel mogelijk te behandelen.</p>
        </div>

        <div class="input-group">
          <label for="name">Naam <span class="required">*</span></label>
          <input type="text" name="name" id="name" required />
        </div>
        <div class="input-group">
          <label for="email">E-mail <span class="required">*</span></label>
          <input type="email" name="email" id="email" required />
        </div>
        <div class="input-group">
          <label for="phone">Telefoon</label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div class="input-group">
          <label for="message">Bericht <span class="required">*</span></label>
          <textarea name="message" id="message" required></textarea>
        </div>
        <div class="input-group">
          <div class="checkbox">
            <input type="checkbox" id="privacy" name="privacy" value="1" required />
            <label for="privacy">I agree my data will be processed in accordance with the privacy policy.*</label>
          </div>
        </div>

        <div class="button-group">
          <input type="submit" value="Verzenden" class="button" />
        </div>
      </form>

    </div>
  </div>

</div>
@endsection
