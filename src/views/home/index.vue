<template>
  <div class="home" ref="homeRef">
    <home-top-title></home-top-title>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="content">
      <position></position>
    </div>
    <div class="seach">
      <van-field v-model="seach" placeholder="关键字/位置/民宿名" />
    </div>
    <div class="hot-list">
      <template v-for="item in hotList">
        <span class="hot-list-item">{{ item.tagText.text}}</span>
      </template>
    </div>
    <div class="searchButton">
      <van-button type="primary" @click="handleSearch" round :hairline="false" size="large">开始搜索</van-button>
    </div>
    <div class="type-list">
      <merchandise-type></merchandise-type>
    </div>
    <div class="hot-choiceness">
      <p class="title">热门精选</p>
      <div class="choiceness-list">
        <template v-for="item in choiceness" :key="item">
          <house-item-3 @click="handleDetil(item.data)" v-if="item.discoveryContentType===3" :houseInfo="item.data"></house-item-3>
          <house-item-9 @click="handleDetil(item.data)" v-if="item.discoveryContentType===9" :houseInfo="item.data"></house-item-9>
        </template>
      </div>
    </div>
  </div>
  <!-- 搜索 -->
  <search-bar v-show="isSearchBar"></search-bar>
  <loading></loading>
</template>

<script setup name="Home">
import { ref,watch,computed, onActivated } from 'vue'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import HomeTopTitle from './components/HomeTopTitle.vue'
import Position from './components/Position.vue';
import MerchandiseType from './components/MerchandiseType.vue'
import HouseItem3 from '@/components/house-item-3/index.vue'
import HouseItem9 from '@/components/house-item-9/index.vue'
import SearchBar from './components/SearchBar.vue'
import Loading from '@/views/loading/index.vue'
import useHome from '@/stores/modules/home'
import getScroll from '@/hooks/scroll'
const router = useRouter()
const useHomeStore=useHome()
// 搜索
const seach = ref(null)
// 发送搜索列表请求
useHomeStore.getHotListAction()
// 获取搜索列表数据
const { hotList } = storeToRefs(useHomeStore)
// 监听搜索按钮点击
const handleSearch = () => {
  router.push({
    path: '/search',
    query: {
      id: 1,
      name:2
    }
    })
}
// 发送精选列表请求
useHomeStore.getChoicenessAction()
const { choiceness } = storeToRefs(useHomeStore)
const homeRef = ref()
const {isScrollBottom,scrollTop}=getScroll(homeRef)
watch(isScrollBottom, (newValue) => {
  if (newValue) {
    useHomeStore.getChoicenessAction()
  }
})
onActivated(() => {
  homeRef.value.scrollTo({
    // 滚动距离
    top: scrollTop.value,
    // 动画
    // behavior: "smooth"
  })
})

const isSearchBar = computed(() => {
  return scrollTop.value>100
})
// 跳转到详情页
const handleDetil = (config) => {
  router.push(`/detil/${config.houseId}`)
}

</script>
<style lang="less" scoped>
:deep(.van-button--primary){
  border: 1px solid var(--primary-color);
  background: linear-gradient(to right, #ff8d15, #fab241 );
  font-weight: bold;
}
.home {
  padding-bottom: 60px;
  height: 100vh;
  overflow-y: auto;
  .banner {
    img {
      width: 100%;
    }
  }
  .content {
    padding: 10px 20px 0;
  }
.seach {
  margin-top: 10px;
}
.hot-list{
  padding:10px 30px;
  display: flex;
  flex-wrap: wrap;
  .hot-list-item{
    margin: 5px;
    padding: 4px 8px;
    background-color: #f5f3f2;
    border-radius: 5px;
    font-size: 12px;
  }
}
.searchButton{
  padding: 0 20px;
}
.type-list{
  padding: 20px 10px;
}
.hot-choiceness{
  padding:0px 20px;
  .title{
    font-weight: bold;
  }
  .choiceness-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
}
</style>
