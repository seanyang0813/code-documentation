<template>
<div class="flex">
  <div>
    <ul class="flex bg-gray-300 border border-gray-500">
        <li class="p-3">
            <a class="text-blue-600">Code Editor</a>
        </li>    
    </ul>
    <codemirror class="CodeMirror overflow-y-auto" v-model="code" :options="cmOptions"></codemirror>
  </div>
  <side class="overflow-y-auto"></side>
</div>
</template>

<script>
import 'codemirror/mode/sql/sql.js'
import 'codemirror/theme/base16-dark.css'
import SidePanel from './SidePanel.vue'
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
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
}
</script>

<style>
.CodeMirror {
  height: 100% !important;
  background-color: blue;
  width: 60vw;
}
</style>