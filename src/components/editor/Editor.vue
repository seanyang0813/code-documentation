<template>
<div class="flex">
  <div class="mirrorBox overflow-y-auto">
    <ul class="flex bg-gray-300 border border-gray-500 items-center justify-between">
        <li class="p-3">
            <a class="text-blue-600">Code Editor</a>
        </li>
        <button @click="save" class="p-2 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            Save    
        </button>
    </ul>
    <codemirror ref="mycm" class="CodeMirror overflow-y-auto" v-model="code" :options="cmOptions"></codemirror>

  </div>
  <side class="overflow-y-auto size"></side>
</div>
</template>

<script>
import 'codemirror/mode/sql/sql.js'
import 'codemirror/theme/base16-dark.css'
import SidePanel from './SidePanel.vue'
import {eventBus} from '../../main.js'
export default {
  components: {
    side: SidePanel
  },
  data () {
    return {
      code: '',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        theme: 'base16-dark',
        lineNumbers: true,
        mode: "text/x-sql"
      }
    }
  },
  computed: {
    codemirror() {
      return this.$refs.mycm.codemirror
    }
  },
  mounted() {
    eventBus.$on('insertResult', this.insert);
    this.code = this.$store.getters.code;
  },
  destroyed() {
      this.save();
  },
  methods: {
    insert(result) {
        if (this.$refs.mycm && this.$refs.mycm.codemirror) {
            this.$refs.mycm.codemirror.replaceSelection(result);
            this.$refs.mycm.codemirror.focus(); 
        }  
    },
    save() {
        this.$store.dispatch('editor', this.code);
    }

  }
}
</script>

<style>
.CodeMirror {
  height: 100vh !important;
  background-color: blue;
}

.mirrorBox {
  width: 60vw;
}

.size {
  width: 40vw;
  max-height: 100vh;
}
</style>