<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <el-form style="margin-left:40px">
      <el-form-item label="文章状态">
        <el-radio-group>
          <el-radio>全部</el-radio>
          <el-radio>草稿</el-radio>
          <el-radio>待审核</el-radio>
          <el-radio>审核通过</el-radio>
          <el-radio>审核未通过</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="日期选择">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="total">符合条件的有1489条信息</div>
    <div class="art-left">
      <div class="left1" v-for="(item,index) in list" :key="index">
        <div class="left">
          <img src="../../assets/img/404.png" alt />
          <div class="left2">
            <span class="nei">有内鬼,交易取消</span>
            <el-tag style="width:60px">已发布</el-tag>
            <span class="riqi">2019-09-07 19:37:29</span>
          </div>
        </div>
        <div class="right">
          <span>
            <i class="el-icon-edit">修改</i>
          </span>
          <span>
            <i class="el-icon-delete">删除</i>
          </span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<style lang="less" scoped>
.total{
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
      .left2{
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .nei{
          font-size: 14px;
          color: #333;
        }
        .riqi{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .right{
    font-size: 12px;
    span{
      margin-right: 5px;
      cursor: pointer;
    }
  }
}
</style>
