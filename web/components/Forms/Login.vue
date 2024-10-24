<template>
    <v-form class="w-full justify-center gap2 flex flex-col -show-overflow">
        <!-- fields -->
        <v-text-field 
          label="Email" 
          type="text" 
          variant="outlined" 
          color="#9E71FF" 
          base-color="#463176" 
          rounded="lg"
        ></v-text-field>
        <v-text-field 
          label="Senha" 
          type="password" 
          variant="outlined" 
          color="#9E71FF" 
          base-color="#463176" 
          rounded="lg"
        ></v-text-field>
  
        <!-- submit form -->
        <VCButton text="Entrar" type="submit" :button-state="false"/>
    </v-form>
</template>

<script lang="ts" setup>
</script>

<style>

</style>