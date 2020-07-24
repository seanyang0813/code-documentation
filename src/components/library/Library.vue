<template>
  <div class="flex items-center flex-col"> 
    <!-- component -->

      <!-- the search box -->
     <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" v-model="search">
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
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