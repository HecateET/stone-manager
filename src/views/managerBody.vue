<template>
    <section class="manager-body">
      <!--个人中心左边垂直菜单-->
      <div class="manager-aside">
        <!--菜单组件-->
        <ManagerLeft></ManagerLeft>
      </div>
      <!--右边内容区域-->
      <div class="manager-content">

        <router-view/>
      </div>
    </section>
</template>

<script>
  import ManagerLeft from '@/views/managerLeft.vue'
    export default {
      name: "managerBody",
      components:{
        ManagerLeft,
      },
      data(){
        return{
          Height:$(window).height(),
        }
      },
      created() {

      },
      mounted() {
        $(".manager-body").css("min-height",this.Height-$("#Header").height())
        // console.log(this.Height);
        // $("manager-aside").css("top",$("#Header").height());
      }
    }
</script>

<style scoped>
  .manager-body{
    width: 100%;
    min-height: 800px;
    display: -webkit-box;
    background-color: aqua;
  }
  .manager-aside{
    top: 0;
    left: 0;
    width: 200px;
    min-height: 800px;
    border-right: 1px solid #ccc;
    background-color: aquamarine;
  }
  .manager-content{
    -webkit-box-flex: 1;
  }
</style>
