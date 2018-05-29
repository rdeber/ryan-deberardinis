<!-- pages/index.vue -->

<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <transition-group appear enter-active-class="animated fadeInUp">
        <h1 key="myName">Ryan DeBerardinis</h1>
        <h2 key="myJobs">Designer + Developer + Photographer</h2>
      </transition-group>
    </div>
    <div class="background-effect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
h2 {
    font-size: 1.25rem;
    font-weight: 400;
}

.angles {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: skewY(-12deg);
    transform-origin: 0;
    position: absolute;
    box-shadow: inset 0 -10px 80px -10px rgba(0, 0, 0, 0.1);
    background: linear-gradient(150deg, #9DC73A 15%, #64C65D 50%, #54AA4E 94%);
}
</style>