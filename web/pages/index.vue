<template>
  <div class="flex flex-row items-center w-full h-full">
    <!-- column 1 -->
    <div class="flex flex-col items-center gap-4 p-4">
      <WelcomeLogin class="text-[#9E71FF30] w-[75%]" />
  
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
    </div>

    <!-- column 2 -->
    <img 
      class="flex w-full bg-red-500"
      src="https://images.unsplash.com/photo-1698434156091-05773f7a3cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    >
  </div>
</template>

<script lang="ts" setup>
  // import
  import WelcomeLogin from '~/components/Illustrations/WelcomeLogin.vue';
</script>

<style>
  .-overflow {
    overflow: visible !important;
  }
</style>