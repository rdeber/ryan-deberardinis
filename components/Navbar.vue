<!-- components/Navbar.vue -->

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item logo" to="/"><span>R</span>D.</nuxt-link>
    </div>
    <div class="navbar-menu">
      <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
      <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
      <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
    </div>
  </nav>
</template>