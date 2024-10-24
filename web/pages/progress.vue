<template>
  <NuxtLayout name="header-page">
    <!-- title -->
    <h1 class="text-left text-2xl font-bold w-full">Progresso</h1>

    <div class="grid grid-cols-2 gap-4 w-full items-center">
        <!-- cards -->
        <VCProgressCard :name="'Concluídas'" :items="[]"/>
        <VCProgressCard :name="'Em progresso'" :items="[]"/>
        <VCProgressCard class="col-span-2" :name="'Total'" :items="[]"/>
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
</script>

<style scoped>
</style>