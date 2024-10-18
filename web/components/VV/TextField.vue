<template>
  <div>
    <v-text-field :label="props.label" :type="props.type" variant="outlined" color="#9E71FF" base-color="#6b7280" rounded="lg"></v-text-field>
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        label: String,
        type: String
    })
</script>

<style>

</style>