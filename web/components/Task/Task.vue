<template>
  <div class="
    flex
    flew-row
    items-center
    w-full 
    min-w-[360px]
    min-h-[80px] 
    gap-2 
    p-4
    rounded-lg 
    border-2 
    border-gray-200
  ">
  <!-- item data -->
    <UICheckbox 
      :checked="finishTask" 
      class="justify-self-start"
      @click="toogleCheck()"
    />

    <!-- data -->
    <div class="flex w-full max-w-[70%]">
      <p class="text-md leading-4">
        <span class="">{{ props.name }}</span> <br>
        <span class="text-gray-500 text-sm">{{ props.description }}</span>
      </p>
    </div>

    <!-- delete item -->
    <IconsDelete class="
      text-black 
        w-6 
        h-6 
        justify-self-end 
        cursor-pointer
        ml-auto
      "
    />
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
      id: String,
      checked: Boolean,
      name: String,
      description: String
    })

    let finishTask = ref<boolean>(props.checked);

    function toogleCheck() {
      finishTask.value = !finishTask.value;
    }
</script>

<style scoped>
</style>