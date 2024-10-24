<template>
    <div>
      <button class="bg-[#9E71FF] rounded-lg p-4 w-full"><p class="text-white">{{ props.text }}</p></button>
    </div>
  </template>
  
  <script lang="ts" setup>
      const props = defineProps({
          text: String
      });
  </script>
  
  <style>
  
  </style>