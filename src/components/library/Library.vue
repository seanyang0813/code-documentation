<template>
  <div class="object-center"> 
      <doc v-for="doc in docs" :key="doc.id" :doc="doc"></doc>   
  </div>
</template>

<script>
import Doc from "./Doc.vue"
export default {
  components: {
    doc: Doc
  },
  computed: {
    docs: function() {
      return this.$store.getters.docs;
    }
  }
}
</script>

