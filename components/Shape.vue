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
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
      <span><img v-if="(page === 'projects')" src="~/assets/projects/1.jpg" class="animated fadeIn" alt="01" /></span>
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
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 600ms $ease-in;

  span {
    background-color: #999;
    min-width: 30vw;
    height: 33vh;
    width: 33.333%;
    transition: 600ms $ease-in;
    backface-visibility: hidden;
  }
}

// Shape styles for home page.
.home {
  transform: translateY(70vh);
  span {
    background-color: purple;
    transform: rotateX(45deg) rotateZ(45deg);
  }
}

// Shape styles for about page.
.about {
  span {
    background-color: blue;
  }
}

// Shape styles for projects page.
.projects {
  transform: translateY(0);
  span {
    margin: 0 1% 1%;
    height: auto;
    width: 125px;
    background-color: green;
    transform: rotateX(0) rotateZ(0);

    img {
      transition: 600ms $ease-in;
    }
  }
}
// Animation delay iteration for project images.
@for $i from 1 to 10 {
  .shapes span:nth-child(#{$i}) img { transition-delay: $i * 200ms; }
}
// Transition delay iteration.
@for $i from 1 to 10 {
  .shapes span:nth-child(#{$i}) { transition-delay: $i * 100ms; }
}

.photos span {
  background-color: orange;
}
.contact span {
  background-color: red;
}
</style>