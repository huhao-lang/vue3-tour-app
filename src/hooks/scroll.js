import { ref, onMounted, onUnmounted } from 'vue'
import {throttle} from 'underscore'
export default function getScroll(refEl) {
  let el =window

  let scrollTop = ref(0)
  const isScrollBottom = ref(false)
  let scrollHeight =null
  let clientHeight =null
  const scrollCallback = throttle(() => {
    if (refEl) {
      scrollTop.value = el.scrollTop
      scrollHeight = el.scrollHeight
      clientHeight = el.clientHeight
      isScrollBottom.value = scrollHeight <= Math.ceil(scrollTop.value + clientHeight)
    } else {
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight = document.documentElement.scrollHeight
      clientHeight = document.documentElement.clientHeight
      isScrollBottom.value = scrollHeight <= Math.ceil(scrollTop.value + clientHeight)
    }
  },300)
  onMounted(() => {
    if (refEl) {
      el=refEl.value
    }
    el.addEventListener('scroll', scrollCallback)
  })
  onUnmounted(() => {
    if (!refEl)return
    window.removeEventListener('scroll', scrollCallback)
  })
  return {scrollTop,isScrollBottom}
}