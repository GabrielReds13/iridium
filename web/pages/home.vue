<template>
  <NuxtLayout name="header-page" title="Home" class="pb-4">
      <!-- title -->
       <h1 class="text-left text-2xl font-bold w-full">Suas tarefas</h1>
  
      <!-- tags -->
      <div class="flex flex-row w-full min-h-[32px] gap-2">
        <UITag color="#9E71FF" :name="'Em progresso'" :selected="true"/>
        <UITag color="#9E71FF" :name="'Concluidos'"/>
      </div>
      
      <!-- tasks -->
      <div 
        ref="taskContainer" 
        class="flex flex-col w-full h-full gap-4 overflow-hidden overflow-y-auto pr-2"
        :class="{'pr-2' : scrollPadding}"
      >
        <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="true"/>
        <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      </div>
      
      <!-- add -->
      <VCTaskCreate />
  </NuxtLayout>
</template>
  
<script lang="ts" setup>
import { scrollDetails } from '~/scripts/ScrollDetails';

  const taskContainer = ref<HTMLElement | null>(null);

  let scrollPadding = ref<boolean>(false);

  onMounted(async () => {
    scrollPadding.value = await scrollDetails.scrollPadding(taskContainer.value!);
  });
</script>
  
<style scoped>
</style>