<template>
    <section class="login">
      <div class="manager-login">
        <p class="title">登录</p>
        <div class="form-group row">
          <label for="username" class="col-sm-3 control-label">账号；</label>
          <div class="col-md-9">
            <input id="username" class="form-control" type="text" placeholder="请输入账号">
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-md-3 control-label">密码：</label>
          <div class="col-md-9">
            <input id="password" class="form-control" type="text" placeholder="请输入密码">
          </div>
        </div>
        <div class="login-btn">
          <p>登录</p>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  .login{
    margin-top: 20px;
    /*min-height: 900px;*/
    /*background-color: blanchedalmond;*/
  }
  .manager-login{
    margin: 0 auto;
    padding: 30px 45px;
    width: 350px;
    /*height: 300px;*/
    border-radius: 10px;
    border: 1px solid #333;
  }
  .manager-login .title{
    font-size: 25px;
    color: #333;
    font-weight: bold;
    text-align: center;
    /*padding: 10px 0;*/
    padding-bottom: 20px;
  }
  .login-btn{
    margin: 0 auto;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #333;
    background: #342452;
    color: #fff;
    border-radius: 5px;
    font-size: 14px;
  }
</style>
