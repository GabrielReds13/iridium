<template>
  <div>
    <v-chip 
        v-show="isSelected === false" 
        color="#6b7280" 
        @click="toogleCheck()"
    >
        {{ props.name }}
    </v-chip>
    <v-chip 
    v-show="isSelected === true" 
    variant="flat" 
    :color="props.color" 
    @click="toogleCheck()"
    >
        {{ props.name }}
    </v-chip>
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        id: Number,
        name: String,
        selected: Boolean,
        color: String,
    });
    
    let isSelected = ref<boolean>(props.selected);

    function toogleCheck() {
        isSelected.value = !isSelected.value;
    }
</script>

<style>

</style>