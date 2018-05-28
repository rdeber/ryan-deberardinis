<!-- pages/index.vue -->

<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1>Ryan DeBerardinis</h1>
      <h2>Design & Developer & Photographer</h2>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
h2 {
    font-size: 2rem;
    font-weight: 300;
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