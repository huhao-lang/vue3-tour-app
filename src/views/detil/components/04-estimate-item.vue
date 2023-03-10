<template>
  <div class="estimate-item">
   <span class="left-text"><slot name="left"></slot></span>
   <span class="right-text"><slot name="right"></slot><van-icon name="arrow" /></span>
  </div>
</template>

<script setup>

</script>
<style lang="less" scoped>
.estimate-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f7f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  .right-text{
    color: var(--primary-color);
    font-size: 12px;
  }
}
</style>
