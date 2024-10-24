<template>
    <div>
        <button 
            class="rounded-lg p-4 w-full"
            :class="{'bg-[#9E71FF!important]' : !buttonState, 'bg-[#EDEEEF!important]' : buttonState}"
        >
            <p
                :class="{'text-[#FFF!important]' : !buttonState, 'text-[#6B727F!important]' : buttonState}"
            >{{ buttonText }}</p>
        </button>
    </div>
  </template>
  
  <script lang="ts" setup>
      const props = defineProps({
          text: String,
          altText: String,
          buttonState: Boolean
      });

      const buttonText = !props.buttonState! ? props.text! : props.altText!
  </script>
  
  <style>
  
  </style>