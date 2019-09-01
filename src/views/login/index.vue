<template>
  <div class="login">
<el-card class="box-card">
    <div><img src="../../assets/img/logo_index.png" alt=""></div>
<el-form ref="form" :model="loginForm" :rules="loginRules" :status-icon="true">
  <el-form-item prop="mobile">
    <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
  </el-form-item>
  <el-form-item prop="code">
    <el-input v-model="loginForm.code" style='width:260px' class="input" placeholder="请输入验证码"></el-input>
    <el-button style='float:right'>发送验证码</el-button>
  </el-form-item>
  <el-form-item prop="check">
     <el-checkbox v-model="loginForm.check" class="checke">我已阅读并同意用户协议和隐私条款</el-checkbox>
  </el-form-item>
   <el-form-item>
<el-button type="primary" class="btn">确定</el-button>
  </el-form-item>
</el-form>
</el-card>

 </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('您必须选择同意条款才能继续'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      loginRules: { mobile: [{
        required: true,
        message: '手机号不能为空'
      }, {
        pattern: /^1[3456789]\d{9}$/,
        message: '请输入正确的手机号码'
      }],
      code: [{
        required: true,
        message: '验证码不能为空'
      }, {
        pattern: /^\d{6}$/,
        message: '请输入正确的验证码'
      }],
      check: [{
        validator
      }]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height:100vh;
    background:url(../../assets/img/login_bg.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
        align-items: center;
    .box-card{
        width: 430px;
        height: 360px;
        text-align: center;
        img{
            height: 45px;
            margin-bottom: 40px;
        }

    }
    .input{
        float: left;
    }
    .checke{
        float: left;
    }
    .btn{
        width: 100%;
    }
}
</style>
