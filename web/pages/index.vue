<template>
  <div class="flex flex-col items-center gap-4 p-4 pb-0 w-full h-full">
    <div class="flex flex-col w-full border-2 border-gray-200 rounded-lg p-6 gap-8">
      <!-- logo -->
      <div class="flex flex-row gap-1 items-center w-full justify-center">
        <IconsLogoIridium class="w-9 h-9"/>
        <h1 class="text-black font-bold text-4xl">IRIDIUM</h1>
      </div>

      <!-- fields -->
      <div class="w-full justify-center flex flex-col">
        <TextField label="Email" type="text"/>
        <TextField label="Senha" type="password"/>

        <p class="text-gray-500 text-sm text-center">Esqueceu a senha? <span class="text-[#9E71FF] cursor-pointer">Clique aqui</span>.</p>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextField from '~/components/VV/TextField.vue';


</script>

<style>
  .-overflow {
    overflow: visible !important;
  }
</style>