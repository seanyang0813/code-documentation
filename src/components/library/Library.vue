<template>
  <div class="flex items-center flex-col"> 
      <doc v-for="doc in docs" :key="doc.id" :doc="doc"></doc>
      <adder v-if="modalOpen" @close="modalOpen=false"></adder>
      <button @click="addNew" class="add-button bg-green-500 p-4 rounded-full">
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
    }
  },
  components: {
    doc: Doc,
    adder: Adder,
  },
  computed: {
    docs: function() {
      return this.$store.getters.docs;
    }
  },
  methods: {
    addNew() {
      /*
      let newQuery = {
        queryList: [{text:'new', mutability:false}, {text:'query', mutability:true}],
        description: 'this is something cool earfiaewf feawfhoie feof',
        id: this.$store.getters.queryId,
      };
      this.$store.dispatch('addQuery', newQuery);
      */
      this.modalOpen = true;
    },
    
  }
}
</script>

<style scoped>
  .add-button {
    position: fixed;
    right: 40px;
    top: 80vh;
  }
</style>