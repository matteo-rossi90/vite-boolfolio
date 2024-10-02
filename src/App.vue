<script>

import Navbar from './components/partials/Navbar.vue';


export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <main>
    <Navbar />
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>

</style>

