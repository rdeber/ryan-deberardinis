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
  height: 100%;
  display: flex;
  transition: 1800ms $ease-in;
  backface-visibility: hidden;
  overflow: hidden;

  @include breakpoint(tablet) {
    overflow: visible;
  }

  span {
    display: inline-block;
    background-color: #999;
    background-image: linear-gradient(#E85B6F, #112B4D);
    height: 55vh;
    width: 10%;
    opacity: 1;
    transition: all 800ms $ease-in;
    backface-visibility: hidden;
  }
}

// Shape styles for home page.
.home {
  span {
    //transform: translateX(25vh) translateY(25vh) rotateX(45deg) rotateZ(45deg);
    //animation: shape-home-in 1s linear forwards;
    height: 55%;
    transform: translate3d(0,75%,0) rotateX(45deg) rotateZ(45deg);
  }

  // Transition delay iteration.
  @for $i from 1 through 10 {
    span:nth-child(#{$i}) { transition-delay: $i * 50ms; }
  }

  @include breakpoint(tablet) {
    span {
      height: 75%;
    }
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
  span {
    height: 20%;
    transform: translate3d(0, 0, 0) rotate(90deg)
  }

  // Transition delay iteration.
  @for $i from 1 through 10 {
    span:nth-child(#{$i}) { transition-delay: $i * 250ms; }
  }
}

// Shape styles for projects page.
.projects {
  span {
    height: 150px;
    transform: translate3d(0,0,0);
  }
}

// Shape styles for photos page.
.photos {
  span {
    height: 555px;
    transform: translate3d(0,0,0);
  }
}

// Shape styles for projects page.
.contact {
  span {
    height: 100%;
    transform: translate3d(0,0,0);
  }
  // Transition delay iteration.
  @for $i from 1 through 10 {
    span:nth-child(#{$i}) { transition-delay: $i * 100ms; }
  }
}
</style>