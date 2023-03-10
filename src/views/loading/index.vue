<template>
  <div class="loading" v-if="isLoading">
    <div class="loading-bg">
        <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useMain from '@/stores/modules/main';
const useHomeStore = useMain()
const {isLoading}=storeToRefs(useHomeStore)
</script>
<style lang="less" scoped>
.loading{
  position:fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .1);
  .loading-bg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background: url(@/assets/img/home/loading-bg.png) no-repeat ;
    background-size: 100%;
    img{
      width: 50px;
    }
  }
}
</style>
