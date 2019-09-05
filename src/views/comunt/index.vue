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
        <el-button @click="openOrclose(o.row)" :style='{color:o.row.comment_status ?  "#E6A23C":"#409EFF"}' size="mini" type="text">{{o.row.comment_status ? '关闭评论':'打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
        <el-row type="flex" justify="center" style='margin:10px 0'>
      <el-pagination @current-change="changePage" :current-page="page.page" :page-size="page.pageSize" :total="page.total" layout="prev, pager, next"></el-pagination>
    </el-row>

  </el-card>
</template>

<script>
export default {

  data () {
    return {
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }

    }
  },
  methods: {
    changePage (newPage) {
      this.page.page = newPage
      this.getComents()
    },
    openOrclose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否${mess}评论?`, '提示').then(() => {
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(result => {
          this.getComents()
        })
      })
    },
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComents () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.page, per_page: this.page.pageSize }
      }).then(result => {
        console.log(result)
        this.list = result.data.results
        this.page.total = result.data.total_count
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
