<template>
  <div class="estimate">
    <estimate-item>
      <template #left>
        <span class="num">{{ info.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ info.commentBrief.scoreTitle }}</span>
        <span class="commentBrief">"{{ info.commentBrief.commentBrief }}"</span>
      </template>
      <template #right>
        <span class="comment">{{ info.commentBrief.totalCount }}条评论</span>
      </template>
    </estimate-item>
    <estimate-item>
      <template #left>
        <span class="content">{{ info.nearByPosition.address }}</span>
      </template>
      <template #right>
        <span>地图-周边</span>
      </template>
    </estimate-item>
  </div>
</template>

<script setup>
import estimateItem from './04-estimate-item.vue';
const props=defineProps({
  info: {
    type: Object,
    default:()=>({})
  }
})

</script>
<style lang="less" scoped>
.estimate{
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  .num{
    font-weight: 600;
    margin-right: 5px;
  }
  .scoreTitle{
    font-weight: 600;
    font-size: 12px;
  }
  .commentBrief{
    font-size: 12px;
    color:#6c6d6f ;
  }
  .content{
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
