<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="全部素材" name="all">
      <div class="item">
        <el-card  class="image-list" v-for="item in list" :key="item.id">
          <img @click="getbyid(item)" :src=" item.url" alt />
        </el-card>
      </div>
      <el-row type="flex" justify="center">
        <el-pagination
          @current-change="huanye"
          :current-page="page.page"
          :page-size="page.pageSize"
          background
          layout="prev, pager, next"
          :total="page.total"
        ></el-pagination>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="上传图片" name="upload"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName: '',
      list: [],
      page: {
        page: 1,
        pageSize: 8,
        total: 0
      }
    }
  },
  methods: {
    getbyid (item) {
      this.$emit('onselectImg', item.url)
    },
    huanye (newPage) {
      this.page.page = newPage
      this.getsucai()
    },
    getsucai () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: false,
          page: this.page.page,
          per_page: this.page.pageSize
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getsucai()
  }
}
</script>

<style lang="less" scoped>
.item {
  display: flex;

  flex-wrap: wrap;
  .image-list {
    width: 130px;
    height: 130px;
    margin: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
