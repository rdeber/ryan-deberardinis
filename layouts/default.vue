<!-- layouts/default.vue -->

<template>
  <div class="app-wrap">
    <Shape/>
    <transition appear enter-active-class="animated fadeIn">
      <Navbar/>
    </transition>
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import Shape from '../components/Shape';
  //import Name from '../components/Name';

  export default {
    components: {
      Navbar,
      Shape
      //Name
    }
  }
</script>

<style lang="scss">
@import "~/assets/_mixins.scss";

.fade-enter-active .text-copy,
.fade-leave-active .text-copy {
  transition: opacity .5s;
}
.fade-enter .text-copy,
.fade-leave-to .text-copy {
  opacity: 0;
}

.myname-enter .text-copy,
.myname-leave-to .text-copy,
.myname-leave-active .text-copy {
  animation: acrossOut .60s ease-in both;
  animation-direction: normal;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}


</style>




