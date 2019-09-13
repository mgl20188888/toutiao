<template>
  <div class="cover">
    <div @click="showtan(index)" class="item" v-for="(item,index) in images" :key="index">
      <img :src="item ? item : defaultImg" alt />
    </div>
    <el-dialog @close="daivisible=false" :visible="daivisible">
      <select-image @onselectImg="recive"></select-image>

    </el-dialog>
  </div>
</template>

<script>

export default {
  props: ['images'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      daivisible: false,
      selectIndex: -1
    }
  },
  methods: {
    recive (url) {
      this.$emit('onselect', url, this.selectIndex)
      this.daivisible = false
    },
    showtan (index) {
      this.selectIndex = index
      this.daivisible = true
    }
  }

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
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
