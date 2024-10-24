<template>
    <div class="flex flex-row justify-center w-full h-full [overflow:hidden!important]">
        <!-- column 1 -->
        <div class="flex flex-col max-w-[600px] w-full items-center gap-4 p-4 sm:px-16">
          <slot />
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
</script>
  
<style scoped>
</style>