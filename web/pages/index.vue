<template>
  <div class="flex flex-col items-center gap-4 p-4 pb-0 w-full h-full">
    <WelcomeLogin class="text-[#9E71FF30] w-[75%]" />

    <div class="flex flex-col w-full border-2 border-gray-200 rounded-lg p-6 gap-8">
      <!-- logo -->
      <div class="flex flex-row gap-1 items-center w-full justify-center">
        <IconsLogoIridium class="w-9 h-9"/>
        <h1 class="text-black font-bold text-4xl">IRIDIUM</h1>
      </div>

      <!-- fields -->
      <div class="w-full justify-center gap2 flex flex-col -show-overflow">
        <!-- fields -->
        <v-text-field 
          label="Email" 
          type="text" 
          variant="outlined" 
          color="#9E71FF" 
          base-color="#463176" 
          rounded="lg"
        ></v-text-field>
        <v-text-field 
          label="Senha" 
          type="password" 
          variant="outlined" 
          color="#9E71FF" 
          base-color="#463176" 
          rounded="lg"
        ></v-text-field>

        <Button text="Entrar" />

        <p class="text-gray-500 text-sm text-center mt-4">Esqueceu a senha? <span class="cursor-pointer text-[#9E71FF]">Clique aqui</span>.</p>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import WelcomeLogin from '~/components/Illustrations/WelcomeLogin.vue';
import Button from '~/components/VV/Button.vue';


</script>

<style>
  .-overflow {
    overflow: visible !important;
  }
</style>