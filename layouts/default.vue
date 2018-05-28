<!-- layouts/default.vue -->

<template>
  <div class="app-wrap">
    <nuxt/>
    <Navbar/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>





