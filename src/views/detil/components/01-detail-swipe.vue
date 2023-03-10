<template>
  <div class="detail-swipe">
    <van-swipe :autoplay="2000">
      <template v-for="item in swipeInfo">
        <van-swipe-item>
          <div class="swipe-box">
            <img :src="item.url" alt="">
          </div>
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(item, key, index) in indicatorInfo" :key="index">
            <span class="title" :class="{ currentActive: swipeInfo[active]?.enumPictureCategory == key }">
             {{ formatTitle(item[0].title)}}
              <span v-if="swipeInfo[active]?.enumPictureCategory == key">
                {{formatIndex(swipeInfo[active])}}/{{item.length}}
              </span>
            </span>
           
          </template>
        </div>

      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import {  reactive } from 'vue'
const props = defineProps({
  swipeInfo: {
    type: Object,
    default: (() => [])
  }
})
const reg = /【(.*?)】/
const formatTitle = (str) => {
  const data = str.match(reg)
  return data[1]
}
const indicatorInfo = reactive({})
const formatIndex = (item) => {
  console.log(item);
  const data = indicatorInfo[item.enumPictureCategory]
  return  data.findIndex(value=>value===item)+1
}
for (const item of props.swipeInfo) {
  if (!indicatorInfo[item.enumPictureCategory]) {
    indicatorInfo[item.enumPictureCategory] = []
  }
  indicatorInfo[item.enumPictureCategory].push(item)
  console.log(indicatorInfo);
}
</script>
<style lang="less" scoped>
.detail-swipe {
  .swipe-box {
    img {
      width: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background:black;
    color: #fff;
    border-radius: 20px;
  }
  .title{
    display: inline-block;
    padding: 2px;
    margin-right: 2px;
  }
  .currentActive{
    background-color: #fff;
    color: black;
    border-radius: 10px;
  }
}
</style>
