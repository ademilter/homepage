<template>
  <section class="cover">
    <div class="container-xl">
      <Picture
        :xl="require('~/assets/site-cover-photo-3.jpg')"
        :md="require('~/assets/site-cover-photo-2.jpg')"
        :sm="require('~/assets/site-cover-photo-1.jpg')"
        :xs="require('~/assets/site-cover-photo-0.jpg')"
        alt="Adem ilter with daughter"
        data_expand="-30"
      ></Picture>
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
  .cover {
    position: relative;
    @include breakpoints("sm") {
      &:before {
        content: "";
        z-index: 2;
        position: absolute;
        left: 0;
        width: 100%;
        height: 30%;
      }
      &:before {
        top: 0;
        background-image: linear-gradient(0deg, rgba($color-purple, 0) 0%, rgba($color-purple, 1) 100%);
      }
    }

    .container-xl {
      img {
        width: 100%;
      }
    }

  }
</style>
