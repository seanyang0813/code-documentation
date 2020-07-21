<template>
    <div class="modal-body ">
        <span v-for="(segment, index) in parsed" :key="`segment-${index}`" class="whitespace-pre-wrap">{{segment}}
            <input v-if="index < (parsed.length - 1)" v-model="inputs[index]" class="border-gray-600 border" type="text">
        </span>
        
        <div class="flex justify-between">
            <button @click="$emit('changePage', 'first')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
        }
    },
    created() {
        let len = this.query.split(this.placeHolder).length;
        for (let i = 0; i < len - 1; i++) {
            this.inputs[i] = '';
        }
    },
    computed: {
        parsed() {
            return this.query.split(this.placeHolder);
        }
    },
    methods: {
        toThird() {
            console.log(this.inputs);
            this.$emit('updateVariables', this.inputs);
            this.$emit('changePage', 'third');
        },
    }
    
}
</script>