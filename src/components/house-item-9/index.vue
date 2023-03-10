<template>
  <div class="house-item">
    <img :src="imgInfo.url">
    <div class="content">
      <div class="content-summaryText">{{ props.houseInfo.summaryText }}</div>
      <div class="content-title">{{ props.houseInfo.houseName }}</div>
      <div class="star">
        <van-rate :model-value="props.houseInfo.commentScore - 0" color="#fff" :size="12" allow-half readonly />
        <span class="price">
          ￥{{ props.houseInfo.finalPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  houseInfo: {
    type: Object,
    default: () => ({})
  }
})
const imgInfo = computed(() => {
  return {
    url: props.houseInfo.image.url,
    // style: {
    //   width: props.houseInfo.image.width + "px",
    //   height: props.houseInfo.image.height + "px",
    // }
  }
})
</script>
<style lang="less" scoped>
.house-item {
  position: relative;
  width: 48%;
  padding: 5px 0;
  box-sizing: border-box;

  // overflow: hidden;
  // border-radius: 10px;
  img {
    width: 100%;
    border-radius: 6px;
  }

  .content {
    position: absolute;
    font-size: 14px;
    bottom: 10px;
    color: #fff;
    padding: 0 5px;

    .content-summaryText {}

    .content-title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .star {
      margin: 5px;
      display: flex;
      align-items: center;
    }

    .price {
      margin-left: 15px;
    }
  }
}
</style>
