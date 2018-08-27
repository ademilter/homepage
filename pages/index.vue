<template>
  <main class="Main" role="main">
    <About/>
    <Cover/>
    <Activity/>
    <Journal/>
  </main>
</template>

<script>
  import About from '~/components/home-about'
  import Cover from '~/components/home-cover'
  import Activity from '~/components/home-activity'
  import Journal from '~/components/home-journal'

  export default {
    components: {
      About,
      Cover,
      Activity,
      Journal
    }
  }
</script>
