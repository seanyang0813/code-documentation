<template>
  <div class="flex items-center flex-col"> 
    <!-- component -->

      <!-- the search box -->
     <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" v-model="search">
        <input type="checkbox" class="ml-4" id="checkbox" v-model="searchDescription">
        <label for="checkbox">description</label>
        <input type="checkbox" class="ml-4" id="checkbox2" v-model="searchQuery">
        <label for="checkbox2">query</label>
      </div>
      <p v-if="(!searchDescription && !searchQuery && search)" class="text-red-600">Warning: No search option is selected</p>
      <!-- the documentations -->
      <p v-if="!loggedin" class="m-10 font-mono text-red-600 text-xl text-center font-bold">Warning: you are not signed in. Your documentation will not be saved</p>
      <p v-if="docs.length == 0" class="m-10 font-mono text-blue-900 text-2xl text-center font-bold">Click on add new qeury to create query in library</p>
      <p v-if="filteredDocs.length == 0 && docs.length > 0" class="m-10 font-mono text-blue-900 text-2xl text-center font-bold">No result found</p>
      <doc @editorOpen="openEditor" v-for="doc in filteredDocs" :key="doc.id" :doc="doc"></doc>
      <adder v-if="modalOpen" @close="modalOpen=false"></adder>
      <editor :doc="edited" v-if="editorOpen" @close="editorOpen=false"></editor>
      <button @click="modalOpen=true" class="add-button bg-green-500 p-4 rounded-full">
        <span class="font-black text-gray-100">+</span>
        <span class="font-bold text-gray-100"> Add new query</span>
      </button>  
  </div>
</template>

<script>
import Adder from './Adder.vue';
import Doc from "./Doc.vue"
import firebase from "firebase";
import Editor from './Editor.vue';
export default {
  data: function() {
    return {
      modalOpen: false,
      editorOpen: false,
      search: '',
      searchQuery: true,
      searchDescription: true,
      loggedin: false,
      edited: null,
    }
  },
  components: {
    doc: Doc,
    adder: Adder,
    editor: Editor,
  },
  methods: {
    store() {
      var user = firebase.auth().currentUser;
      if (user) {
        let uid = user.uid
        firebase.database().ref('/users/' + uid.toString()).set(this.$store.getters.all);
      }  
    },
    openEditor(doc) {
      this.edited = doc;
      console.log(this.edited);
      this.editorOpen = true;
    }
  },
  computed: {
    docs: function() {
      return this.$store.getters.docs;
    },
    filteredDocs: function() {
      if (this.search != '') {
        return this.docs.filter((doc)=>{
          if (this.searchQuery && this.searchDescription){
            return (doc.query.search(this.search) != -1)||(doc.description.search(this.search) != -1);
          }
          if (this.searchQuery) {
            return (doc.query.search(this.search) != -1);
          }
          if (this.searchDescription) {
            return (doc.description.search(this.search) != -1);
          }
          
        })
      }
      else {
        return this.docs;
      }
    }
  },
  created() {
    var user = firebase.auth().currentUser;
    if (user) {
      this.loggedin = true;
    }
    console.log(user);
    console.log("mounted");
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