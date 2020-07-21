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
                            Add new component
                        </h1>
                    </div>
                    <keep-alive>
                        <component @updateQuery="updateQuery" @updateVariables="updateVariables" @changePage="changePage" v-bind:is="current" :query="query" :variables="variables" :placeHolder="placeHolder"></component>
                    </keep-alive>
                    
                </div>
            </div>
        </div>
     </transition>
</template>

<script>
import Initial from "./CodeInitialInput.vue"
import Choose from "./ChooseInput.vue"
import Create from "./CreateDocumentation.vue"
export default {
    data: function() {
        return {
            current: Initial,
            query: '',
            placeHolder: '<>\\😀/<>',
            variables: [],
        }
    },
    component: {
        initial: Initial,
        choosee: Choose,
        create: Create,
    },
    methods: {
        changePage(val) {
            if (val == 'first') {
                this.current = Initial;
            }
            else if (val == 'second') {
                this.current = Choose;
            }
            else if (val == 'third') {
                this.current = Create;
            }
        },
        updateQuery(val) {
            this.query = val;
        },
        updateVariables(val) {
            this.variables = val;
        }
    }
    
}
</script>