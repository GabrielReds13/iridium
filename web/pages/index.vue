<template>
  <div class="flex flex-col items-center gap-4 p-4 pb-0 w-full h-full">
    <!-- title -->
     <h1 class="text-left text-2xl font-bold w-full">Suas tarefas</h1>

    <!-- tags -->
    <div class="flex flex-row w-full min-h-[32px] gap-2">
      <UITag :color="'#9E71FF'" :name="'Em progresso'" :selected="true"/>
      <UITag :color="'#9E71FF'" :name="'Concluidos'"/>
    </div>
    
    <!-- tasks -->
    <div class="flex flex-col w-full h-full gap-4 overflow-y-scroll">
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
      <Task :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
    </div>
    
    <!-- add -->
    <div class="fixed bottom-4 right-4 z-10">
      <v-btn class="-add-btn" :color="'#9E71FF'" icon="mdi-plus"/>
    </div>
  </div> 
</template>

<script lang="ts" setup>
</script>

<style scoped>
  .-add-btn, .-add-btn:hover {
    box-shadow: none;
  }
</style>