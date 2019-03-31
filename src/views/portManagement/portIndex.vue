<template>
    <section class="port-index">
      <!--面包屑-->
      <div class="tab-title">
        <span><i class="glyphicon glyphicon-home"></i> 后台管理系统</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 帖子管理</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 查询帖子</span>
      </div>

      <div class="search-content input-group">
        <input class="form-control" type="text" placeholder="输入帖子名称或帖子Id">
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
            <th>奇石名称</th>
            <th>奇石类型</th>
            <th>发布时间</th>
            <th>发布者</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in portList" :key="index">
            <th scope="row">{{index+1}}</th>
            <td>{{item.portTitle}}</td>
            <td style="width: 80px;">{{item.portType}}</td>
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
      name: "portIndex",
      data(){
        return{
          portList:[
            {
              portId:34,
              portTitle:"一起来讨论从古至今，奇石的种类吧~",
              portType:"所有",
              publishTime:"2019-02-03 19:30:31",
              author:"管理员",
            },
            {
              portId:34,
              portTitle:"重庆巴南奇石文化俱乐部分享石友藏石，欢迎前来分享！~",
              portType:"巴南石",
              publishTime:"2019-01-23 9:20:31",
              author:"小土豆",
            },
            {
              portId:34,
              portTitle:"想靠卖石头赚钱，不努力再这么眼红都没用",
              portType:"所有",
              publishTime:"2019-01-10 13:10:31",
              author:"小番茄",
            },
            {
              portId:34,
              portTitle:"谈谈好看的石头应该如何拍摄的更好看?",
              portType:"所有",
              publishTime:"2019-01-09 19:30:31",
              author:"小可爱",
            },
            {
              portId:34,
              portTitle:"跟随《道德经》学玩石头，收益匪浅！",
              portType:"九龙壁",
              publishTime:"2019-01-03 19:30:31",
              author:"Hecate",
            },
          ],
        }
      },
    }
</script>

<style scoped>
  .port-index{
    font-size: 18px;
    width: 100%;
    background-color: #fff;
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
