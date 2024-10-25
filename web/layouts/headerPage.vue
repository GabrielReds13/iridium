<template>
    <NuxtLayout name="default">
        <!-- head page -->
        <header class="flex flex-row justify-center items-center px-4 w-full h-[50px] bg-[#9E71FF] z-999">
          <!-- head content -->
          <div class="flex flex-row justify-between items-center w-full max-w-[600px] sm:px-4">
              <!-- logo -->
              <div class="flex flex-row gap-1 items-center">
                <IconsLogoIridiumAlt class="w-6 h-6"/>
                <h1 class="text-white font-bold text-2xl">IRIDIUM</h1>
              </div>
        
              <!-- menu button -->
              <VCMenu />
          </div>
        </header>
      
          <!-- content -->
          <div class="flex flex-col items-center gap-4 p-4 pb-0 w-full max-w-[600px] h-full">
              <slot/>
          </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    // import
    import type { Route } from '~/scripts/types/Route';
    import { getRoutes } from '~/scripts/AppRoutes';

    // menu
    const profileMenu = ref(null);
    // get routes
    const allRoutes = ref<Route[]>(await getRoutes("default"));
</script>

<style>

</style>