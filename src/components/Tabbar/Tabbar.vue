<template>
  <div class="tabbar">
    <van-tabbar route v-model="active" active-color="#ff9854"  @change="onChange">
      <template  v-for="(item,index) in tabbarList" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span >{{item.text}}</span>
          <template #icon>
            <img v-if="currentPath===index" :src="getAssetURL(item.imgActive)"/>
            <img v-else :src="getAssetURL(item.img)"/>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
import { getAssetURL } from '@/utils/loader-assets'
import { useRoute } from 'vue-router'
const route=useRoute()
const tabbarList = [
  {
    text: '首页',
    img: 'tabbar/tab_home.png',
    imgActive: 'tabbar/tab_home_active.png',
    path:'/home'
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
const currentPath = computed(() => {
  const index = tabbarList.findIndex(item => item.path === route.path)
  if (index === -1) return
  return index
})
const active = ref(0)
const onChange = (index) => {
 
}
</script>
<style lang="less" scoped>
.active{
  color:var(--primary-color)
}
.tabbar{
    // 找到类, 对类中的CSS属性重写
      // :deep(.class)找到子组件的类, 让子组件的类也可以生效
      :deep(.van-tabbar-item__icon) {
        font-size: 50px;
      }
}
</style>
 