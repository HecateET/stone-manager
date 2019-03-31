<template>
    <section class="stone-comment">
      <!--面包屑-->
      <div class="tab-title">
        <span><i class="glyphicon glyphicon-home"></i> 后台管理系统</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 评论管理</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 奇石评论</span>
      </div>

      <div class="search-content input-group">
        <input class="form-control" type="text" placeholder="输入用户名或奇石id">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">搜索</button>
        </span>
      </div>
      <!--奇石-->
      <div class="port-table table-responsive">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>#</th>
            <th>被评论奇石名称</th>
            <th>奇石类型</th>
            <th>发布时间</th>
            <th>评论</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in stoneComment" :key="index">
            <th scope="row">{{index+1}}</th>
            <td>{{item.portTitle}}</td>
            <td>{{item.portType}}</td>
            <td>{{item.publishTime}}</td>
            <td>{{item.author}}</td>
            <td style="width: 200px;">
              <!--<button class="btn btn-info">修改</button>-->
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
      name: "stoneComment",
      data(){
        return{
          stoneComment:[
            {
              portId:34,
              portTitle:"百年奇遇，老挝田黄",
              portType:"田黄",
              publishTime:"2019-02-03 19:30:31",
              author:"Hecate",
            },
            {
              portId:34,
              portTitle:"好石头总会发光，不管放在哪里！",
              portType:"九龙壁",
              publishTime:"2019-02-02 19:30:31",
              author:"Andy",
            },
            {
              portId:34,
              portTitle:"赏玩勿牵强附会",
              portType:"九龙壁",
              publishTime:"2019-01-03 19:30:31",
              author:"管理员",
            },
            {
              portId:34,
              portTitle:"奇石的渊源",
              portType:"九龙壁",
              publishTime:"2019-01-02 19:30:31",
              author:"小可爱",
            },
            {
              portId:34,
              portTitle:"元旦新的一年你会遇到什么样的奇石",
              portType:"所有",
              publishTime:"2019-01-01 19:30:31",
              author:"小番茄",
            },
          ],
        }
      },
    }
</script>

<style scoped>
  .stone-comment{
    font-size: 18px;
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
    font-size: 18px;
    /*padding: 0 3px;*/
  }

  .port-table{
    margin: 10px;
    text-align: center;
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
