import instance from '@/servies/request/index'
export function getTablistRequest(){
    return instance.get({
      url: '/api/city/all'
    })
  }