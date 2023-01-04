<template>
    <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-900  py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" :class="[color ? 'hover:bg-' + color + '-500 border-' + color + '-500' : '']">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            {{ btnText }}
    </button>             
</template>

<script setup>

    import { LockClosedIcon } from '@heroicons/vue/20/solid'

    import { defineProps, toRefs } from 'vue'
    const props = defineProps({
        btnText: String, 
        color: String
    })
    const { btnText,  color } = toRefs(props)
</script>