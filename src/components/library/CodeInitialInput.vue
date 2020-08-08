<template>
    <div class="modal-body">

        <label for="query">The query</label>
        <br>
        <!--<textarea v-model="localQuery" ref="ta" name="query" placeholder="Enter code here" class="border-gray-600 border rounded shadow w-full">
        </textarea>-->
        <codemirror ref="cm" class="mb-6 codeoverflow-y-auto" v-model="localQuery" :options="cmOptions"></codemirror>
        <div class="flex justify-center">
            <button @click="insertInput" class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Insert variable
            </button>
        </div>
        <button @click="toSecond" class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
        </button>

    </div>
</template>
<script>
import 'codemirror/mode/sql/sql.js'
import 'codemirror/theme/base16-dark.css'
export default {
    props: ["query", "placeHolder"],
    data: function() {
        return {
            localQuery: '',
            cmOptions: {
                // codemirror options
                tabSize: 4,
                theme: 'base16-dark',
                lineNumbers: true,
                mode: "text/x-sql"
            }
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
        }
    },
    mounted() {
        this.$refs.cm.codemirror.setSize('70%', null);
    }
    
}
</script>

<style scoped>
    
</style>