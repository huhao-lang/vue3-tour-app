import instance from '@/servies/request/index'
export function getDetilInfoRequest(id) {
  return instance.get({
    url: `/api/detail/infos?houseId=${id}`
  })
}