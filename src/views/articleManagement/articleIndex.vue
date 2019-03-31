<template>
    <section class="article-index">
      <!--面包屑-->
      <div class="tab-title">
        <span><i class="glyphicon glyphicon-home"></i> 后台管理系统</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 文章管理</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 文章内容管理</span>
      </div>
      <div class="search-content input-group">
        <input class="form-control" type="text" placeholder="输入文章名称或文章Id">
        <span class="input-group-btn">
        <button class="btn btn-default" type="button">搜索</button>
      </span>
      </div>
      <!--文章-->
      <div class="article-table table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>文章名称</th>
              <th>文章类型</th>
              <th>发布时间</th>
              <th>发布者</th>
              <th>操作</th>
            </tr>
            </thead>
          <tbody>
            <tr v-for="(item,index) in articleList" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{item.articleTitle}}</td>
              <td>{{item.articleType}}</td>
              <td>{{item.publishTime}}</td>
              <td>{{item.author}}</td>
              <td style="width: 200px">
                <button class="btn btn-info">修改</button>
                <button class="btn btn-success">预览</button>
                <button class="btn btn-danger">删除</button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>

      <!--分页-->
      <nav aria-label="...">
        <ul class="pagination">
          <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
          <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
        </ul>
      </nav>

    </section>
</template>

<script>
    export default {
      name: "articleIndex",
      data(){
        return{
          articleList:[
            {
              articleId:1,
              articleTitle:"奇石的渊源",
              articleType:"九龙壁",
              publishTime:"2019-01-03 19:30:31",
              author:"Hecate",
            },
            {
              articleId:1,
              articleTitle:"百年奇遇，老挝田黄",
              articleType:"寿山石",
              publishTime:"2019-01-03 19:30:31",
              author:"小番茄",
            },
            {
              articleId:2,
              articleTitle:"好石头总会发光，不管放在哪里！",
              articleType:"九龙壁",
              publishTime:"2019-01-03 19:30:31",
              author:"Judy",
            },
            {
              articleId:34,
              articleTitle:"古人和今人都赏石，二者有哪些区别？",
              articleType:"和田玉",
              publishTime:"2019-01-03 19:30:31",
              author:"管理员",
            },
          ]
        }
      },

    }
</script>

<style scoped>
  .article-index{
    font-size: 18px;
    background-color: #fff;
    padding: 10px;
  }
  .article-table{
    margin: 10px;
    text-align: center;
    vertical-align: middle;
    background-color: #fff;
  }
  table th,td{
    text-align: center;
    vertical-align: middle;
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
    font-size: 18px;
    /*padding: 0 3px;*/
  }
  .search-content{
    width: 30%;
    margin-left: 68%;
    /*text-align: right;*/
  }
</style>
