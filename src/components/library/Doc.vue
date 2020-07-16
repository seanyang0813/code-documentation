<template>

        
    <div class="max-w-sm rounded overflow-hidden shadow-lg object-center">
        <div class="px-6 py-4 mt-8 bg-gray-200 ">
            <div class="font-bold text-xl mb-2">
                    <p>
                    <span v-for="(text, index) in doc.queryList" :key=index :class="{'bg-blue-100': text.mutability}">{{text.text}} </span>
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

