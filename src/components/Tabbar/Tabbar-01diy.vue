<template>
  <div class="tabbar">
    <template v-for="(item,index) in tabbarList" :key="item.text">
      <div class="tab-item" @click="handleTabItemClick(index,item.path)">
        <img v-if="currentIndex!==index" :src="getAssetURL(item.img)" />
        <img v-else :src="getAssetURL(item.imgActive)" />
        <span :class="{active:currentIndex==index}">{{item.text}}</span>
      </div>
    </template>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { getAssetURL } from '@/utils/loader-assets'
const tabbarList = [
  {
    text: '首页',
    img: 'tabbar/tab_home.png',
    imgActive: 'tabbar/tab_home_active.png',
    path:'/'
  },
  {
    text: '收藏',
    img: 'tabbar/tab_favor.png',
    imgActive: 'tabbar/tab_favor_active.png',
    path:'/collect'
  },
  {
    text: '订单',
    img: 'tabbar/tab_order.png',
    imgActive: 'tabbar/tab_order_active.png',
    path:'/order'
  },
  {
    text: '消息',
    img: 'tabbar/tab_message.png',
    imgActive: 'tabbar/tab_message.png',
    path:'/message'
  },
]
const currentIndex = ref(0)
const router=useRouter()
const handleTabItemClick = (index,url) => {
  currentIndex.value = index
  router.push(url)
}
</script>
<style lang="less" scoped>
.active{
  color:var(--primary-color)
}
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 50px;
  border-top: 1px solid #f3f3f3;
  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    img{
      width: 36px;
    }
  }
}
</style>
 