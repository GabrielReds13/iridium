<template>
    <NuxtLayout name="guest">
        <!-- illustration -->
        <IllustrationsNewUser class="text-[#9E71FF30] w-[60%] max-w-[340px]" />

        <!-- modal -->
        <NuxtLayout name="modal" width="100%">
          <!-- logo -->
          <h1 class="text-black font-bold text-3xl text-center h-max">Criar conta</h1>
        
          <!-- fields -->
          <FormsRegisterUser/>
        </NuxtLayout>

        <!-- new account -->
        <p class="
            text-gray-500 
            text-sm 
            text-center 
            mt-auto
        ">Já possui uma conta? <NuxtLink to="/" class="cursor-pointer text-[#9E71FF]">Fazer login</NuxtLink>.</p>
    </NuxtLayout>
</template>

<script lang="ts" setup>


</script>

<style>

</style>