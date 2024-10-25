<template>
    <v-dialog>
      <!-- button -->
      <template #activator="{ props: activator }">
        <VCButton text="Criar tarefa" :button-state="false" icon="mdi-plus" v-bind="activator" />
      </template>
  
      <!-- modal -->
      <template #default="{ isActive }">
          <NuxtLayout name="modal" width="100%">
            <!-- content -->
            <div class="w-full">
              <!-- header -->
              <div class="flex flex-row w-full items-center justify-between">
                <h1 class="font-bold text-xl">Criar tarefa</h1>
      
                <!-- options -->
                <v-btn variant="plain"icon="mdi-window-close" @click="isActive.value = false"/>
              </div>

              <!-- Form -->
            </div>
            <!-- submit button -->
             <FormsTaskData />
  
            <!-- <VCButton text="Concluir tarefa" alt-text="Desfazer tarefa" :button-state="false" @click="isActive.value = false"/> -->
          </NuxtLayout>
      </template>
    </v-dialog>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  </style>