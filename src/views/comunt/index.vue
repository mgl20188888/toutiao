<template>
  <el-card>
    <bread-crumb slot="header">
    <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="标题"
        width="600">
      </el-table-column>
      <el-table-column
        prop="zhuangt"
        label="评论状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="zong"
        label="评论总数">
      </el-table-column>
      <el-table-column
        prop="fensping"
        label="粉丝评论数">
      </el-table-column>
      <el-table-column
        prop="caozuo"
        label="操作">
      </el-table-column>
    </el-table>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }

}
</script>

<style>

</style>
