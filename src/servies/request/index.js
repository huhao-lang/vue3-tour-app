import axios from 'axios'
import { BaseUrl } from './config.js'
import useMain from '@/stores/modules/main.js'
const useMainStore = useMain()
class hyReqest{
  constructor() {
    this.instance = axios.create({
      baseURL: BaseUrl
    })
    this.instance.interceptors.request.use(config => {
      useMainStore.isLoading=true
      return config
    }, error => {
      useMainStore.isLoading = false
    })
    this.instance.interceptors.response.use(res => {
      useMainStore.isLoading = false
      return res
    }, error => {
      useMainStore.isLoading = false
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance(config).then(res => {
        const data=res.data
        resolve(data)
      }, error => {
        reject(error)
      })
    })
  }
  get(config) {
    return this.request({ ...config,method:'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}
export default new hyReqest()