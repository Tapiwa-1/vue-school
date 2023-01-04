<template>
    <button 
        class="w-full text-white bg-blue-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
        :class="[color ? 'hover:bg-' + color + '-500 border-' + color + '-500' : '']"
    >
        {{ btnText }}
    </button>              
</template>

<script setup>
    import { defineProps, toRefs } from 'vue'
    const props = defineProps({
        btnText: String, 
        color: String
    })
    const { btnText,  color } = toRefs(props)
</script>