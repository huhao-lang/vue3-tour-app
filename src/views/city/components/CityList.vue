<template>
  <div>
    <div class="content-city">
      <van-index-bar :index-list="indexList">
        <van-index-anchor index="#">热门</van-index-anchor>
        <div class="content-city-list">
          <template v-for="item in cityContent.hotCities">
            <div class="list-item" @click="handleCity(item)" >{{ item.cityName }}</div>
          </template>
        </div>
        <template v-for="item in cityContent.cities">
          <van-index-anchor :index="item.group">{{ item.group }}</van-index-anchor>
          <template v-for="item2 in item.cities">
            <van-cell :title="item2.cityName" @click="handleCity(item2)"/>
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue'
import useCity from '@/stores/modules/city'
const useCityStore = useCity()
const router=useRouter()
const props= defineProps({
  cityContent: {
    type: Object,
    default: () => ({})
  }
})
const indexList = computed(() => {
  const list = props.cityContent.cities.map(item => item.group)
  list.unshift("#")
  return list
})
// 监听点击事件
const handleCity = (config) => {
  useCityStore.cityItem = config
  router.back()
}
</script>
<style lang="less" scoped>
.content-city{
  .content-city-list{
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    .list-item{
      width: 20%;
      height: 29px;
      margin: 6px;
      background-color:#fff4ed;
      line-height: 29px;
      text-align: center;
      font-size: 12px;
      border-radius: 5px;
    }
  }
}
</style>
