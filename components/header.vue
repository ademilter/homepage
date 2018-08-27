<template>
  <header class="header" role="banner">
    <div class="container">
      <a class="logo" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="142"
          height="35"
          viewBox="0 0 142 35">
          <g fill="#fff">
            <path class="logo-path"
                  d="M17.0638746,1.76823687 C17.5808824,0.791666611 18.4034596,0.806919128 18.8900584,1.78011683 L34.1099416,32.2198832 C34.6015073,33.2030145 34.0996545,34 32.9925388,34 L2.00746124,34 C0.89877101,34 0.418441605,33.2096103 0.9361254,32.2317631 L17.0638746,1.76823687 Z"></path>
            <circle class="logo-path" cx="51.5" cy="17.5" r="17.5"></circle>
            <rect class="logo-path" width="30" height="33" x="73" y="1"
                  rx="2"></rect>
            <path class="logo-path"
                  d="M122.370873,1.17659159 C123.270615,0.526777998 124.727915,0.525716424 125.629127,1.17659159 L140.370873,11.8234084 C141.270615,12.473222 141.716922,13.8492342 141.366451,14.900648 L135.633549,32.099352 C135.28365,33.1490509 134.110326,34 133.008845,34 L114.991155,34 C113.89147,34 112.716922,33.1507658 112.366451,32.099352 L106.633549,14.900648 C106.28365,13.8509491 106.727915,12.4742836 107.629127,11.8234084 L122.370873,1.17659159 Z"></path>
          </g>
        </svg>
      </a>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    z-index: 10;
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    @include breakpoints("md") {
      top: 80px;
    }

    .logo {
      svg {

        .logo-path {
          fill: $color-cyan;
        }

        .logo-path:nth-child(2) {
          fill: lighten($color-cyan, 7);
        }

        .logo-path:nth-child(3) {
          fill: lighten($color-cyan, 14);
        }

        .logo-path:nth-child(4) {
          fill: lighten($color-cyan, 20);
        }

      }
    }
  }
</style>
