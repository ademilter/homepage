<template>
  <section class="Journal">
    <div class="container">

      <div class="row">
        <div class="col-md-offset-4 col-md-8">
          <h2 class="Section-title">Photo Journal</h2>
        </div>
      </div>

      <div class="Bucket-row row">

        <div class="col-xs-12 col-md-4">
          <article class="Bucket">

            <picture class="Bucket-cover">
              <source
                media="--md"
                :data-srcset="require('~/assets/vsco_112316-2.jpg')">
              <source
                media="--sm"
                :data-srcset="require('~/assets/vsco_112316-1.jpg')">
              <source
                :data-srcset="require('~/assets/vsco_112316-0.jpg')">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                class="img-fadein lazyload"
                alt="Londra">
            </picture>

            <div class="Bucket-info">
              <h3 class="Bucket-info-title">Londra</h3>
              <time class="Bucket-info-date">January 18, 2017</time>
            </div>
            <a class="Bucket-link"
               href="https://vsco.co/adem/journal/ingiltere-gezisi"
               target="_blank"></a>
          </article>
        </div>

        <div class="col-xs-12 col-md-4">
          <article class="Bucket">

            <picture class="Bucket-cover">
              <source
                media="--md"
                :data-srcset="require('~/assets/vsco_090116-2.jpg')">
              <source
                media="--sm"
                :data-srcset="require('~/assets/vsco_090116-1.jpg')">
              <source
                :data-srcset="require('~/assets/vsco_090116-0.jpg')">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                class="img-fadein lazyload"
                alt="Eski Mardin">
            </picture>

            <div class="Bucket-info">
              <h3 class="Bucket-info-title">Eski Mardin</h3>
              <time class="Bucket-info-date">August 27, 2016</time>
            </div>
            <a class="Bucket-link" href="https://vsco.co/adem/journal/mardin"
               target="_blank"></a>
          </article>
        </div>

        <div class="col-xs-12 col-md-4">
          <article class="Bucket">

            <picture class="Bucket-cover">
              <source
                media="--md"
                :data-srcset="require('~/assets/vsco_082116-2.jpg')">
              <source
                media="--sm"
                :data-srcset="require('~/assets/vsco_082116-1.jpg')">
              <source
                :data-srcset="require('~/assets/vsco_082116-0.jpg')">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                class="img-fadein lazyload"
                alt="Bursa">
            </picture>

            <div class="Bucket-info">
              <h3 class="Bucket-info-title">Bursa</h3>
              <time class="Bucket-info-date">August 20, 2016</time>
            </div>
            <a class="Bucket-link"
               href="https://vsco.co/adem/journal/20-agustos-2016-bursa"
               target="_blank"></a>
          </article>
        </div>

      </div>

      <!--<div class="row">
        <div class="col-xs-12 col-md-offset-4 col-md-8">
          <a class="Section-more btn" href="https://vsco.co/adem/journal/" target="_blank">More...</a>
        </div>
      </div>-->

    </div>
  </section>
</template>
