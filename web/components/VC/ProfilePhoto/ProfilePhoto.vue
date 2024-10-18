<template>
    <!-- profile photo -->
    <div
        class="flex bg-gray-200 border-2 border-gray-200"
    >
        <img class="w-full h-full" :src="handleImage" alt="">
    </div>
</template>

<script lang="ts" setup>
    // handle profile image
    import handleImage from "@/assets/images/Default-Photo.png";

</script>

<style>

</style>