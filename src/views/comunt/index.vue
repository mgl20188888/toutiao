<template>
  <el-card>
    <bread-crumb slot="header">
    <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="600">
      </el-table-column>
      <el-table-column
      :formatter='formatter'
        prop="comment_status"
        label="评论状态">
      </el-table-column>
      <el-table-column
        prop='total_comment_count'
        label="评论总数">
      </el-table-column>
      <el-table-column
        prop="fans_comment_count"
        label="粉丝评论数">
      </el-table-column>
      <el-table-column
      width="200"
        prop="caozuo"
        label="操作">
        <template slot-scope="o">
        <el-button size="mini" type="text">修改评论</el-button>
        <el-button :style='{color:o.row.comment_status ?  "#E6A23C":"#409EFF"}' size="mini" type="text">{{o.row.comment_status ? '关闭评论':'打开评论'}}</el-button>
        </template>
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
  },
  methods: {
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComents () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        console.log(result)
        this.list = result.data.results
      })
    }
  },
  created () {
    this.getComents()
  }

}
</script>

<style>

</style>
