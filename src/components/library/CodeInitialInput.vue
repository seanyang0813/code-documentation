<template>
    <div class="modal-body ">

        <label for="query">The query</label>
        <br>
        <textarea v-model="localQuery" ref="ta" name="query" placeholder="Enter code here" class="border-gray-600 border rounded shadow w-full">
        </textarea>
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
export default {
    props: ["query", "placeHolder"],
    data: function() {
        return {
            localQuery: '',
        }
    },
    created() {
        this.localQuery = this.query;
    },
    methods: {
        toSecond() {
            this.$emit('changePage', 'second');
            this.$emit('updateQuery', this.localQuery);
            console.log(this.query);
        },
        insertInput() {
            let textarea = this.$refs.ta;
            let cursorIndex = textarea.selectionStart;
            let before = this.localQuery.substring(0,  cursorIndex);
            let after  = this.localQuery.substring(cursorIndex, this.localQuery.length);
            this.localQuery = before + this.placeHolder + after;
            textarea.focus();
        }
    }
    
}
</script>

<style scoped>
    textarea {
        height: 40vh;
    }
</style>