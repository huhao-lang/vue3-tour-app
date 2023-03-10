<template>
  <div class="merchandise-type">
    <template v-for="item in merchandiseType">
      <div class="type-item">
        <img :src="item.pictureUrl" alt="">
        <span>{{item.title}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHome from '@/stores/modules/home';

const useHomeStore = useHome()
useHomeStore.getTypeListAction()
const {merchandiseType}=storeToRefs(useHomeStore)

</script>
<style lang="less" scoped>
.merchandise-type{
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  .type-item{
    width: 70px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    img{
      width: 30px;
    }
    span{
      font-size: 14px;
    }
  }
}
</style>
