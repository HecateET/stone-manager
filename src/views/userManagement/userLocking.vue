<template>
  <!--锁定用户-->
    <section class="user-locking">
      <!--面包屑-->
      <div class="tab-title">
        <span><i class="glyphicon glyphicon-home"></i> 后台管理系统</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 用户管理</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 锁定用户</span>
      </div>
    </section>
</template>

<script>
    export default {
        name: "userLocking"
    }
</script>

<style scoped>
  .user-locking{
    width: 100%;
    padding: 10px;
    background-color: #fff;
  }
  .tab-title{
    padding-left: 10px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }
  .tab-title span{
    color: #333;
    font-size: 14px;
    /*padding: 0 3px;*/
  }
</style>
