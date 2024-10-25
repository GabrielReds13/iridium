<template>
    <button 
        class="flex justify-center rounded-lg p-4 w-full flex-row gap-2"
        :class="{'bg-[#9E71FF!important]' : !buttonState, 'bg-[#EDEEEF!important]' : buttonState}"
    >
        <!-- icon -->
        <v-icon
            :icon="props.icon"
            :color="props.buttonState ? '#6B727F' : '#FFF'"
            v-show="props.icon"
        />

        <!-- text -->
        <p
            :class="{'text-[#FFF!important]' : !buttonState, 'text-[#6B727F!important]' : buttonState}"
        >{{ buttonText }}</p>
    </button>
  </template>
  
  <script lang="ts" setup>
      const props = defineProps({
          text: String,
          altText: String,
          buttonState: Boolean,
          icon: String
      });

      const buttonText = !props.buttonState! ? props.text! : props.altText!
  </script>
  
  <style>
  
  </style>