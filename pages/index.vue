<template>
  <main class="Main" role="main">
    <About/>
    <Cover/>
    <Timeline/>
    <Journal/>
  </main>
</template>

<script>
  import About from './section-about'
  import Cover from './section-cover'
  import Timeline from './section-timeline'
  import Journal from './section-journal'

  export default {
    components: {
      About,
      Cover,
      Timeline,
      Journal
    }
  }
</script>
