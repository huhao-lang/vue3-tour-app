<template>
  <div class="search">
    搜索
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router' 
const route = useRoute()
console.log(route.query);
</script>
<style scoped>

</style>
