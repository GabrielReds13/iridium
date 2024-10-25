<template>
    <div>
        <v-menu
            v-model="profileMenu"
            activator="parent"
            location="left"
            :max-width="200"
            :min-width="200"
            transition="slide-y-transition"
            class="-show-overflow"
        >
            <template #activator="{enable, button}">
                <IconsHamburguer
                  class="w-6 h-6 cursor-pointer"
                  v-bind="button"
                  v-on="enable"
                />
            </template>

            <v-list class="-box-shadow-on">
                <v-list-item v-for="route in allRoutes" :to="route.address" color="#9E71FF" >
                    <p>{{ route.name }}</p>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
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