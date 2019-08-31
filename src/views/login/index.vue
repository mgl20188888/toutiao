<template>
  <div class="login">
<el-card class="box-card">
    <div><img src="../../assets/img/logo_index.png" alt=""></div>
    <el-form ref="form" :model="form">
  <el-form-item>
    <el-input placeholder="请输入手机号码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input style='width:260px' class="input" placeholder="请输入验证码"></el-input>
    <el-button style='float:right'>发送验证码</el-button>
  </el-form-item>
  <el-form-item>
     <el-checkbox class="check">我已阅读并同意用户协议和隐私条款</el-checkbox>
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
    .check{
        float: left;
    }
    .btn{
        width: 100%;
    }
}
</style>
