<template>
  <div>
    <v-checkbox
        v-model="props.checked"
        color="#9E71FF"
        hide-details
    ></v-checkbox>
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        checked: Boolean, 
    });
</script>

<style scoped>

</style>