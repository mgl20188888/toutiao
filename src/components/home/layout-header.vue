<template>

<el-row type="flex" class="row-bg head" justify="space-between">
  <el-col class="left" :span="7">
      <i class='el-icon-s-unfold icon'></i>
      <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
  <el-col class="right" :span="3">
      <img class='head-img' src="../../assets/img/avatar.jpg" alt="">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        刘晓帅<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>git地址</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
      </el-col>
</el-row>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.head{

       padding: 5px 0;
    .left{
        display: flex;
        align-items: center;
    font-size: 16px;
    .icon {
        margin-right: 3px;
        font-size: 25px;
    }

    }

    .head-img{
    border-radius: 50%;
}
.right{
    display: flex;
    align-items: center;
    .head-img{
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }
}
}

</style>
