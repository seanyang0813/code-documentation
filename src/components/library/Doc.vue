<template>

        
    <div class=" bg-gray-200 m-4 max-w-sm rounded overflow-hidden shadow-lg object-center w-3/5">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                <p>
                    <span v-for="(text, index) in doc.queryList" :key=index :class="{'bg-blue-300': text.mutability}">{{text.text}} </span>
                </p> 
            </div>
            <p class="text-gray-700 text-base">
                {{doc.description}}
            </p>
        </div>
        
    </div>

</template>

<script>

    export default {
        props: ["doc"],
    }
</script>

