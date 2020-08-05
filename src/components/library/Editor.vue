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
                            Editing component
                        </h1>
                    </div>
                    <keep-alive>
                        <component :doc="doc" v-bind:is="current" @updateQuery="updateQuery" @updateVariables="updateVariables" @changePage="changePage" :query="query" :variables="variables" :placeHolder="placeHolder" @close="$emit('close')"></component>
                    </keep-alive>
                    
                </div>
            </div>
        </div>
     </transition>
</template>

<script>
import First from "./EditFirst.vue"
import Second from "./EditorSecond.vue"
import Third from "./EditorThird.vue"
export default {
    props: ['doc'],
    data: function() {
        return {
            current: First,
            query: '',
            placeHolder: '<😀>',
            variables: [],
        }
    },
    component: {
        first: First,
        second: Second,
        third: Third,
    },
    methods: {
        changePage(val) {
            if (val == 'first') {
                this.current = First;
            }
            else if (val == 'second') {
                this.current = Second;
            }
            else if (val == 'third') {
                this.current = Third;
            }
        },
        updateQuery(val) {
            this.query = val;
        },
        updateVariables(val) {
            this.variables = val;
        }
    },
    created() {
        this.query = this.doc.query;
    }
    
}
</script>