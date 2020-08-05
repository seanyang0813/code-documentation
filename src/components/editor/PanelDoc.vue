<template>    
    <div class=" bg-gray-200 m-4 max-w-sm rounded overflow-hidden shadow-lg object-center w-3/5">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 break-words">
                <p>
                    <span v-for="(segment, index) in parsed" :key="`segment-${index}`" class="whitespace-pre-wrap">{{segment}}<input disabled v-if="index < (parsed.length - 1)" class="border border-black" style="width: 3em" type="text">
                    </span>
                </p> 
            </div>
            <p class="text-gray-700 text-base">
                {{shortDescription}}
            </p>
            <button @click="modalOpen=true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Insert</button>
            <inserter v-if="modalOpen" @close="modalOpen=false"  :doc="doc"></inserter>
        </div>
        
    </div>

</template>

<script>
    import Inserter from './TextInserter.vue';

    export default {
        props: ["doc"],
        components: {
            inserter: Inserter,
        },
        data: function(){
            return {
                regex: /<😀.*?>/g,
                modalOpen: false,
            }
        },
        computed: {
            parsed() {
                let regex = this.regex;
                return this.doc.query.split(regex);
            },
            shortDescription() {
                if (this.doc.description.length < 100) {
                    return this.doc.description; 
                }
                else {
                    return this.doc.description.substring(0, 100) + '...';
                }
            }
        }
    }
</script>

