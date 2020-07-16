<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/Header.vue"
  export default {
    components: {
      myHeader: Header,
    }
  }
</script>

<style>
</style>
