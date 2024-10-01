<script>

import Navbar from './components/partials/Navbar.vue';


export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>

