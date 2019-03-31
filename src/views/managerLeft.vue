<template>
  <!--右边tab栏-->
    <section class="manager-left">
      <aside>
        <ul class="aside-menu">
          <li v-for="(item,index) in menuList" :key="index">
            <div class="one-menu" @click="showToggle(item,index)">
              <!--<img :src="item.imgUrl">-->
              <span :class="setClass(index)" class="menu-icon"></span>
              <span class="menu-title">{{item.name}}</span>
              <span class="down-icon">
                <span v-show="item.downIcon" class="glyphicon glyphicon-chevron-down"></span>
                <span v-show="!item.downIcon" class="glyphicon glyphicon-chevron-up"></span>
              </span>
            </div>
            <ul v-show="item.isSubShow">
              <li class="one-menu-child" v-for="(subItems,i) in item.subItems" @click="goto(subItems.routerLink,index,i)" :key="i" :class="i.click==true ? 'one-menu-child-checked':'one-menu-child'">
                <!--<router-link tag="li" active-class="active" role="presentation" :to="subItems.routerLink"><a class="text-color">{{subItems.name}}</a></router-link>-->
                <a class="text-color">{{subItems.name}}</a>
                <!--<div class="one-menu-child" @click="">{{subItems.name}}</div>-->
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </section>
</template>

<script>
    export default {
      name: "managerLeft",
      data(){
        return{
          menuList:[
            {
              name:'用户管理',
              icon:"glyphicon glyphicon-user",
              downIcon:true,
              imgUrl:"",
              isSubShow:false,
              subItems:[
                {
                  name:"用户资料",
                  routerLink:"/",
                },
                {
                  name:"锁定用户",
                  routerLink:"/userLocking",
                }
              ],
            },
            {
              name:'评论管理',
              icon:"glyphicon glyphicon-comment",
              downIcon:true,
              imgUrl:"",
              isSubShow:false,
              subItems:[
                {
                  click:false,
                  name:"文章评论",
                  routerLink:"/articleComment",
                },
                {
                  click:false,
                  name:"奇石评论",
                  routerLink:"/stoneComment",
                },
                {
                  click:false,
                  name:"帖子评论",
                  routerLink:"/portComment",
                }
              ],
            },
            {
              name:'帖子管理',
              icon:"glyphicon glyphicon-tags",
              downIcon:true,
              imgUrl:"",
              isSubShow:false,
              subItems:[
                {
                  click:false,
                  name:"查询帖子",
                  routerLink:"/portIndex",
                },
                {
                  click:false,
                  name:"发布帖子",
                  routerLink:"/publishPort",
                },
              ],
            },
            {
              name:'文章管理',
              icon:"glyphicon glyphicon-edit",
              downIcon:true,
              imgUrl:"",
              isSubShow:false,
              subItems:[
                {
                  click:false,
                  name:"编辑文章",
                  routerLink:"/publishArticle",
                },
                {
                  click:false,
                  name:"内容管理",
                  routerLink:"/articleIndex",
                }
              ],
            },
            {
              name:'奇石管理',
              icon:"glyphicon glyphicon-heart-empty",
              downIcon:true,
              imgUrl:"",
              isSubShow:false,
              subItems:[
                {
                  click:false,
                  name:"查询奇石",
                  routerLink:"/stoneIndex",
                },
                {
                  click:false,
                  name:"发布奇石",
                  routerLink:"/publishStone",
                },
              ],
            },


          ],

        }
      },
      methods:{
        //点击展开折叠菜单事件
        showToggle(item,index){
          this.menuList.forEach(i=>{
          // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
            if(i.isSubShow !== this.menuList[index].isSubShow){
              i.isSubShow = false;
            }
            if(i.downIcon !== this.menuList[index].downIcon){
              i.downIcon = true;
            }
          });
          item.isSubShow = !item.isSubShow;
          item.downIcon = !item.downIcon;
        },
        setClass(index){
          return this.menuList[index].icon;
        },
        goto(link,key,index){
          this.menuList[key].subItems[index].click = true;

          console.log(this.menuList[key].subItems);
          this.$router.push({path:link});
        }
      }

    }
</script>

<style scoped>
  .manager-left{
    width: 100%;
    height: 100%;
  }
  aside{
    background-color: #f1f1f1;
    height: 100%;
  }
  .aside-menu .one-menu{
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: normal;
    padding: 0 10px;
    color: #fff;
    background: #666 url("../assets/images/leftAside/icon_arrow_right@2x.png") no-repeat 280px center;
    border-bottom: 1px solid #eee;
  }
  .one-menu .down-icon{
    font-size: 15px;
    color: #eee;
  }
  /*.oneMenu img{*/
    /*width: 20px;*/
    /*height: 20px;*/
    /*margin: 15px 16px 15px 20px;*/
    /*vertical-align: top;*/
  /*}*/
  .one-menu .menu-title{
    margin-right: 40px;
  }
  .one-menu-child{
    padding: 0 20px 0 60px;
    height: 40px;
    line-height: 40px;
    background: #f1f1f1;
    border-bottom: 1px solid #fff;
    color: #454343;
    font-size: 20px;
  }
  .one-menu-child:hover{
    cursor: pointer;
  }
  .one-menu-child-checked{
    background-color: rgba(0,0,0,0.4);
  }
  .one-menu-child-checked .text-color{
    background-color: rgba(0,0,0,0.4);
    color: #fff;
  }
  .menu-icon{
    margin-right: 10px;
  }
  .text-color{
    font-size: 18px;
    text-decoration: none;
    color: #555;
  }
</style>
