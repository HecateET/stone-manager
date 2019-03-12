<template>
    <section class="port-comment">
      <!--面包屑-->
      <div class="tab-title">
        <span><i class="glyphicon glyphicon-home"></i> 后台管理系统</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 评论管理</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 帖子评论</span>
      </div>
    </section>
</template>

<script>
    export default {
        name: "portComment"
    }
</script>

<style scoped>
.port-comment{
  background-color: #fff;
  padding: 10px;
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
