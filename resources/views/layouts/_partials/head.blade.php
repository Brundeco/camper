<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>{{ $siteTitle }}</title>
  <meta name="description" content="{{ $description }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Made by Esign -->
  <!-- Esign is @ https://www.esign.eu/ -->
  <!-- Esign contact: info@esign.eu -->

  {{-- <meta property="fb:app_id" content=""> --}}
  <meta property="og:title" content="{{ $siteTitle }}">
  <meta property="og:description" content="{{ $description }}">
  <meta property="og:url" content="nl">
  {{-- <meta property="og:image" content="${require(`../assets/images/share-image.jpg`)}"> --}}
  <meta property="og:site_name" content="Template">
  <meta property="og:type" content="website">
  {{-- <meta property="article:author" content=""> --}}

  {{-- <meta name="twitter:site" content="@"> --}}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ $siteTitle }}">
  <meta name="twitter:description" content="{{ $description }}">
  {{-- <meta name="twitter:image" content="${require(`../../assets/images/share-image.jpg`)}"> --}}

  {{-- <link rel="shortcut icon" href="${require(`../../assets/images/icons/favicon.ico`)}" type="image/x-icon"> --}}
  {{-- <link rel="apple-touch-icon" sizes="57x57" href="${require(`../../assets/images/icons/apple-icon-57x57.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="60x60" href="${require(`../../assets/images/icons/apple-icon-60x60.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="72x72" href="${require(`../../assets/images/icons/apple-icon-72x72.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="76x76" href="${require(`../../assets/images/icons/apple-icon-76x76.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="114x114" href="${require(`../../assets/images/icons/apple-icon-114x114.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="120x120" href="${require(`../../assets/images/icons/apple-icon-120x120.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="144x144" href="${require(`../../assets/images/icons/apple-icon-144x144.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="152x152" href="${require(`../../assets/images/icons/apple-icon-152x152.png`)}"> --}}
  {{-- <link rel="apple-touch-icon" sizes="180x180" href="${require(`../../assets/images/icons/apple-icon-180x180.png`)}"> --}}
  {{-- <link rel="icon" type="image/png" sizes="192x192" href="${require(`../../assets/images/icons/android-icon-192x192.png`)}"> --}}
  {{-- <link rel="icon" type="image/png" sizes="32x32" href="${require(`../../assets/images/icons/favicon-32x32.png`)}"> --}}
  {{-- <link rel="icon" type="image/png" sizes="96x96" href="${require(`../../assets/images/icons/favicon-96x96.png`)}"> --}}
  {{-- <link rel="icon" type="image/png" sizes="16x16" href="${require(`../../assets/images/icons/favicon-16x16.png`)}"> --}}

  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#ffffff">
  <meta name="msapplication-config" content="browserconfig.xml" />
  <meta name="msapplication-TileColor" content="#ffffff">
  {{-- <meta name="msapplication-TileImage" content="${require(`../../assets/images/icons/ms-icon-144x144.png`)}"> --}}

  {{-- <link rel="dns-prefetch" href="//fonts.googleapis.com"> --}}
  {{-- <link rel="dns-prefetch" href="//use.typekit.net"> --}}
  <link rel="dns-prefetch" href="//google-analytics.com">
  <link rel="dns-prefetch" href="//www.google-analytics.com">
  <link rel="dns-prefetch" href="//www.google.com">{{-- (recaptcha) --}}
  <link rel="dns-prefetch" href="//www.googletagmanager.com">

  {{-- <link rel="dns-prefetch" href="//ebugs.esign.eu"> --}}

  {{-- place typekit or google fonts css here --}}
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Poppins:500,600&display=swap"
    rel="stylesheet">

    <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

  {{-- inline css: no flash --}}
  <style>
    .modal {
      visibility: hidden;
    }

    .skip-link {
      left: -999px;
      position: absolute;
      top: auto;
      overflow: hidden;
      z-index: -999;
      white-space: nowrap;
    }
  </style>

  {{-- Google Tag Manager --}}
  @if ($googleTagManagerCode)
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','{{ $googleTagManagerCode }}');
    </script>
  @endif
</head>
