const resolve = require('path').resolve

module.exports = {
  head: {
    title: 'Adem ilter',
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Frontend Developer from Istanbul'
      },
      {
        name: 'google',
        value: 'notranslate'
      },
      {
        name: 'theme-color',
        content: '#2D184B'
      },
      {
        name: 'msapplication-navbutton-color',
        content: '#2D184B'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        'http-equiv': 'cleartype',
        content: 'on'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://ademilter.com/'
      },
      {
        property: 'og:title',
        content: 'Adem ilter'
      },
      {
        property: 'og:description',
        content: 'Hi. I’m ADEM, Frontend Developer from Istanbul.'
      },
      {
        property: 'og:image',
        content: '/meta-og-image.jpg'
      },
      {
        property: 'twitter:site',
        content: '@ademilter'
      },
      {
        property: 'twitter:creator',
        content: '@ademilter'
      },
      {
        property: 'twitter:domain',
        content: 'https://ademilter.com/'
      },
      {
        property: 'twitter:title',
        content: 'Adem ilter'
      },
      {
        property: 'twitter:description',
        content: 'Hi. I’m ADEM, Frontend Developer from Istanbul.'
      },
      {
        property: 'twitter:image:src',
        content: '/meta-twitter-image.jpg'
      }
    ],
    link: [
      {
        rel: 'dns-prefetch',
        href: '//ademilter.com'
      },
      {
        rel: 'dns-prefetch',
        href: '//www.google-analytics.com'
      },
      {
        rel: 'dns-prefetch',
        href: '//www.googletagmanager.com'
      },
      {
        rel: 'profile',
        href: 'http://gmpg.org/xfn/11'
      },
      {
        rel: 'publisher',
        href: 'https://plus.google.com/+AdemIlter'
      },
      {
        rel: 'stylesheet',
        media: 'none',
        href: '/fonts.css',
        onload: 'if (media!=\'all\') media=\'all\''
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon-32.png'
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: '/favicon-48.png'
      },
      {
        rel: 'icon',
        sizes: '62x62',
        type: 'image/png',
        href: '/favicon-62.png'
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        href: '/favicon-192.png'
      }
    ],
    script: [
      {
        innerHTML: `
          function loadJS(u) {
            var r = document.getElementsByTagName("script")[0], s = document.createElement("script");
            s.src = u;
            r.parentNode.insertBefore(s, r);
          }
          if (!window.HTMLPictureElement || !("sizes" in document.createElement("img"))) {
            document.createElement("picture");
            loadJS ("/respimage.min.js");
          }`
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-17768654-1',
        async: '',
        body: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-17768654-1');`,
        body: true
      },
      {
        innerHTML: `
          window.lazySizesConfig = window.lazySizesConfig || {};
          window.lazySizesConfig.customMedia = {
              '--xl': '(min-width: 1200px)',
              '--md': '(min-width: 992px)',
              '--sm': '(min-width: 768px)'
          };`,
        body: true
      }
    ],
    noscript: [
      {
        innerHTML: '<link rel="stylesheet" href="/fonts.css">'
      }
    ],
    __dangerouslyDisableSanitizers: ['link', 'script', 'noscript']
  },
  loading: {
    color: '#3B8070'
  },
  css: ['~/styles/inline.scss'],
  build: {
    vendor: [
      'lazysizes'
    ]
  },
  modules: [
    ['nuxt-sass-resources-loader', [
      resolve(__dirname, 'styles/option/_variable.scss'),
      resolve(__dirname, 'styles/option/_mixin.scss')
    ]]
  ]
}
