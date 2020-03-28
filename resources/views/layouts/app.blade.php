@php
  $siteTitle = "$title - Template";
  $description = $description ?? null;
  $dataPage = $dataPage ?? null;
  $bodyClass = $bodyClass ?? null;
@endphp
<!doctype html>
<html class="no-js" lang="nl" data-page="{{ $dataPage }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>{{ $siteTitle }}</title>
  <meta name="description" content="{{ $description }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Made by Esign -->
  <!-- Esign is @ http://www.esign.eu/ -->
  <!-- Esign contact: info@esign.eu -->

  <meta name="robots" content="all,index,follow">
  <meta http-equiv="cleartype" content="on">

  {{-- <meta property="fb:app_id" content=""> --}}
  <meta property="og:title" content="{{ $siteTitle }}">
  <meta property="og:description" content="{{ $description }}" >
  <meta property="og:url" content="nl">
  <meta property="og:image" content="../assets/images/share-image.jpg" >
  <meta property="og:site_name" content="Template">
  <meta property="og:type" content="website">
  {{-- <meta property="article:author" content=""> --}}

  {{-- <meta name="twitter:site" content="@"> --}}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ $siteTitle }}">
  <meta name="twitter:description" content="{{ $description }}">
  <meta name="twitter:image" content="../../assets/images/share-image.jpg">

  <link rel="shortcut icon" href="../../assets/images/icons/favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" sizes="57x57" href="../../assets/images/icons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="../../assets/images/icons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="../../assets/images/icons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="../../assets/images/icons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="../../assets/images/icons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="../../assets/images/icons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="../../assets/images/icons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="../../assets/images/icons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../../assets/images/icons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="../../assets/images/icons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../../assets/images/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="../../assets/images/icons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../../assets/images/icons/favicon-16x16.png">

  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#ffffff">
  <meta name="msapplication-config" content="browserconfig.xml" />
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="../../assets/images/icons/ms-icon-144x144.png">

  {{-- <link rel="dns-prefetch" href="//fonts.googleapis.com"> --}}
  {{-- <link rel="dns-prefetch" href="//use.typekit.net"> --}}
  <link rel="dns-prefetch" href="//google-analytics.com">
  <link rel="dns-prefetch" href="//www.google-analytics.com">
  <link rel="dns-prefetch" href="//www.google.com">{{-- (recaptcha) --}}
  {{-- <link rel="dns-prefetch" href="//ebugs.esign.eu"> --}}

  {{-- place typekit or google fonts css here --}}

  {{-- not needed for webpack setup: --}}
  <style>
    .modal {
      visibility: hidden;
    }
  </style>
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Poppins:500,600&display=swap" rel="stylesheet">
  {{-- <link rel="stylesheet" href="../assets/css/style.css"> --}}


  {{-- google analytics --}}
  {{-- <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-xxxxxxxx-x', 'auto');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');
  </script> --}}
</head>

<body class="{{ $bodyClass }}">
  <a href="#main" class="skip-link">Skip to main content</a>

  <div class="page-wrap">

    <header class="page-header page-header--fixed">

      <div class="container">
        <div class="page-header__content">
          <a href="index.html" class="page-header__logo">
            <img src="../../assets/images/logo.svg" alt="" width="150" />
          </a>

          <button class="main-nav-trigger js-modal-trigger js-compensate-for-scrollbar" data-modal-id="navigation">
            <svg class="icon icon-menu">
              <use xlink:href="#icon-menu"/>
            </svg>
          </button>

          <nav class="main-nav">
            @php $nav = 'main-nav'; @endphp
            @include('layouts/_partials/main-navigation')
          </nav>
        </div>
      </div>

    </header>

    <main id="main" class="main main--fixed-navigation">

      @yield('content')

    </main>

    <footer class="page-footer">
      <div class="container">
        <div class="grid">
          <div class="grid__item medium--one-half">
            <ul class="social-icons">
              <li class="social-icons__item">
                <a href="#" class="social-icons__link" target="_blank">
                  <svg class="icon icon-facebook">
                      <use xlink:href="#icon-facebook" />
                  </svg>
                  <span class="vh">Volg ons op Facebook</span>
                </a>
              </li>
              <li class="social-icons__item">
                <a href="#" class="social-icons__link" target="_blank">
                  <svg class="icon icon-twitter">
                      <use xlink:href="#icon-twitter" />
                  </svg>
                  <span class="vh">Volg ons op Twitter</span>
                </a>
              </li>
              <li class="social-icons__item">
                <a href="#" class="social-icons__link" target="_blank">
                  <svg class="icon icon-instagram">
                      <use xlink:href="#icon-instagram" />
                  </svg>
                  <span class="vh">Volg ons op Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="grid__item medium--one-half">
            <p>
              <a class="page-footer__signature" href="https://www.esign.eu" target="_blank" title="Web agency Esign uit Gent: webdesign & website ontwikkeling op maat." rel="noopener">Site by Esign</a>
            </p>
          </div>
        </div>
      </div>
    </footer>

    <div class="container">
      <div class="cookie-notification hide" id="cookie-notification">
        <div class="cookie-notification__content">
          <p>
            Deze website maakt gebruik van cookies. Bekijk ons <a href="#">cookiebeleid</a>.
          </p>
          <div class="cookie-notification__actions">
            <button type="button" class="button" id="accept-cookies">
              Ok
            </button>

          </div>
        </div>
      </div>
    </div>

    @include('layouts/_partials/modal-navigation')
  </div>


  <div class="hide">
    {{--
      SVG Template:
      <svg class="icon icon-">
        <use xlink:href="#icon-"/>
      </svg>
    --}}
    @include('layouts/_partials/svg-sprite')
  </div>

  @if ($dataPage == 'contact')
    <script src="https://maps.googleapis.com/maps/api/js?language=nl"></script>
    <script>
      var markerImg = '${require(`../../assets/images/marker.png`)}';
    </script>
  @endif
  {{-- <script src="../assets/js/app.js"></script> --}}
</body>
</html>
