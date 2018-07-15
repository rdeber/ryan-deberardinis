<!-- pages/projects.vue -->

<template>
  <section>
    <transition>
    <div class="banner animated fadeIn"></div>
    </transition>
    <div class="container">
      <div class="photos">
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
        <img src="https://source.unsplash.com/random/800x600g" class="animated fadeIn" alt="01" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background: #fff url('~/assets/Great-Sand-Dunes-NP-164.jpg') no-repeat top center;
  background-size: cover;
  animation-delay: 400ms;
  position: relative;
  height: 400px;
}
.photos img {
  animation-delay: 700ms;
  max-height: 200px;
}
// Animation delay iteration for project images.
@for $i from 1 to 10 {
  .photos img:nth-child(#{$i}) { animation-delay: $i * 200ms; }
}
</style>