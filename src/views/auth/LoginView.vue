<template>
  <authLayout>
    <template v-slot:headingSlot>
        Sign In to your account
    </template>
    <template v-slot:formSlot>
        <form  class="space-y-4 md:space-y-6" action="#">
            <div>
                <textInput label="your email" inputType="email" error="This is an error" placeholder="example@gmail.com"/>
            </div>
            <div>
                <textInput label="your password" inputType="password" error="This is an error" placeholder="********"/>
            </div>
            <div class="flex items-center justify-between">
                <router-link to="" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</router-link>
            </div>
            <submitFormBtn btnText="Submit" color="blue"/>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <router-link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</router-link>
            </p>
        </form>
    </template>
  </authLayout>
</template>

<script setup>
import textInput from '../../components/textInput.vue';
import submitFormBtn from '../../components/submitFormBtn.vue';
import authLayout from '../../components/authLayout.vue'

</script>

<style>

</style>
