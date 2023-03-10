<template>
  <div class="city">
    <form action="/">
      <van-search v-model="value" color="#1989fa" show-action placeholder="城市/区域/位置" @search="onSearch" @cancel="onCancel"
        shape="round">
      </van-search>
    </form>
    <van-tabs v-model:active="activeName" color="#ff9854" @change="handleChange">
      <template v-for="(item,key,index) in cityTabList" :key="key">
        <van-tab  :title="item.title" :name="key"></van-tab>
      </template>
    <div class="city-list">
      <template v-for="(item,key,index) in cityTabList" :key="key"> 
        <city-list v-show="activeName==key" :city-content="item"></city-list>
      </template>
    </div>
    </van-tabs>
  </div>
</template>

<script setup name="City">
import { ref,computed } from 'vue'
import { useRouter } from 'vue-router';
import useCity from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import CityList from './components/CityList.vue';
const value = ref("")
const router = useRouter()
const onSearch = () => {
  
}
const onCancel = () => {
  router.back()
}
const activeName = ref("")
const useCityStore = useCity()
// if (!Object.keys(useCityStore.cityTabList).length) {
  useCityStore.getTabListAction()
// }
const { cityTabList } = storeToRefs(useCityStore)
const cityContent = computed(() => {
 return cityTabList.value[activeName.value]
})
const handleChange = () => {
  
}
</script>
<style lang="less" scoped>
.city{
  .city-list{
    margin: 20px 0;
    padding-left: 12px;
    height: calc(100vh - 138px);
    overflow-y: auto;
  }
}
</style>
