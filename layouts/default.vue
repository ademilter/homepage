<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './header'
  import Footer from './footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
