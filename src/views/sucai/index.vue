<template>
  <el-card class="tupian">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click="tabChange">
      <el-tab-pane label="全部图片" name="all">
        <div class="tu">
          <el-card class="imgcard" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row class="icon" type="flex" justify="space-around">
              <i :style="{color:item.is_collected ? 'red':''}" class="el-icon-star-on"></i>
              <i @click="delImg(item)" class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="changePage"
            :current-page="page.page"
            :page-size="page.pageSize"
            :total="page.total"
            background
            layout="prev,pager,next"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <div class="tu">
          <el-card class="imgcard" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="changePage"
            :current-page="page.page"
            :page-size="page.pageSize"
            :total="page.total"
            background
            layout="prev,pager,next"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 8,
        total: 0
      }
    }
  },
  methods: {
    delImg (item) {
      this.$confirm('您确定要删除此图片吗?', '提示').then(() => {
        this.$axios({
          url: `/user/images/${item.id}`,
          method: 'delete'
        }).then(() => {
          this.getTupian()
        })
      })
    },
    changePage (newPage) {
      this.page.page = newPage
      this.getTupian()
    },
    tabChange () {
      // alert(this.activeName)
      this.page.page = 1
      this.getTupian()
    },
    getTupian () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.page,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect'
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getTupian()
  }
}
</script>

<style lang="less" scoped>
.tupian {
  .tu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .imgcard {
      width: 180px;
      height: 180px;
      margin: 30px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }
      .icon {
        background: #ccc;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 30px;
        align-items: center;
        font-size: 20px;
      }
    }
  }
}
</style>
