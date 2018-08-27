<template>
  <picture>
    <source
      v-if="xl"
      media="--xl"
      :data-srcset="xl">
    <source
      v-if="md"
      media="--md"
      :data-srcset="md">
    <source
      v-if="sm"
      media="--sm"
      :data-srcset="sm">
    <source
      :data-srcset="xs">
    <img
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      class="fade lazyload"
      :alt="alt"
      :data-expand="data_expand">
  </picture>
</template>

<script>
  export default {
    name: 'ResPicture',
    props: {
      xl: {
        type: String,
        default: ''
      },
      md: {
        type: String,
        default: ''
      },
      sm: {
        type: String,
        default: ''
      },
      xs: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      },
      data_expand: {
        type: String,
        default: '0'
      }
    }
  }
</script>

<style lang="scss">
  .fade {
    opacity: 0;
    transition: opacity 500ms;

    &.lazyloaded {
      opacity: 1;
    }
  }
</style>
