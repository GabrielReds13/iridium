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
        <Button text="Entrar" type="submit" />
    </v-form>
</template>

<script lang="ts" setup>
    import Button from '../VV/Button.vue';

</script>

<style>

</style>