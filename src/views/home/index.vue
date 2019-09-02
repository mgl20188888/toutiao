<template>
  <div>
 <el-container>
  <el-aside width="200px">
    <aside-a>
      <layout-aside></layout-aside>
    </aside-a>
  </el-aside>
  <el-container>
    <el-header>头部</el-header>
    <el-main>整体</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style lang="less" scoped>

</style>
