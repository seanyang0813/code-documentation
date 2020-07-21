<template>
    <div class="modal-body ">
        <span v-for="(segment, index) in parsed" :key="`segment-${index}`" class="whitespace-pre-wrap">{{segment}}
            <input disabled :placeholder="variables[index]" v-if="index < (parsed.length - 1)" v-model="inputs[index]" class="border-gray-600 border" type="text">
        </span>
        <div>
            <br>
            <span v-for="(variable, index) in parsedVariables" :key="index">{{variable}}
                <textarea v-model="inputsDescription[variable]" ref="ta" name="query" placeholder="Enter description of the variable" class="border-gray-600 border rounded shadow w-full"></textarea>
                <br>
            </span>
        </div>
        <div class="flex justify-between">
            <button @click="$emit('changePage', 'second')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Previous
            </button>
            <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                submit
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: ["query", "placeHolder", "variables"],
    data() {
        return {
            inputs: [],
            inputsDescription: new Map(),
        }
    },
    computed: {
        parsed() {
            return this.query.split(this.placeHolder);
        },
        parsedVariables() {
            let s = new Set(this.variables);
            return s;
        }
    },
    methods: {
        submit() {
            console.log(this.inputsDescription);
        },
    }
    
}
</script>