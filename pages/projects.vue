<!-- pages/projects.vue -->

<template>
  <section class="section is-medium">
    <transition-group appear enter-active-class="animated fadeInUp">
      <h1 key="myName">Ryan DeBerardinis</h1>
      <h2 key="myJobs">Designer + Developer + Photographer</h2>
    </transition-group>
    <div class="iso-grid">
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
      <div class="iso-grid-item">
        <img class="iso-grid-img" src="~/assets/projects/1.jpg" alt="01" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/_mixins.scss";


section {
  background: linear-gradient(90deg, #58A8FB, #465683);
  max-height: 100vh;
  overflow: hidden;
}
.iso-grid {
  transform-style: preserve-3d;
  transform: translateY(10vh) rotateX(45deg) rotateZ(45deg);
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: auto;

}
.iso-grid-item {
  flex: 1 0 29%;
  margin: 2%;
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