<template>
  <div class="tabbar">
    <template v-for="(item,index) in titles">
      <div :class="{active:currentIndex===index}" @click="handleChange(index)" class="tabbar-item">{{item}}</div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const emit= defineEmits(["handleTabbar"])
const currentIndex = ref(0)
const handleChange = (index) => {
  currentIndex.value = index
  emit('handleTabbar',index)
}
const handleEditCurrentIndex = (index) => {
  currentIndex.value=index
}
defineExpose({
  handleEditCurrentIndex
})
defineProps({
  titles: {
    type: Object,
    default:()=>({})
  }
})
</script>
<style lang="less" scoped>
.tabbar{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgb(241, 239, 239);
  .tabbar-item{
    font-size: 14px;
    color: var(--primary-color);
    padding-bottom: 10px;
    border-bottom: 3px solid #fff;
  }
  .active{
    border-bottom: 3px solid var(--primary-color);
  }
}
</style>
