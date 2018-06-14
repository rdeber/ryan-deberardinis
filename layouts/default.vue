<!-- layouts/default.vue -->

<template>
  <div class="app-wrap">
    <Shape/>
    <transition appear enter-active-class="animated fadeInUp">
      <Navbar/>
    </transition>
    <Name/>
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import Shape from '../components/Shape';
  import Name from '../components/Name';

  export default {
    components: {
      Navbar,
      Shape,
      Name
    }
  }
</script>





