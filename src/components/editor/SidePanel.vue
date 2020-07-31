<template>
    <div class="side">
        <ul class="flex bg-gray-300 border border-gray-500">
            <li class="p-3">
                <a class="text-blue-600">Query Viewer</a>
            </li>
            
        </ul>
        <librarypanel></librarypanel>
        
    </div>
</template>

<script>
import LibraryPanel from './LibraryPanel.vue'
export default {
    components: {
        librarypanel: LibraryPanel
    }
}
</script>

<style scoped>
</style>