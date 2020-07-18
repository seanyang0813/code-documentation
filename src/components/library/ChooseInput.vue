<template>
    <div class="modal-body ">
        <p>choose</p>
        <div class="flex justify-between">
            <button @click="$emit('changePage', 'first')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Previous
            </button>
            <button @click="$emit('changePage', 'third')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
            </button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>