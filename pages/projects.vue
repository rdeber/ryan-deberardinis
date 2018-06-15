<!-- pages/projects.vue -->

<template>
  <section class="section is-medium">

  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/_mixins.scss";

section {
  padding: 0;
}

.projects-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 1s cubic-bezier(0, 0, 0.2, 1);
  backface-visibility: hidden;
}
.projects-wrap img {
  margin: 0 1% 1%;
  height: 125px;
  width: 125px;
  transform-style: preserve-3d;
  transform: translate3d(0,0,0);
  @include shadow(3);
  transition: 250ms $ease;

  &:hover,
  &:focus {
    transform: translate3d(0,0,20px);
    @include shadow(8);
  }

}
</style>