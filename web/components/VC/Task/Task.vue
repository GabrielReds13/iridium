<template>
  <div class="
    flex
    flew-row
    justify-center
    items-center
    w-full 
    h-max
    min-w-[320px]
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

    <!-- open item details -->
    <VCTaskDetails
      :id="props.id"
      :name="props.name"
      :description="props.description"
      :checked="finishTask"
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