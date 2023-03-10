import { defineStore } from 'pinia'
import { getTablistRequest } from '@/servies/index'
const useCity = defineStore('City',{
  state: () => {
    return {
      // 城市数据列表
      cityTabList: {},
      // 选中数据项
      cityItem: {
        cityName:"成都"
      }
    }
  },
  actions: {
    getTabListAction() {
      getTablistRequest().then(res => {
        this.cityTabList=res.data
      })
    }
  }
})
export default useCity