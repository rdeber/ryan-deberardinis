<!-- components/Navbar.vue -->

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <nuxt-link class="navbar-item logo" to="/">RD<span>/</span></nuxt-link>
    <nuxt-link class="navbar-item" to="/about"><i class="fas fa-user"></i><span>About</span></nuxt-link>
    <nuxt-link class="navbar-item" to="/projects"><i class="fas fa-code"></i><span>Projects</span></nuxt-link>
    <nuxt-link class="navbar-item" to="/photos"><i class="fas fa-camera"></i><span>Photos</span></nuxt-link>
    <nuxt-link class="navbar-item" to="/contact"><i class="fas fa-envelope"></i><span>Contact</span></nuxt-link>
  </nav>
</template>