<template>
  <div class="app">
    <!-- vue3.0配置 Component是固定写法-->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
      <!-- <keep-alive include="['City','Home']">
        <component :is="Component"></component>
      </keep-alive> -->
    </router-view>
    <tab-bar v-show="routerList.includes($route.path)"></tab-bar>
  </div>
</template>

<script setup>
import TabBar from './components/Tabbar/Tabbar.vue';
const routerList = ['/home', '/collect', '/order', '/message'];
</script>
<style scoped>
.app{
  
}
</style>
