<template>
  <div class="cover">
    <div class="item" v-for="(item,index) in images" :key="index">
      <img src="../../assets/img/pic_bg.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: ['images']
}
</script>

<style lang="less" scoped>
.cover {
  display: flex;

  .item {
    border: 1px solid #ccc;
    border-collapse: collapse;
    padding: 10px;
    width: 200px;
    height: 200px;
    img{
      width:100%;
      height: 100%;
    }
  }
}
</style>
