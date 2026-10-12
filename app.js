/**
 * Kulita Legal Web — Bilingual Switcher & Query Parameter Handler
 * Supports ?lang=id | ?lang=en (default: 'id', matching Flutter app default)
 */
(function () {
  var STORAGE_KEY = 'kulita_legal_lang';

  function getInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var queryLang = (params.get('lang') || '').toLowerCase();
      if (queryLang === 'id' || queryLang === 'en') {
        return queryLang;
      }
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'id' || saved === 'en') {
        return saved;
      }
    } catch (_) {}
    return 'id';
  }

  function applyLang(lang) {
    var normalized = lang === 'en' ? 'en' : 'id';
    document.documentElement.setAttribute('lang', normalized);

    try {
      localStorage.setItem(STORAGE_KEY, normalized);
    } catch (_) {}

    // Update page title from data-title-id / data-title-en on <body>
    var body = document.body;
    if (body) {
      var titleAttr = body.getAttribute('data-title-' + normalized);
      if (titleAttr) {
        document.title = titleAttr;
      }
    }

    // Update toggle buttons active state
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isTarget = btn.getAttribute('data-set-lang') === normalized;
      if (isTarget) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }

    // Keep internal links synchronized with selected language
    var navLinks = document.querySelectorAll('a[data-keep-lang]');
    for (var j = 0; j < navLinks.length; j++) {
      var link = navLinks[j];
      var baseHref = link.getAttribute('data-base-href') || link.getAttribute('href');
      if (baseHref) {
        var cleanHref = baseHref.split('?')[0];
        link.setAttribute('data-base-href', cleanHref);
        link.setAttribute('href', cleanHref + '?lang=' + normalized);
      }
    }
  }

  // Apply immediately on script load
  var initialLang = getInitialLang();
  document.documentElement.setAttribute('lang', initialLang);

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getInitialLang());

    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        var targetLang = e.currentTarget.getAttribute('data-set-lang');
        applyLang(targetLang);

        // Update URL query param without reloading page
        try {
          var url = new URL(window.location.href);
          url.searchParams.set('lang', targetLang);
          window.history.replaceState({}, '', url.toString());
        } catch (_) {}
      });
    }
  });
})();
