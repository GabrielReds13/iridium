<template>
  <div class="flex flex-row justify-center w-full h-full [overflow:hidden!important]">
    <!-- column 1 -->
    <div class="flex flex-col max-w-[600px] w-full items-center gap-4 p-4 sm:px-16">
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
    </div>

    <!-- column 2 -->
    <div class="
      hidden
      lg:flex
      w-full 
      h-full
      flip-ho
      [background-size:auto_100%]
      bg-center
      bg-[url('https://images.unsplash.com/photo-1606242403117-4755198b9752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
    ">
      <!-- text -->
      <h1 class="
        w-full 
        h-full
        p-16
        text-white 
        text-5xl 
        font-bold
        bg-gradient-to-br from-[#8b5cf640] to-[#8b5cf600]
      ">Agilidade <br> Produtividade <br> <span class="text-[#9E71FF]">Organização</span></h1>
    </div>
  </div>
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