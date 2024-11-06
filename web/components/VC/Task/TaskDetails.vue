<template>
  <v-dialog class="-v-dialog">
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
              <h1 class="font-bold text-xl">{{ editTask ? "Editar tarefa" : props.name }}</h1>
    
              <!-- options -->
              <div class="flex flex-row">
                <!-- delete -->
                <div v-show="!editTask">
                  <v-btn variant="plain" icon="mdi-delete"/>
                </div>

                <!-- edit -->
                <div v-show="!editTask">
                  <v-btn variant="plain" icon="mdi-pencil" @click="enableEdit()"/>
                </div>

                <!-- close/return -->
                <div>
                  <v-btn variant="plain" icon="mdi-window-close" @click="isActive.value = !editTask ? false : true, enableEdit(false)"/>
                </div>
              </div>
            </div>
            <FormsTaskData v-show="editTask" submit-text="Editar tarefa" />
            <span v-show="!editTask" class="text-gray-500 text-sm">{{ props.description }}</span>
          </div>

          <!-- submit button -->
          <VCButton text="Concluir tarefa" alt-text="Desfazer tarefa" :button-state="props.checked" @click="isActive.value = false" v-show="!editTask" />
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

  const editTask = ref<boolean>(false);

  function enableEdit(value: boolean) {
    if(value !== undefined) editTask.value = value;
    else editTask.value = !editTask.value;
  }
</script>

<style scoped>
</style>