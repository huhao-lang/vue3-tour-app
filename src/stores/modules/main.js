import { defineStore } from 'pinia'
import { formartAddDate } from '@/utils/format'
const useMain = defineStore('main',{
  state: () => {
    return {
      startTime:formartAddDate(new Date()),
      endTime: formartAddDate(new Date(), 1),
      // loading组件显示状态
      isLoading:false
    }
  }
})
export default useMain