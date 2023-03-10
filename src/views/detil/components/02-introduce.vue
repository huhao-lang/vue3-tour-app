<template>
  <div class="introduce">
    <div class="title">{{ introduceInfo.houseName }}</div>
    <div class="tag">
      <template v-for="item in introduceInfo.houseTags">
        <span class="tag-item" v-if="item.tagText" :style="styleBFC(item)">{{ item.tagText?.text }}</span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
defineProps({
  introduceInfo: {
    type: Object,
    default: () => ({})
  }
})
const styleBFC = computed(() => {
  let style = {}
  return (params) => {
    if (params.tagText) {
      style = {
        color: params.tagText.color,
        backgroundColor: params.tagText.background.color
      }
    }
    return style
  }
})
</script>
<style lang="less" scoped>
.introduce {
  background-color: #fff;
  padding:20px;
  .title {
    font-size: 18px;
    font-weight: 600;
  }
  .tag{
    margin-top: 10px;
    .tag-item{
      padding: 2px;
      font-size: 12px;
      margin-right: 2px;
    }
  }
}
</style>
