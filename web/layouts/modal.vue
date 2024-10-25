<template>
    <v-card class="-brd-on -box-shadow-off" width="100%">
      <slot/>
    </v-card>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    .v-card {
        display: flex !important;
        flex-direction: column !important;

        max-width: 600px !important;
        
        padding: 1.5rem !important;
        gap: 2rem !important;
        
        border: 2px solid #e5e7eb !important;
        border-radius: 0.5rem !important;
    }
</style>