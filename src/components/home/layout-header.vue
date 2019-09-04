<template>

<el-row type="flex" class="row-bg head" justify="space-between">
  <el-col class="left" :span="7">
      <i class='el-icon-s-unfold icon'></i>
      <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
  <el-col class="right" :span="3">
      <img class='head-img' :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
      <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="account">个人信息</el-dropdown-item>
        <el-dropdown-item command="git">git地址</el-dropdown-item>
        <el-dropdown-item command="c">退出</el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
      </el-col>
</el-row>

</template>

<script>

export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'account') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com'
      } else {
        window.localStorage.clear()
        this.$router.push('./login')
      }
    },
    getUserInfo () {
      // let token = window.localStorage.getItem('user-token')
      this.$axios({
        url: '/user/profile'
        // headers: { 'Authorization': `Bearer ${token}` }
      }).then(result => {
        this.userInfo = result.data.data
      })
    }
  },
  created () {
    this.getUserInfo()
  }

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
