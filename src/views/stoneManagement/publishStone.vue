<template>
    <section class="publish-stone">
      <!--面包屑-->
      <div class="tab-title">
        <span><i class="glyphicon glyphicon-home"></i> 后台管理系统</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 奇石管理</span>
        <span><i class="glyphicon glyphicon-menu-right"></i> 发布奇石</span>
      </div>
      <div class="form-box">
        <!--<form class="">-->
          <!--<div class="form-group row">-->
            <!--<label class="col-sm-2" for="stone-title">奇石标题</label>-->
            <!--<input type="text" class="col-sm-10 form-control" id="stone-title" placeholder="请输入奇石标题">-->
          <!--</div>-->
        <!--</form>-->
        <form class="form-horizontal">
          <div class="form-group">
            <label for="stone-title" class="col-sm-2 control-label">奇石标题</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="stone-title" placeholder="请输入奇石头标题">
            </div>
          </div>
          <div class="form-group">
            <label for="publish-time" class="col-sm-2 control-label">发布时间</label>
            <div class="col-sm-4">
              <input type="date" class="form-control" id="publish-time">
            </div>
            <div class="col-sm-4">
              <input type="time" class="form-control">
            </div>
          </div>

          <div class="form-group">
            <label for="select" class="col-sm-2 control-label">奇石种类</label>
            <div class="col-sm-10">
              <select id="select" class="form-control" >
                <option>寿山石</option>
                <option>九龙壁</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <!--富文本编辑器-->
      <div ref="editor" style="margin: 10px 0; width: 1000px; text-align:left; background-color: #fff;"></div>

      <div class="btn-content">
        <button class="btn btn-info publish-btn">发布</button>
        <button class="btn btn-danger cancel-btn">取消</button>
      </div>
    </section>
</template>

<script>
  import E from 'wangeditor';
    export default {
      name: "publishStone",
      data(){
        return{
          editorContent:'',
        }
      },
      created(){

      },
      mounted(){
        this.createEdioter();
      },
      methods:{
        createEdioter(){
          var editor = new E(this.$refs.editor);
          editor.customConfig.onchange = (html)=>{
            this.editorContent = html;
          };
          editor.customConfig.colors = [
            '#000000',
            '#eeece0',
            '#1c487f',
            '#4d80bf',
            '#c24f4a',
            '#8baa4a',
            '#7b5ba1',
            '#46acc8',
            '#f9963b',
            '#ffffff',
            '#DB70DB',
            '#cc1d18'
          ];
          // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
          editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'table',  // 表格
            'undo',  // 撤销
            'redo'  // 重复
          ];
          //配置服务器端地址
          //editor.customConfig.uploadImgServer = 'http://localhost:3000/activityEdit';
          editor.create();
        },
      }

    }
</script>

<style scoped>
  .publish-stone{
    padding: 10px 20px;
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
  .form-box{
    width: 800px;
    padding: 10px;
  }
</style>
