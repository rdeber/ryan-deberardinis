<!-- pages/projects.vue -->

<template>
  <section>
    <transition>
    <div class="banner animated fadeIn">
      <p>Our job is to record, each in his own way, this world of light and shadow and time that will never come again exactly as it is today.<span> -Edward Abbey</span></p>
    </div>
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
  height: 555px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    font-size: 1.25rem;
    font-weight: 300;
    color: rgba(255,255,255,.8);
    max-width: 37rem;
    margin-bottom: 1rem;

    span {
      display: block;
      font-style: italic;
    }
  }
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