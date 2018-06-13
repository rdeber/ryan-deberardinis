<!-- pages/index.vue -->

<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <transition-group appear enter-active-class="animated fadeInUp">
        <h1 key="myName">Ryan DeBerardinis</h1>
        <h2 key="myJobs">Designer + Developer + Photographer</h2>
      </transition-group>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
h2 {
    font-size: 1.25rem;
    font-weight: 400;
}
</style>