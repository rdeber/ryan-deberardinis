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
  // The content width you use on your website
  --content-width: 100vw;

  // The size of the gutter
  --gutter: 5px;

  // The amount of columns
  --columns: 6;

  // This is the calculation for the row height.
  --row-size: calc(
    ( var(--content-width) - (var(--gutter) * (var(--columns) - 1))
    ) / var(--columns)
  );

  display: grid;

  width: 100%;
  max-width: var(--content-width);

  grid-template-columns: repeat(var(--columns), 1fr);
  grid-auto-rows: var(--row-size);

  grid-column-gap: var(--gutter);
  grid-row-gap: var(--gutter);

  position: absolute;
  transition: 700ms $ease-in;
  backface-visibility: hidden;

  span {
    display: block;
    background-color: #999;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: 700ms $ease-in;
    backface-visibility: hidden;
  }
}
// Transition delay iteration.
@for $i from 1 to 25 {
  .shapes span:nth-child(#{$i}) { transition-delay: $i * 10ms; }
}

// Shape styles for home page.
.home {
  transform: rotateX(45deg) rotateZ(45deg);
  span {

  }
}

// Shape styles for about page.
.about {
  span {
  }
}

// Shape styles for projects page.
.projects {
  transform: rotateX(0) rotateZ(0);
  span {

  }
}
@keyframes projects {
    0%    {height: 90vh;}
    100%  {height: 125px;}
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