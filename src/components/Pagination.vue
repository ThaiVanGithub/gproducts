<template>
  <a-pagination v-model:current="current" :total="50" show-less-items />
</template>
<script setup>
import { ref } from 'vue';
const current = ref(2);
</script>