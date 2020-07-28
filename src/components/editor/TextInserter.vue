<template>
     <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container overflow-auto">
                    <button class="modal-default-button" @click="$emit('close')">                        
                        <img src="../../assets/close.svg" height="20px" width="20px">
                    </button>
                    <div class="modal-header">
                        <h1 class="font-mono text-blue-900 text-2xl text-center font-bold">
                            Insert into editor
                        </h1>
                        <span v-for="(segment, index) in parsed" :key="`segment-${index}`" class="whitespace-pre-wrap my-1">{{segment}}
                            <input disabled :style="{borderColor: `rgb(${colorCode[index][0]}, ${colorCode[index][1]}, ${colorCode[index][2]})`}" :placeholder="inputs[index]" v-if="index < (parsed.length - 1)" v-model="userValues[index]" class="border" type="text">
                        </span>
                        <p>
                            description: {{doc.description}}
                        </p>
                        
                        <div v-for="(input, index) in inputs" :key="index">
                            <p>
                                {{input}}:
                            </p>
                            <input :style="{borderColor: `rgb(${colorCode[index][0]}, ${colorCode[index][1]}, ${colorCode[index][2]})`}" :placeholder="inputs[index]" v-if="index < (parsed.length - 1)" v-model="userValues[index]" class="border" type="text">
                            <p>
                                {{doc.map[input]}}
                            </p>
                        </div>
                        <div class="flex justify-center p-5">
                            <button @click="insert" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Insert
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     </transition>
</template>

<script>
import {eventBus} from '../../main.js'
export default {
    data: function() {
        return {
            query: '',
            placeHolder: '<😀>',
            regex: /<😀.*?>/g,
            variables: [],
            inputs: [],
            colorCode: [],
            userValues: [],
        }
    },
    computed: {
        parsed() {
            let regex = this.regex;
            return this.doc.query.split(regex);
        },
    },
    methods: {
        randomColor() {
            console.log(this.inputs);
            for (let i = 0; i < this.parsed.length - 1; i++) {
                let r = Math.floor(256 * Math.random());
                let g = Math.floor(256 * Math.random());
                let b = Math.floor(256 * Math.random());
                this.colorCode[i] = [r,g,b];
                
            }
        },
        getInputs() {
            let regex = this.regex;            
            let arr = this.doc.query.split(regex);
            let matched = this.doc.query.match(regex);
            this.inputs = [];
            for (let i = 0; i < arr.length - 1; i++) {
                let sub = matched[i];
                if (sub.length > 3) {
                    this.inputs[i] = sub.substring(3, sub.length - 1);
                }
                
            }
        },
        insert() {
            this.$emit("close");
            let result = '';          
            for (let i = 0; i < this.parsed.length; i++) {
                result += this.parsed[i];
                if (i < this.userValues.length) {
                    if (this.userValues[i]){
                        result += (this.userValues[i]);
                    }
                    
                }

            }
            console.log(result)
            eventBus.$emit('insert', result);
        }
    },
    props: ['doc'],
    created() {
        this.randomColor();
        this.getInputs();
    },
    
}
</script>