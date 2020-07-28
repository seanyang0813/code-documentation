<template>
<div class="flex">
  <div>
    <ul class="flex bg-gray-300 border border-gray-500">
        <li class="p-3">
            <a class="text-blue-600">Code Editor</a>
        </li>    
    </ul>
    <codemirror ref="myCm" class="CodeMirror overflow-y-auto" v-model="code" :options="cmOptions"></codemirror>
    <button>button</button>
  </div>
  <side class="overflow-y-auto"></side>
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
  methods: {
    insert(text) {
      this.codemirror.replaceSelection(text);
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  created() {
    eventBus.$on('insert', (result)=>{
      this.insert(result);
    });
  }
}
</script>

<style>
.CodeMirror {
  height: 100% !important;
  background-color: blue;
  width: 60vw;
}
</style>