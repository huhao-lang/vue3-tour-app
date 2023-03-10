import instance from '@/servies/request/index'
export function getHomeHotRequest() {
  return instance.get({
    url: "/api/home/hotSuggests"
  })
}
export function getHomeTypeRequest() {
  return instance.get({
    url: "/api/home/categories"
  })
}
export function getHomeChoicenessRequest(currentPage) {
  return instance.get({
    url: "/api/home/houselist",
    params:{page:currentPage}
  },)
}