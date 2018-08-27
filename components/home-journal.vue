<template>
  <section class="journal">
    <div class="container">

      <div class="row">
        <div class="col-md-offset-4 col-md-8">
          <h2 class="section-title">Photo Journal</h2>
        </div>
      </div>

      <div class="bucket-row row">

        <div class="col-xs-12 col-md-4">
          <article class="bucket">
            <Picture
              class="photo"
              :md="require('~/assets/vsco_112316-2.jpg')"
              :sm="require('~/assets/vsco_112316-1.jpg')"
              :xs="require('~/assets/vsco_112316-0.jpg')"
              alt="Londra"
            ></Picture>
            <div class="info">
              <h3 class="Bucket-info-title">Londra</h3>
              <time class="Bucket-info-date">January 18, 2017</time>
            </div>
            <a class="link"
               href="https://vsco.co/adem/journal/ingiltere-gezisi"
               target="_blank"></a>
          </article>
        </div>

        <div class="col-xs-12 col-md-4">
          <article class="bucket">
            <Picture
              class="photo"
              :md="require('~/assets/vsco_090116-2.jpg')"
              :sm="require('~/assets/vsco_090116-1.jpg')"
              :xs="require('~/assets/vsco_090116-0.jpg')"
              alt="Eski Mardin"
            ></Picture>
            <div class="info">
              <h3 class="Bucket-info-title">Eski Mardin</h3>
              <time class="Bucket-info-date">August 27, 2016</time>
            </div>
            <a class="link" href="https://vsco.co/adem/journal/mardin"
               target="_blank"></a>
          </article>
        </div>

        <div class="col-xs-12 col-md-4">
          <article class="bucket">
            <Picture
              class="photo"
              :md="require('~/assets/vsco_082116-2.jpg')"
              :sm="require('~/assets/vsco_082116-1.jpg')"
              :xs="require('~/assets/vsco_082116-0.jpg')"
              alt="Bursa"
            ></Picture>
            <div class="info">
              <h3 class="Bucket-info-title">Bursa</h3>
              <time class="Bucket-info-date">August 20, 2016</time>
            </div>
            <a class="link"
               href="https://vsco.co/adem/journal/20-agustos-2016-bursa"
               target="_blank"></a>
          </article>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
  import Picture from '~/components/picture'

  export default {
    components: {
      Picture
    }
  }
</script>

<style lang="scss">
  .journal {
    margin-top: 120px;
    @include breakpoints("md") {
      margin-top: 180px;
    }
  }

  .bucket-row {
    > div + div {
      margin-top: $offset-grid;
      @include breakpoints("md") {
        margin-top: 0;
      }
    }
  }

  .bucket {
    overflow: hidden;
    position: relative;

    &:before {
      z-index: 1;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(20deg, rgba($color-purple, .9) 0%, rgba($color-purple, .2) 80%);
    }

    .photo {
      display: block;
      width: 100%;
      transition: transform $transition;

      img {
        display: block;
        width: 100%;
      }
    }

    .info {
      z-index: 2;
      position: absolute;
      left: $offset-grid;
      bottom: 10px;
      @include breakpoints("md") {
        left: $offset;
        bottom: 20px;
      }

      .title {
        margin-bottom: -4px;;
      }

      .date {
        line-height: 1;
        color: $color-text-light;
        font-family: $font-family-serif;
        font-size: $font-text-size-small;
      }
    }

    .link {
      z-index: 3;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &:hover {
      :before {
        background-image: linear-gradient(20deg, rgba($color-purple, .8) 0%, rgba($color-purple, 0) 100%);
      }
      .photo {
        transform: scale(1.2);
        transition-duration: 15s;
      }
    }

  }
</style>
