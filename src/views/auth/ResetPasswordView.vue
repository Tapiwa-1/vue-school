<template>
  <authLayout :isLoginForm=true>
    <template v-slot:headingSlot>
        Sign In to your account
    </template>
    <template v-slot:formSlot>
        <form  class="space-y-4 md:space-y-6" action="#">
            
            <div>
                <textInput label="New password" inputType="password" error="This is an error" placeholder="********"/>
            </div>
            <div>
                <textInput label="Confirm password" inputType="password" error="This is an error" placeholder="********"/>
            </div>
            
            <submitFormBtn btnText="Submit" color="blue"/>
            
        </form>
    </template>
  </authLayout>
</template>
 
<script setup>
import textInput from '../../components/textInput.vue';
import submitFormBtn from '../../components/submitFormBtn.vue';
import authLayout from '../../components/authLayout.vue';

</script>

<style>

</style>