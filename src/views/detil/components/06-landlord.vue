<template>
  <div class="landlord">
    <h3 class="title">位置周边</h3>
    <div class="content">
      <div id="map" ref="mapContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed,onMounted } from 'vue';
const props=defineProps({
  info: {
    type: Object,
    default:(()=>({}))
  }
})
const mapContent=ref()
onMounted(() => {
  var map = new BMapGL.Map(mapContent.value);    // 创建地图实例 
  var point = new BMapGL.Point(longitude.value, latitude.value);  // 创建点坐标 
  const maker=new BMapGL.Marker(point)
  map.centerAndZoom(point, 15);
  map.addOverlay(maker)
})
const longitude = computed(() => {
  return props.info.longitude
})
const latitude = computed(() => {
  return props.info.latitude
})
</script>
<style lang="less" scoped>
.landlord{
  background-color: #fff;
    padding:10px 20px;
    margin-top:20px;
    .title {
      padding: 10px 0;
      border-bottom: 1px solid #e2e3e5;
      margin-bottom: 10px;
    }
  .content{
    #map{
      width: 100%;
      height: 350px;
    }
  }
}
</style>
