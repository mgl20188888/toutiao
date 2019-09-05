<template>
<div>
   <el-container>
  <el-aside style="width:200px; background: #353b4e;" >
      <layout-aside></layout-aside>
  </el-aside>
  <el-container>
    <el-header>
    <layout-header></layout-header>
    </el-header>
    <el-main style="padding:0">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

</div>

</template>

<script>
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  // components: {
  //   'layout-aside': layoutAside,
  //   'layout-header': layoutHeader
  // }
}
</script>

<style lang="less" scoped>

</style>
