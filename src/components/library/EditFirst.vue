<template>
    <div>
    <div class="modal-body ">
        <label for="query">The query</label>
        <br>
        <!--<textarea v-model="localQuery" ref="ta" name="query" placeholder="Enter code here" class="border-gray-600 border rounded shadow w-full">
        </textarea>-->
        <codemirror ref="cm" class="mb-6 CodeMirror codeoverflow-y-auto" v-model="localQuery" :options="cmOptions"></codemirror>
        <div class="flex justify-center">
            <button @click="insertInput" class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Insert variable
            </button>
        </div>
        <div class="flex justify-between pt-6">
            <button @click="confirm=true" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Remove current component
            </button>
            <button @click="toSecond" class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
            </button>
        </div>
        

    </div>
    <transition v-if="confirm" name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container-small overflow-auto">
                    <p class="font-mono text-blue-900 text-xl font-bold">Are you sure you want to delete this component?</p>
                    <div class="flex justify-between">
                        <button @click="remove" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Yes
                        </button>
                        <button @click="confirm=false" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            No
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </transition>

    </div>
</template>
<script>
import 'codemirror/mode/sql/sql.js'
import 'codemirror/theme/base16-dark.css'
export default {
    props: ["query", "placeHolder", 'doc'],
    data: function() {
        return {
            localQuery: '',
            cmOptions: {
                // codemirror options
                tabSize: 4,
                theme: 'base16-dark',
                lineNumbers: true,
                mode: "text/x-sql"
            },
            confirm: false
        }
        
    },
    created() {
        this.localQuery = this.query;
    },
    watch: {
        query: function() {
            this.localQuery = this.query;
        }
    },
    methods: {
        toSecond() {
            this.$emit('changePage', 'second');
            this.$emit('updateQuery', this.localQuery);
        },
        insertInput() {
            this.$refs.cm.codemirror.replaceSelection(this.placeHolder);
            this.$refs.cm.codemirror.focus();
        },
        remove() {
            this.$emit('close');
            this.$store.dispatch('remove', this.doc.id);
        }
    },
    mounted() {
        this.$refs.cm.codemirror.setSize('70%', null);
    }
    
}
</script>

<style scoped>
    
</style>