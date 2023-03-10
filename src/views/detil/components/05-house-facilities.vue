<template>
  <div class="house-facilities">
    <h3 class="title">房屋设施</h3>
    <div class="content">
      <template v-for="item in list">
        <div class="item" v-if="facilitySort.includes(item.groupId)">
          <div class="left">
            <img :src="item.icon" alt="">
            <span class="left-text">{{ item.groupName }}</span>
          </div>
          <div class="right">
            <template v-for="item2 in 4">
              <div class="right-item">
                <img src="@/assets/img/detail/icon_check.png" alt="">
                <span class="item-text">{{ item.facilitys[item2-1].name}}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
    <div class="select-estimate">
      <span>查看全部设施</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props= defineProps({
  info: {
    type:Object,
  }
})
const list = computed(() => {
  return props.info.houseFacility.houseFacilitys
})
const facilitySort = computed(() => {
  return props.info.houseFacility.facilitySort
})
</script>
<style lang="less" scoped>
.house-facilities{
  background-color: #fff;
  padding:10px 20px;
  .title{
    padding: 10px 0;
    border-bottom: 1px solid #e2e3e5;
    margin-bottom: 10px;
  }
  .content{
    background-color: #f7f9fb;
    .item{
      display: flex;
      padding: 20px;
      .left{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
          width: 30px;
        }
        .left-text{
          font-size: 12px;
        }
      }
      .right{
        flex: 4;
        display: flex;
        flex-wrap: wrap;
        .right-item{
          width: 50%;
          display: flex;
          align-items: center;
          img{
            width: 15px;
            margin-right: 6px;
          }
          .item-text{
            font-size: 12px;
          }
        }
      }
    }
  }
  .select-estimate{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    font-size: 14px;
    color: var(--primary-color);
  }
}
</style>
