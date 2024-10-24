<template>
  <NuxtLayout name="guest">
    <!-- illustration -->
    <IllustrationsWelcomeLogin class="text-[#9E71FF30] w-[75%] max-w-[380px]" />

    <!-- modal -->
    <NuxtLayout name="modal" width="100%">
      <!-- logo -->
      <div class="flex flex-row gap-1 items-center w-full h-max justify-center">
        <IconsLogoIridium class="w-6 h-6"/>
        <h1 class="text-black font-bold text-3xl">IRIDIUM</h1>
      </div>
  
      <!-- fields -->
      <FormsLogin/>
      <!-- recovery password -->
      <p class="text-gray-500 text-sm text-center mt-4">Esqueceu a senha? <span class="cursor-pointer text-[#9E71FF]">Clique aqui</span>.</p>
    </NuxtLayout>
    
    <!-- new account -->
    <p class="
      text-gray-500 
      text-sm 
      text-center 
      mt-auto 
    ">Não tem uma conta? <NuxtLink to="/register" class="cursor-pointer text-[#9E71FF]">Crie uma</NuxtLink>.</p>
  </NuxtLayout>
</template>

<script lang="ts" setup>
</script>

<style scoped\>
  .-overflow {
    overflow: visible !important;
  }
</style>