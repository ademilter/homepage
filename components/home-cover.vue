<template>
  <section class="Cover">
    <div class="container-xl">
      <picture>
        <source
          media="--xl"
          :data-srcset="require('~/assets/site-cover-photo-3.jpg')">
        <source
          media="--md"
          :data-srcset="require('~/assets/site-cover-photo-2.jpg')">
        <source
          media="--sm"
          :data-srcset="require('~/assets/site-cover-photo-1.jpg')">
        <source
          :data-srcset="require('~/assets/site-cover-photo-0.jpg')">
        <img
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          class="img-fadein lazyload"
          alt="Adem ilter with daughter"
          data-expand="-30">
      </picture>
    </div>
  </section>
</template>
