<template>
  <div class="detail"  ref="scrollRef">
        <div class="search-bar">
          <div @click="handleBack">
            <van-icon name="arrow-left" color="#ff9854" /><span class="text">旅途</span>
          </div>
          <!-- <van-search class="search-input" v-model="searchValue" placeholder="请输入搜索关键词" />
              <div class="more">
                <img src="@/assets/img/home/icon-right-menu.png" alt="">
              </div> -->
          <div class="title">房屋详情</div>
        </div>
        <div class="content" v-if="detilInfo.mainPart" v-memo="[detilInfo]">
          <detail-swipe  :swipeInfo="detilInfo.mainPart.topModule?.housePicture.housePics"></detail-swipe>
          <div class="content-detail">
            <introduce name="详情" :ref="getRef" :introduceInfo="detilInfo.mainPart.topModule"></introduce>
            <estimate  :info="detilInfo.mainPart.topModule"></estimate>
            <house-facilities name="设施" :ref="getRef" :info="detilInfo.mainPart.dynamicModule.facilityModule"></house-facilities>
            <house-facilities name="设施2" :ref="getRef" :info="detilInfo.mainPart.dynamicModule.facilityModule"></house-facilities>
            <house-facilities name="设施3" :ref="getRef" :info="detilInfo.mainPart.dynamicModule.facilityModule"></house-facilities>
            <house-facilities name="设施4" :ref="getRef" :info="detilInfo.mainPart.dynamicModule.facilityModule"></house-facilities>
            <landlord  :info="detilInfo.mainPart.dynamicModule.positionModule"></landlord>
          </div>
        </div>
        <tabbar ref="tabbarRef" v-show="showTabbar" @handleTabbar="handleTabbar" :titles="titles"></tabbar>
    </div>
</template>

<script setup>
import { ref,computed,watch,onUnmounted } from 'vue'
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import DetailSwipe from './components/01-detail-swipe.vue'
import Introduce from './components/02-introduce.vue'
import estimate from './components/03-estimate.vue';
import HouseFacilities from './components/05-house-facilities.vue'
import landlord from './components/06-landlord.vue'
import tabbar from './components/07-tabbar.vue'
import useHome from '@/stores/modules/home';
import scroll from '@/hooks/scroll'
const route = useRoute()
const router=useRouter()
const useHomeStore = useHome()
useHomeStore.getDetilInfoAction(route.params.id)
const { detilInfo } = storeToRefs(useHomeStore)
const searchValue=ref(null)
const handleBack = () => {
  router.back()
}
const scrollRef = ref()
const flag = ref(false)
let elTop=0
const handleTabbar = (info) => {
  flag.value=true
  const key = Object.keys(componentList.value)[info]
  elTop = componentList.value[key].offsetTop - 50
  scrollRef.value.scrollTo({
    top:elTop,
    behavior:"smooth"
  })
}
const { scrollTop } = scroll(scrollRef)
const showTabbar = computed(() => {
  return scrollTop.value>250
})
const tabbarRef=ref()
watch(scrollTop, (newValue) => {
  if (elTop == newValue) {
    flag.value = false
  }
  if(flag.value)return
  const list = Object.keys(componentList.value)
  let index=list.length-1
  for (let i = 0; i < list.length; i++){
    const top = componentList.value[list[i]].offsetTop
    if (top > newValue+50) {
      index = i - 1
      break;
   }
  }
  tabbarRef?.value.handleEditCurrentIndex(index)
})
const titles = computed(() => {
  return Object.keys(componentList.value)
})
const componentList = ref({})
const getRef = (ref) => {
  if(!ref)return
  const name = ref.$el.getAttribute('name')
  componentList.value[name]=ref.$el
  // titles.value.push(ref.$el.getAttribute('name'))
  // componentList.value.push(ref?.$el)
}
onUnmounted(() => {
  detilInfo.value=[]
})
</script>
<style lang="less" scoped>
.detail{
  background: #f5f7fa;
  height: 100vh;
  overflow-y: auto;
      .search-bar {
          background-color: #fff;
          display: flex;
          align-items: center;
          padding: 0 20px;
          height: 49px;
      
          .text {
            flex: 1;
            font-size: 14px;
            color: var(--primary-color);
          }
      
          .title {
            text-align: center;
            flex: 5;
            color: black;
          }
      
          .search-input {
            flex: 1;
          }
      
          .more {
            img {
              width: 25px;
            }
          }
        }
      
        .content {
          .content-detail {
            // padding: 20px;
          }
        }

}
</style>
