<template>
    <NuxtLayout name="header-page" title="Home" class="pb-4">
        <!-- title -->
         <h1 class="text-left text-2xl font-bold w-full">Suas tarefas</h1>
    
        <!-- tags -->
        <div class="flex flex-row w-full min-h-[32px] gap-2">
          <UITag :color="'#9E71FF'" :name="'Em progresso'" :selected="true"/>
          <UITag :color="'#9E71FF'" :name="'Concluidos'"/>
        </div>
        
        <!-- tasks -->
        <div class="flex flex-col w-full h-full gap-4 overflow-y-scroll pr-2">
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="true"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
          <VCTask :name="'Lorem ipsum'" :description="'Lorem ipsum dolor sit amet.'" :checked="false"/>
        </div>
        
        <!-- add -->
        <VCTaskCreate />
    </NuxtLayout>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  </style>