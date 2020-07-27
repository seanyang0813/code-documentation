<template>
    <div class="side">
        <ul class="flex bg-gray-300 border border-gray-500">
            <li class="p-3">
                <a class="text-blue-600">Query Viewer</a>
            </li>
            
        </ul>
        <library></library>
        
    </div>
</template>

<script>
import Library from '../library/Library.vue'
export default {
    components: {
        library: Library
    }
}
</script>

<style scoped>
    .side {
        width: 40vw;
    }
</style>