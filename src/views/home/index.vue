<template>
  <div>
 <el-container>
  <el-aside width="200px">
    <aside-a>
      <layout-aside></layout-aside>
    </aside-a>
  </el-aside>
  <el-container>
    <el-header>
    <layout-header></layout-header>
    </el-header>
    <el-main>整体</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    // 'layout-aside': layoutAside,
    // 'layout-header': layoutHeader
  }
}
</script>

<style lang="less" scoped>

</style>
