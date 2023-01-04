
<template>
    <div>
        <label 
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            :class="[labelColor ? 'text-gray-900 dark:text-white' : 'text-gray-100 dark:text-gray-900']"
        >
            {{ label }}
        </label>
        <input 
            :placeholder="placeholder"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            :type="inputType"
            v-model="inputComputed"
        >
        <span v-if="error" class="text-red-500">
            {{ error }}
        </span>
    </div>
                    
</template>

<script setup>
    import { defineProps, defineEmits, toRefs, computed } from 'vue'
    const emit = defineEmits(['update:input'])
    const props = defineProps({
        label: String,
        labelColor: { type: Boolean, default: true },
        input: String,
        placeholder: { type: String, default: '' },
        inputType: String,
        error: String
    })
    const { label, labelColor, input, placeholder, error } = toRefs(props)
    const inputComputed = computed({
        get: () => input.value,
        set: (val) => emit('update:input', val)
    })
</script>