<!-- layouts/default.vue -->

<template>
  <div class="app-wrap">
    <nuxt/>
    <transition appear enter-active-class="animated fadeInUp">
      <Navbar/>
    </transition>
    <Shape/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import Shape from '../components/Shape';

  export default {
    components: {
      Navbar,
      Shape
    }
  }
</script>





