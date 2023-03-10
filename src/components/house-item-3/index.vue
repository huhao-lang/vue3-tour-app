<template>
  <div class="house-item">
    <img :src="imgInfo.url">
    <div class="content">
      <div class="content-location"><span class="icon"><img src="@/assets/img/home/location.png" alt=""></span>{{ props.houseInfo.location }}</div>
      <div class="content-title">{{ props.houseInfo.houseName }}</div>
      <div class="content-summaryText">{{ props.houseInfo.summaryText }}</div>
      <div class="price">
        <span class="price-current">
          ￥{{ props.houseInfo.finalPrice}}
        </span>
        <span class="price-pre">
          <sup>￥{{ props.houseInfo.productPrice }}</sup>
        </span>
        <span class="price-discounts" :style="priceDiscounts.style">
          {{ priceDiscounts.text}}
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
const priceDiscounts = computed(() => {
  return {
    text: props.houseInfo?.priceTipBadge?.text,
    style: {
      color: props.houseInfo?.priceTipBadge?.color,
    }
  }
})
</script>
<style lang="less" scoped>
.house-item {
  width: 48%;
  padding: 5px 0;
  box-sizing: border-box;
  // overflow: hidden;
  // border-radius: 10px;
  img {
    width: 100%;
    border-radius: 6px;
  }
  .content{
    font-size: 14px;
    color: black;
    padding:5px;
    .content-location,.content-summaryText{
      font-size: 12px;
      color: rgb(130, 128, 128);
      display: flex;
      align-items: center;
      .icon{
        img{
          width: 18px;
          height:18px;
        }
      }
    }
    .content-summaryText{
      margin: 5px;
    }
    .content-title{
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .price{
     .price-current{
      color: var(--primary-color);
     }
     .price-pre{
      font-size: 12px;
      text-decoration:line-through;
      color: rgb(130, 128, 128);

     }
     .price-discounts{
      font-size: 12px;
      padding: 1px;
      background-color: #fe6571;
      border-radius: 10px;
      margin-left: 10px;
     }
    }
  }
}
</style>
