<!-- components/Shape.vue -->

<template>
  <transition name="list" appear enter-active-class="initial-load">
    <div class="shapes"
      :class="{
        'home' :(page === 'index'),
        'about' : (page === 'about'),
        'projects' : (page === 'projects'),
        'photos' : (page === 'photos'),
        'contact' : (page === 'contact')
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
  transition: 1800ms $ease-in;
  backface-visibility: hidden;

  span {
    display: inline-block;
    background-color: #999;
    background-image: linear-gradient(#E85B6F, #112B4D);
    height: 55vh;
    width: 10%;
    opacity: 1;
    transition: 800ms $ease-in;
    backface-visibility: hidden;
  }
}
// Transition delay iteration.
@for $i from 1 through 10 {
  .shapes span:nth-child(#{$i}) { transition-delay: $i * 100ms; }
}
// Animation delay iteration.
@for $i from 1 through 10 {
  .shapes span:nth-child(#{$i}) { animation-delay: $i * 100ms; }
}

// Shape styles for home page.
.home {
  transform: translateY(51vh);
  span {
    //transform: translateX(25vh) translateY(25vh) rotateX(45deg) rotateZ(45deg);
    //animation: shape-home-in 1s linear forwards;
    height: 55vh;
    transform: translate3d(0,0,0) rotateX(45deg) rotateZ(45deg);
  }

  &.initial-load {

  }
}

/*
@keyframes shape-home-in {
  100% {
    transform: translate3d(0,0,0) rotateX(45deg) rotateZ(45deg);
  }
}
*/

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
    height: 125px;
  }
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

// Shape styles for projects page.
.contact {
  transform: translateY(0);
  span {
    height: 100vh;
  }
}
</style>