<template>
  <div class="flex flex-col w-screen h-screen">
    <header class="flex flex-row justify-between items-center px-4 w-full h-[50px] bg-[#9E71FF] z-999">
      <h1 class="text-white font-bold text-2xl">IRIDIUM</h1>
      <ProfilePhoto class="w-8 h-8 rounded-full"/>
    </header>
    <div class="flex flex-col items-center w-full h-full overflow-x-hidden">
        <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import ProfilePhoto from '~/components/VC/ProfilePhoto/ProfilePhoto.vue';


</script>

<style>

</style>