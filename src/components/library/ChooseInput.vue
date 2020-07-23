<template>
    <div class="modal-body ">
        <span v-for="(segment, index) in parsed" :key="`segment-${index}`" class="whitespace-pre-wrap">{{segment}}
            <input v-if="index < (parsed.length - 1)" v-model="inputs[index]" class="border-gray-600 border" type="text">
        </span>
        
        <div class="flex justify-between">
            <button @click="toFirst" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Previous
            </button>
            <button @click="toThird" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: ["query", "placeHolder"],
    data() {
        return {
            inputs: [],
            regex: /<😀.*?>/g
        }
    },
    created() {
        this.update();
    },
    computed: {
        parsed() {
            let regex = this.regex;
            return this.query.split(regex);
        }
    },
    methods: {
        toThird() {
            console.log(this.inputs);
            this.$emit('updateVariables', this.inputs);
            this.$emit('changePage', 'third');
            //update the query by joining
            this.myUpdateQuery();
        },
        toFirst() {
            this.$emit('changePage', 'first');
            //update the query by joining
            this.myUpdateQuery();
        },
        myUpdateQuery: function() {
            let result = '';
            let regex = this.regex;            
            let arr = this.query.split(regex);
            for (let i = 0; i < arr.length; i++) {
                result += arr[i];
                if (i < this.inputs.length) {
                    result += ('<😀' + this.inputs[i] + '>');
                }

            }
            this.$emit('updateQuery', result);
        },
        update() {
            let regex = this.regex;            
            let arr = this.query.split(regex);
            let matched = this.query.match(regex);
            this.inputs = [];
            for (let i = 0; i < arr.length - 1; i++) {
                let sub = matched[i];
                this.inputs[i] = sub.substring(3, sub.length - 1);
            }
            
        }
    },
    watch: {
        query: function () {
            this.update();
        }
    }
    
}
</script>