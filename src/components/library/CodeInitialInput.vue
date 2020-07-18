<template>
    <div class="modal-body ">

        <label for="query">The query</label>
        <br>
        <textarea name="query" placeholder="Enter code here" class="border-gray-600 border rounded shadow w-full">
        </textarea>
        <button @click="$emit('changePage', 'second')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
        </button>

    </div>
</template>
<script>
export default {
    
}
</script>