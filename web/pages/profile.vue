<template>
  <div class="flex flex-col items-center gap-4 p-4 w-full h-full">
    <!-- title -->
    <h1 class="text-left text-2xl font-bold w-full">Perfil</h1>

    <!-- profile -->
    <div class="flex flex-row gap-4 w-full items-center">
        <!-- profile photo -->
        <div
          class="flex min-w-[6rem] w-[20vw] max-w-[12rem] min-h-[6rem] h-[20vw] max-h-[12rem] bg-gray-200 rounded-lg border-2 border-gray-200"
        >
          <img class="w-full h-full" :src="handleImage" alt="">
        </div>
    
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
    
    <!-- Progress -->
    <div class="grid grid-cols-2 gap-4 w-full items-center">
        <!-- card -->
        <ProgressCard :name="'Concluídos'" :items="[]"/>
        <ProgressCard :name="'Em progresso'" :items="[]"/>
        <ProgressCard class="col-span-2" :name="'Total'" :items="[]"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // handle profile image
  import handleImage from "@/assets/images/Default-Photo.png";
</script>

<style scoped>
</style>