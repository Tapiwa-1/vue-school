<template>
  <authLayout :isLoginForm=true>
    <template v-slot:headingSlot>
        Enter your email
    </template>
    <template v-slot:formSlot>
        <form  class="space-y-4 md:space-y-6" action="#">
            <div>
                <textInput label="your email" inputType="email" error="This is an error" placeholder="example@gmail.com"/>
            </div>
           
            <submitFormBtn btnText="Submit" color="blue"/>
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
