<template>
  <v-dialog>
    <!-- button -->
    <template #activator="{ props: activator }">
        <IconsMoreOptions 
          v-bind="activator"
          class="
          text-black 
            ml-auto 
            w-4 
            h-4 
            cursor-pointer"
        />
    </template>

    <!-- modal -->
    <template #default="{ isActive }">
        <NuxtLayout name="modal" width="100%">
          <!-- content -->
          <div class="w-full">
            <!-- header -->
            <div class="flex flex-row w-full items-center justify-between">
              <h1 class="font-bold text-xl">{{ props.name }}</h1>
    
              <!-- options -->
              <div>
                <v-btn variant="plain"icon="mdi-delete"/>
                <v-btn variant="plain"icon="mdi-pencil"/>
                <v-btn variant="plain"icon="mdi-window-close" @click="isActive.value = false"/>
              </div>
            </div>
            <span class="text-gray-500 text-sm">{{ props.description }}</span>
          </div>

          <!-- submit button -->
          <VCButton text="Concluir tarefa" alt-text="Desfazer tarefa" :button-state="props.checked" @click="isActive.value = false"/>
        </NuxtLayout>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
  const props = defineProps({
    id: String,
    name: String,
    description: String,
    checked: Boolean,
  });
</script>

<style>

</style>