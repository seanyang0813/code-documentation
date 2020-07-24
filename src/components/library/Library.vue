<template>
  <div class="flex items-center flex-col"> 
    <!-- component -->

      <!-- the search box -->
     <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" v-model="search">
        
      </div>
      <!-- the documentations -->
      <p v-if="docs.length == 0" class="m-10 font-mono text-blue-900 text-2xl text-center font-bold">Click on add new qeury to create query in library</p>
      <doc v-for="doc in filteredDocs" :key="doc.id" :doc="doc"></doc>
      <adder v-if="modalOpen" @close="modalOpen=false"></adder>
      <button @click="modalOpen=true" class="add-button bg-green-500 p-4 rounded-full">
        <span class="font-black text-gray-100">+</span>
        <span class="font-bold text-gray-100"> Add new query</span>
      </button>   
  </div>
</template>

<script>
import Adder from './Adder.vue';
import Doc from "./Doc.vue"
export default {
  data: function() {
    return {
      modalOpen: false,
      search: '',
    }
  },
  components: {
    doc: Doc,
    adder: Adder,
  },
  computed: {
    docs: function() {
      return this.$store.getters.docs;
    },
    filteredDocs: function() {
      if (this.search != '') {

        return this.docs.filter((doc)=>{
          return (doc.query.search(this.search) != -1)
        })
      }
      else {
        return this.docs;
      }
    }

  },
}
</script>

<style scoped>
  .add-button {
    position: fixed;
    right: 40px;
    top: 80vh;
  }
</style>