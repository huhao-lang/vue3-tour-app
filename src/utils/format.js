import dayjs from 'dayjs'
// 获取后一天
export function formartAdd(nowTime, num = 0, fat = null) {
  return dayjs(nowTime).add(num, 'day').format(fat)
}
export function formartAddDate(nowTime, num = 0) {
  return new Date(dayjs(nowTime).add(num, 'day').format())
}
export function formartInterval(nowTime, newTime) {
  let  date = newTime.getTime() - nowTime.getTime()
  date = (parseInt(date / 1000 / 60 / 60 / 24) +"").split(" ")
  const timeFormat = ['零','一', '二', '三', '四', '五', '六', '七', '八', '九', '十',]
  let str = date.map(item => timeFormat[item]).join(" ")
  return str
}