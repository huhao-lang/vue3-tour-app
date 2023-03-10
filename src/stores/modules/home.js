import { defineStore } from 'pinia'
import { getHomeHotRequest, getHomeTypeRequest, getHomeChoicenessRequest, getDetilInfoRequest } from '@/servies/index'
const useHome = defineStore('home', {
  state: () => {
    return {
      // 热门搜索
      hotList: [],
      // 商品种类列表
      merchandiseType: [],
      // 精选列表
      choiceness: [],
      // 每次下拉后的page页
      currentIndex: 1,
      // 住房详情
      detilInfo:[]
    }
  },
  actions: {
    getHotListAction() {
      getHomeHotRequest().then(res => {
        this.hotList = res.data
      })
    },
    getTypeListAction() {
      getHomeTypeRequest().then(res => {
        this.merchandiseType=res.data
      })
    },
   async getChoicenessAction() {
      getHomeChoicenessRequest(this.currentIndex).then(res => {
        this.choiceness.push(...res.data)
        this.currentIndex++
      })
    },
    getDetilInfoAction(id) {
      getDetilInfoRequest(id).then(res => {
        this.detilInfo=res.data
      })
    }
  }
})
export default useHome