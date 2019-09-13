<template>
<el-card>
    <bread-crumb slot="header">
    <template slot="title">账户信息</template>
    </bread-crumb>
    <el-form ref="userForm" :model="userinfo" :rules="userrules" label-width="100px">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="userinfo.name" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="intro">
            <el-input v-model="userinfo.intro" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="userinfo.email"  style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="手机号" >
            <el-input v-model="userinfo.mobile" style="width:300px"  disabled></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="baocunxinxi" type="primary">保存</el-button>
        </el-form-item>

    </el-form>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      userinfo: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      },
      userrules: {
        name: [{
          required: true,
          message: '用户名不能为空'
        },
        {
          min: 2,
          max: 8,
          message: '用户名的长度必须为2到8位'
        }],
        emaile: [{
          pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
          message: '邮箱格式不正确'
        }]
      }
    }
  },
  methods: {

    getuserinfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.userinfo = result.data
      })
    },
    baocunxinxi () {
      this.$refs.userForm.validate((isOk) => {
        if (isOk) {
          this.$axios({
            url: '/user/profile',
            method: 'patch',
            data: this.userinfo

          }).then(() => {
            this.$message({ type: 'success', message: '恭喜您保存成功' })
          })
        }
      })
    }

  },
  created () {
    this.getuserinfo()
  }
}
</script>

<style>

</style>
