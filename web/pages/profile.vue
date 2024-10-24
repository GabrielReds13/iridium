<template>
  <NuxtLayout name="header-page">
    <!-- title -->
    <h1 class="text-left text-2xl font-bold w-full">Perfil</h1>
    
    <!-- profile -->
    <div class="flex flex-row gap-4 w-full items-center">
        <!-- profile photo -->
        <ProfilePhoto class="rounded-lg min-w-[6rem] w-[20vw] max-w-[12rem] min-h-[6rem] h-[20vw] max-h-[12rem]" />

        <!-- user data -->
        <div>
            <h1 class="text-xl font-bold">User Name</h1>
            <p class="text-gray-500 text-sm">user@gmail.com</p>
        </div>

        <!-- edit button -->
        <IconsPencil class="
          text-black 
            w-6 
            h-6 
            justify-self-end 
            cursor-pointer
            ml-auto
          "
        />
    </div>
    
    <!-- progress -->
    <h1 class="text-left text-2xl font-bold w-full">Tarefas</h1>

    <div class="grid grid-cols-2 gap-4 w-full items-center">
        <!-- cards -->
        <ProgressCard :name="'Concluídas'" :items="[]"/>
        <ProgressCard :name="'Em progresso'" :items="[]"/>
        <ProgressCard class="col-span-2" :name="'Total'" :items="[]"/>
    </div>

    <!-- today progress -->
    <div class="flex flex-col items-center justify-center gap-2 mt-10">
      <IllustrationsThroply class="w-[10rem]"/>

      <p class="text-xl leading-4 text-center">
        <span class="text-[#9E71FF] font-bold">Parabéns!</span> <br>
        <span class="text-gray-500 text-sm">Você concluiu 5 tarefas hoje.</span> <br>
      </p>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
  // import
  import ProfilePhoto from "~/components/VC/ProfilePhoto/ProfilePhoto.vue";
  import ProgressCard from "~/components/VC/ProgressCard/ProgressCard.vue";

</script>

<style scoped>
</style>