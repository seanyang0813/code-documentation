<template>    
    <div @click="edit" class="cursor-pointer card bg-gray-200 m-4 max-w-sm rounded overflow-hidden shadow-lg object-center">
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
        </div>
        
    </div>

</template>

<script>

    export default {
        props: ["doc"],
        data: function(){
            return {
                regex: /<😀.*?>/g
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
        },
        methods: {
            edit() {
                this.$emit('editorOpen', this.doc)
            }
        }
    }
</script>

<style scoped>
    .card {
        min-width: 60vw;
    }
</style>

