<template>
    <div class="modal-body ">
        <span v-for="(segment, index) in parsed" :key="`segment-${index}`" class="whitespace-pre-wrap my-1">{{segment}}<input disabled :style="{borderColor: `rgb(${colorCode[index][0]}, ${colorCode[index][1]}, ${colorCode[index][2]})`}" :placeholder="variables[index]" v-if="index < (parsed.length - 1)" v-model="inputs[index]" class="border" type="text">
        </span>
        <div>
            <br>
            <p>Description: </p>    
            <textarea v-model="description" id="des" placeholder="Briefly provide a description" class="border-gray-600 border rounded shadow w-full">
            </textarea>
            <br>
            <span v-for="(variable, index) in parsedVariables" :key="index">{{variable}}
                <textarea :style="{borderColor: `rgb(${colorCode[index][0]}, ${colorCode[index][1]}, ${colorCode[index][2]})`}" v-model="inputsDescription[variable]" ref="ta" placeholder="Enter description of the variable" class="border-gray-600 border rounded shadow w-full"></textarea>
                <br>
            </span>
        </div>
        <div class="flex justify-between">
            <button @click="toSecond" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Previous
            </button>
            <button @click="update" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update 
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: ["query", "placeHolder", "variables", 'doc'],
    data() {
        return {
            inputs: [],
            inputsDescription: new Map(),
            colorCode: [],
            regex: /<😀.*?>/g,
            description: this.doc.description,
        }
    },
    computed: {
        parsed() {
            let regex = this.regex;
            return this.query.split(regex);
        },
        parsedVariables() {
            let s = new Set(this.variables);
            return s;
        }
    },
    methods: {
        update() {
            let ret = {};
            ret.query = this.query;
            ret.description = this.description;
            ret.map = this.inputsDescription;
            let bag = {};
            bag.ret = ret;
            bag.id = this.doc.id;
            this.$store.dispatch('edit', bag);
            this.$emit("close");
        },
        randomColor() {
            for (let i = 0; i < this.parsed.length; i++) {
                let r = Math.floor(256 * Math.random());
                let g = Math.floor(256 * Math.random());
                let b = Math.floor(256 * Math.random());
                this.colorCode[i] = [r,g,b];
             }
        },
        toSecond() {
            this.$emit('changePage', 'second');
        },
        putDescription() {
            for (var key in this.doc.map) {
                if (this.parsedVariables.has(key)) {
                    this.inputsDescription[key] = this.doc.map[key];
                }
            }
        }
    },
    created() {
        this.randomColor();
        this.putDescription();
    },
    watch: {
        query: function() {
            this.randomColor();
        }
    }
    
}
</script>

<style scoped>
    #des {
        height: 30vh;
    }
</style>