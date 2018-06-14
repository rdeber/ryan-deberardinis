<!-- components/Name.vue -->

<template>
  <transition name="name">
    <div class="name"
      :class="{
        'home' :(page === 'index'),
        'about' : (page === 'about'),
        'projects' : (page === 'projects'),
        'photos' : (page === 'photos'),
        'about' : (page === 'about')
      }">
      <h1 key="myName">Ryan DeBerardinis</h1>
      <h2 v-if="(page === 'index')" key="myJobs" class="animated fadeIn">Designer + Developer + Photographer</h2>
      <h2 v-if="(page === 'about')" key="myInfo" class="animated fadeIn"><i class="fas fa-user-ninja"></i>Who am I</h2>
      <h2 v-if="(page === 'projects')" key="myProjects" class="animated fadeIn"><i class="fas fa-user-ninja"></i>Recent Work</h2>
      <h2 v-if="(page === 'photos')" key="myPhotos" class="animated fadeIn"><i class="fas fa-user-ninja"></i>Recent Photos</h2>
      <h2 v-if="(page === 'contact')" key="myContact" class="animated fadeIn"><i class="fas fa-user-ninja"></i>Get in touch</h2>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>

<style lang="scss" scoped>
@import "~/assets/_mixins.scss";

</style>
