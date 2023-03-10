<template>
  <div class="search-bar">
    <div class="time-box">
      <div class="entry">
        <span class="text">住</span>
        <span class="time">{{ startFarmat }}</span>
      </div>
      <div class="output">
        <span class="text">离</span>
        <span class="time">{{ endFarmat }}</span>
      </div>
    </div>
    <div class="search">
      <van-search  v-model="searchValue" left-icon="" right-icon="search" placeholder="关键词/位置/民宿" />
    </div>
  </div>
</template>

<script setup>
import {ref, computed } from 'vue'
import { storeToRefs } from 'pinia';
import useMain from '@/stores/modules/main';
import { formartAdd } from '@/utils/format'
const useMainStore = useMain()
const { startTime, endTime } = storeToRefs(useMainStore)
const startFarmat = computed(() => formartAdd(startTime.value, 0, 'MM.DD'))
const endFarmat = computed(() => formartAdd(endTime.value, 0, 'MM.DD'))
const searchValue=ref(null)
</script>
<style lang="less" scoped>
:deep(.van-search){
  padding-left: 5px;
}
.search-bar{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #fff;
  
  .time-box{
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #f7f8fa;
    .entry,.output{
      font-size: 12px;
      padding: 2px 8px 0 8px;
      .text{
        color: #a7a4a4;
      }
    }
  }
  .search{
    flex: 1;
  }
}
</style>
