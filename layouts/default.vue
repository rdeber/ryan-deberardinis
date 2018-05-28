<!-- layouts/default.vue -->

<template>
  <div class="app-wrap">
    <nuxt/>
    <transition appear enter-active-class="animated fadeInUp">
      <Navbar/>
    </transition>
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





