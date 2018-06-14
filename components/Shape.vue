<!-- components/Shape.vue -->

<template>
  <transition name="list">
    <div class="shapes"
      :class="{
        'home' :(page === 'index'),
        'about' : (page === 'about'),
        'projects' : (page === 'projects'),
        'photos' : (page === 'photos'),
        'about' : (page === 'about')
      }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>

<style scoped lang="scss">
@import "~/assets/_mixins.scss";

.shapes {
  transform: translateY(0);
  position: absolute;
  top: 0;
  width: 100%;
  transition: 1s $ease-in;
  backface-visibility: hidden;

  span {
    display: inline-block;
    background-color: #999;
    height: 90vh;
    width: 10%;
    transition: 1s $ease-in;
    backface-visibility: hidden;
  }
}
// Transition delay iteration.
@for $i from 1 to 10 {
  .shapes span:nth-child(#{$i}) { transition-delay: $i * 100ms; }
}

// Shape styles for home page.
.home {
  transform: translateY(25vh);
  span {
    background-image: linear-gradient(#E85B6F, #112B4D);
    transform: rotateX(45deg) rotateZ(45deg);
  }
}

// Shape styles for about page.
.about {
  transform: translateY(20vh);
  span {
    width: 100%;
    height: 20vh;
    margin-bottom: 1%;
    background-color: blue;
    visibility: hidden;
    opacity: 0;
    transform: rotateX(45deg) rotateZ(90deg);

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      visibility: visible;
      opacity: 1;
    }
  }
}

// Shape styles for projects page.
.projects {
  transform: translateY(60px);
  span {
    //animation: mymove 250ms;
    animation-delay: 1000ms;
    animation-fill-mode: both;
  }
}
@keyframes mymove {
    0%   {opacity: 1;}
    100%  {opacity: 0;}
}

.photos {
  justify-content: flex-start;

  span {
    background-color: orange;
    flex: 1 0 100%;

    &:nth-of-type(1) {
      width: 100%;
    }
  }
}
.contact span {
  background-color: red;
}
</style>