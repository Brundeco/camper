@php $menuItem = $menuItem ?? null; @endphp
<ul class="{{ $nav }}__list">
  <li{!! $menuItem=='approach' ? ' class=active' : '' !!}>
    <a href="approach.html" class="{{ $nav }}__link">Hoe werken we</a>
    </li>
    <li{!! $menuItem=='about' ? ' class=active' : '' !!}>
      <a href="about.html" class="{{ $nav }}__link">About</a>
      </li>
      <li{!! $menuItem=='contact' ? ' class=active' : '' !!}>
        <a href="contact.html" class="{{ $nav }}__link">Contact</a>
        </li>
        <li> <a class="nav-phone" href="tel:+32-0-495-99-68-90">+32 (0)495 99 68 90</a> </li>
</ul>