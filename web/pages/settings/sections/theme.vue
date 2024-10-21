<template>
    <section class="flex flex-col w-full">
      <h1 class="text-left text-xl font-bold w-full">Tema</h1>
      <!-- theme -->
      <v-combobox 
          label="Temas" 
          variant="outlined" 
          v-model="selectedTheme"
          :items="getThemes"
          item-title="name"
          color="#9E71FF" 
          base-color="#6b7280" 
          rounded="lg"
      />
      <!-- color -->
      <v-combobox 
          label="Cores" 
          variant="outlined" 
          v-model="selectedColor"
          :items="getColors"
          item-title="name"
          color="#9E71FF" 
          base-color="#6b7280" 
          rounded="lg"
      />
    </section>
</template>

<script lang="ts" setup>
    // import
    import { appTheme } from '~/scripts/AppTheme';
    import type { Color } from '~/scripts/types/themes/Color';
    import type { Theme } from '~/scripts/types/themes/Theme';
    
    // code

    // ## app theme ##
    // color
    const getColors = ref<Color[]>(await appTheme.get.allColors());
    const selectedColor = ref<string | null>(null);
    
    // theme
    const getThemes = ref<Theme[]>(await appTheme.get.allThemes());
    const selectedTheme = ref<string | null>(null);
    
    onMounted(() => {
        // ## app theme ##
        const actuallyColor = getColors.value.find(color => color.selected === true);
        const actuallyTheme = getThemes.value.find(theme => theme.selected === true);

        if(actuallyColor && actuallyTheme) {
            selectedColor.value = actuallyColor.name;
            selectedTheme.value = actuallyTheme.name;
        }
    });
</script>

<style>

</style>