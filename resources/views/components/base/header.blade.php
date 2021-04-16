<header class="page-header">

  <div class="container">
    <div class="page-header__content">
      <a href="index.html" class="page-header__logo">
        <img src="https://www.q-camper.be/build/images/logo.57417211.svg" alt="Logo" width="150" />
      </a>

      <button class="main-nav-trigger js-modal-trigger js-compensate-for-scrollbar" data-modal-id="navigation">
        <svg class="icon icon-menu">
          <use xlink:href="#icon-menu" />
        </svg>
        <span class="vh">Menu</span>
      </button>

      <div class="header-custom">
        <nav class="main-nav">
          @include('components.nav.main', ['nav' => 'main-nav'])
        </nav>

        <div class="header-custom__lang">
          <select id="lang">
            <option value="nl">Nl</option>
            <option value="fr">Fr</option>
          </select>
        </div>
      </div>
    </div>
  </div>

</header>