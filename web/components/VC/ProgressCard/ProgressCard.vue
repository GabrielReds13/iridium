<template>
    <!-- card -->
    <div
      class="flex flex-col rounded-lg border-2 border-gray-200 p-4"
    >
      <p class="text-xl leading-4">
        <span class="text-gray-500 text-sm">{{ name }}</span> <br>
        <span class="text-[#9E71FF] font-bold">{{allItems}}</span>
      </p>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        name: String,
        items: Array
    });

    const allItems = ref<number>(props.items!.length)
</script>

<style>

</style>