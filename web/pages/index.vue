<template>
  <NuxtLayout name="guest">
    <!-- illustration -->
    <WelcomeLogin class="text-[#9E71FF30] w-[75%] max-w-[380px]" />

    <!-- modal -->
    <NuxtLayout name="modal" width="100%">
      <!-- logo -->
      <div class="flex flex-row gap-1 items-center w-full justify-center">
        <IconsLogoIridium class="w-9 h-9"/>
        <h1 class="text-black font-bold text-4xl">IRIDIUM</h1>
      </div>
  
      <!-- fields -->
      <FormsLogin/>
      <!-- recovery password -->
      <p class="text-gray-500 text-sm text-center mt-4">Esqueceu a senha? <span class="cursor-pointer text-[#9E71FF]">Clique aqui</span>.</p>
    </NuxtLayout>
    
    <!-- new account -->
    <p class="text-gray-500 text-sm text-center mt-auto mb-4">Não tem uma conta? <span class="cursor-pointer text-[#9E71FF]">Crie uma</span>.</p>
  </NuxtLayout>
</template>

<script lang="ts" setup>
  // import
  import WelcomeLogin from '~/components/Illustrations/WelcomeLogin.vue';
</script>

<style scoped\>
  .-overflow {
    overflow: visible !important;
  }
</style>