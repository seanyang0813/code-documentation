<template>
  <div class="p-5 bg-blue-100 flex justify-end header">
    <ul class="flex">
        <li class="mr-6">
            <router-link to='/editor' class="text-blue-600 hover:text-blue-800" href="#">Editor</router-link>
        </li>
        <li class="mr-6">
            <router-link to='/library' class="text-blue-600 hover:text-blue-800" href="#">Library</router-link>
        </li>
        <li>
          <a target="_blank" href="https://www.notion.so/instruction-menu-6735b1ea947b4bbab20b9fbdedf58b35" class="text-blue-600 hover:text-blue-800 mr-6">Instruction</a>
        </li>
        <li class="mr-6">
            <router-link to='/login' class="text-blue-600 hover:text-blue-800" href="#">Login</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .header {
    flex: 0 1 auto;
  }
</style>

