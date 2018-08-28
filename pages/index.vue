<template>
  <main class="Main" role="main">
    <About/>
    <Cover/>
    <Journal/>
  </main>
</template>

<script>
  import About from '~/components/home-about'
  import Cover from '~/components/home-cover'
  import Journal from '~/components/home-journal'

  export default {
    components: {
      About,
      Cover,
      Journal
    }
  }
</script>
