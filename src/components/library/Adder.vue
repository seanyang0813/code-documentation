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
                        <component @changePage="changePage" v-bind:is="current"></component>
                    </keep-alive>
                    
                </div>
            </div>
        </div>
     </transition>
</template>

<script>
import Initial from "./CodeInitialInput.vue"
import Choose from "./ChooseInput"
export default {
    data: function() {
        return {
            current: Initial
        }
    },
    component: {
        initial: Initial,
        choosee: Choose,
    },
    methods: {
        changePage(val) {
            if (val == 'first') {
                this.current = Initial;
            }
            else if (val == 'second') {
                this.current = Choose;
            }
        }
    }
    
}
</script>