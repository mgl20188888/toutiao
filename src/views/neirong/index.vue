<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-form style="margin-left:40px">
      <el-form-item label="文章状态">
        <el-radio-group @change="changeCondition" v-model="searchForm.status">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核未通过</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select @change="changeCondition" v-model="searchForm.channel_id">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期选择:">
        <el-date-picker
          @change="changeCondition"
          value-format="yyyy-MM-dd"
          v-model="searchForm.dateRange"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="total">符合条件的有{{page.total}}条信息</div>
    <div class="art-left">
      <div class="left1" v-for="(item,index) in list" :key="index">
        <div class="left">
          <img :src="item.cover.images.length ? item.cover.images[0]:defaultImg" alt />
          <div class="left2">
            <span class="nei">{{item.title}}</span>
            <el-tag v-bind:type="item.status | statusType " style="width:60px">{{item.status | statusText}}</el-tag>
            <span class="riqi">{{item.pubdate}}</span>
          </div>
        </div>
        <div class="right">
          <span @click="xiugai(item)">
            <i class="el-icon-edit">修改</i>
          </span>
          <span @click="delItem(item)">
            <i class="el-icon-delete">删除</i>
          </span>
        </div>
      </div>
    </div>
    <el-row type="flex" justify="center" style="margin-top:20px">
      <el-pagination
        @current-change="pageChange"
        :current-page="page.page"
        :page-size="page.pageSize"
        :total="page.total"
        background
        layout="prev, pager, next"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      defaultImg: require('../../assets/img/avatar.jpg'),
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      channels: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    xiugai (item) {
      this.$router.push(`/home/publish/${item.id.toString()}`)
    },
    delItem (item) {
      this.$confirm('您真的要删除此文章吗?', '提示').then(() => {
        this.$axios({
          method: 'delete',
          url: `/articles/${item.id.toString()}`

        }).then(() => {
          this.getConditionArtical()
        })
      })
    },
    pageChange (newPage) {
      this.page.page = newPage
      this.getConditionArtical()
    },

    changeCondition () {
      this.page.page = 1
      this.getConditionArtical()
    },

    getConditionArtical () {
      let params = {
        status: this.searchForm.status === 5 ? null : this.searchForm.status,
        channel_id: this.searchForm.channel_id,
        begin_pubdate: this.searchForm.dateRange.length > 0 ? this.searchForm.dateRange[0] : null,
        end_pubdate: this.searchForm.dateRange.length > 1 ? this.searchForm.dateRange[1] : null,
        page: this.page.page,
        per_page: this.page.pageSize
      }
      this.getArticle(params)
    },

    getArticle (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    },
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }

  },
  created () {
    this.getArticle()
    this.getChannels()
  },
  filters: {
    statusText (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核未通过'
        default:
          break
      }
    },
    statusType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return 'success'
        case 3:
          return 'danger'
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.total {
  color: #333;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
}
.art-left {
  .left1 {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
    .left {
      display: flex;
      justify-content: space-between;
      img {
        width: 180px;
        height: 100px;
        border-radius: 4px;
      }
      .left2 {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .nei {
          font-size: 14px;
          color: #333;
        }
        .riqi {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .right {
    font-size: 12px;
    span {
      margin-right: 5px;
      cursor: pointer;
    }
  }
}
</style>
