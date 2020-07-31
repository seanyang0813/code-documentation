<template>
  <div class="myapp flex flex-col">
    <my-header></my-header>
    <router-view class="fullHeight overflow-y-auto"></router-view>
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
  @import './assets/css/modal.css';
  .myapp {
    min-height: 100vh;  
  }

  .fullHeight {
    flex: 1 1 auto;
  }
</style>
