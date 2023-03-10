<template>
  <div class="position">
    <div class="location">
      <div class="text" @click="handleSelectPosition">{{ useCityStore.cityItem.cityName }}</div>
      <div class="position" @click="handlePositionClick">
        <span>我的位置</span>
        <span></span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <div class="time-scope">
      <div class="time-scope-box">
        <div class="title">入住</div>
        <div class="time" @click="handleTimeClick">{{ startTime }}</div>
        <van-field v-model="price" placeholder="价格不限" />
      </div>
      <div class="interval-time">共{{ intervalTime }}晚</div>
      <div class="time-scope-box">
        <div class="title">离店</div>
        <div class="time" @click="handleTimeClick">{{endTime}}</div>
        <van-field v-model="person" placeholder="人数不限" />
      </div>
    </div>

  </div>
  <!-- 日历组件 -->
  <van-calendar v-model:show="calendarShow" :default-date="defaultDate" type="range" @confirm="onConfirm" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useCity from '@/stores/modules/city'
import { formartAdd, formartAddDate, formartInterval } from '@/utils/format';
import useMain from '@/stores/modules/main'
const useCityStore = useCity()
const router = useRouter()
const useMainStore=useMain()
// 获取当前位置
const handlePositionClick = () => {
  // 获取地理位置 google不能使用
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res);
  }, error => {
    console.log(error);
  })
}
// 跳转到城市选择页面
const handleSelectPosition = () => {
  router.push('/city')
}
// 日历组件显示状态
const calendarShow = ref(false)
// 入住时间
const startTime = ref(formartAdd(useMainStore.startTime,0, 'MM月DD日'))
// 结束时间
const endTime = ref(formartAdd(useMainStore.endTime, 0, 'MM月DD日'))
// 间隔时间
const intervalTime = ref(formartInterval(useMainStore.startTime, useMainStore.endTime))
// 时间默认值
// 必须要是时间对象格式
const defaultDate = ref([useMainStore.startTime, useMainStore.endTime])
// const defaultDate=ref([])
// 日历事件触发
const onConfirm = (date) => {
  startTime.value = formartAdd(date[0], 0, 'MM月DD日')
  endTime.value = formartAdd(date[1], 0, 'MM月DD日')
  useMainStore.startTime=date[0]
  useMainStore.endTime=date[1]
  intervalTime.value = formartInterval(date[0], date[1])
  calendarShow.value=false
}

// 打开时间选择框
const handleTimeClick = () => {
  calendarShow.value=true
}
// 价格
const price = ref(null)
// 人数
const person = ref(null)

</script>
<style lang="less" scoped>
:deep(.van-cell){
  padding: 0;
}
.location {
  display: flex;
  justify-content: space-between;

  .position {
    display: flex;
    align-items: center;
    font-size: 13px;

    img {
      margin-left: 10px;
      width: 20px
    }
  }
}
.time-scope{
  margin-top: 15px;
  display: flex;
  // justify-content: space-between;
  .time-scope-box{
    flex:1;
    .time{
      margin: 5px 0 10px 0;
    }
    .title,.price,
      .person{
      font-size: 14px;
      color: #a7a4a4;
      margin-bottom: 5px;
    }
  }
  .interval-time{
    flex: 1;
  }
}

</style>
