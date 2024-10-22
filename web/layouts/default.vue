<template>
  <div class="flex flex-col w-screen h-screen bg-white items-center">
    <!-- head page -->
    <header class="flex flex-row justify-between items-center px-4 w-full h-[50px] bg-[#9E71FF] z-999">
      <!-- logo -->
      <div class="flex flex-row gap-1 items-center">
        <IconsLogoIridiumAlt class="w-6 h-6"/>
        <h1 class="text-white font-bold text-2xl">IRIDIUM</h1>
      </div>

      <!-- profile button -->
      <v-menu
        v-model="profileMenu"
        activator="parent"
        location="right"
        :max-width="200"
        :min-width="200"
        transition="slide-y-transition"
        class="-show-overflow"
      >
        <template #activator="{enable, button}">
          <ProfilePhoto 
            class="w-8 h-8 rounded-full"
            v-bind="button"
            v-on="enable"
          />
        </template>

        <v-list class="-box-shadow">
          <v-list-item v-for="route in allRoutes" :to="route.address" color="#9E71FF" >
            <p>{{ route.name }}</p>
          </v-list-item>
        </v-list>
      </v-menu>


    </header>

    <!-- content -->
    <div class="flex flex-col items-center w-full h-full overflow-x-hidden max-w-[480px]">
        <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import
  import type { Route } from '~/scripts/types/Route';
  import ProfilePhoto from '~/components/VC/ProfilePhoto/ProfilePhoto.vue';
  import { getRoutes } from '~/scripts/AppRoutes';

  // menu
  const profileMenu = ref(null);
  // get routes
  const allRoutes = ref<Route[]>(await getRoutes("default"));
</script>

<style scoped>
</style>