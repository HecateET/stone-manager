import Vue from 'vue'
import Router from 'vue-router'
import managerBody from '@/views/managerBody'
import userInfo from '@/views/userManagement/userinfo'
import userLocking from '@/views/userManagement/userLocking'
import articleComment from '@/views/commentManagement/articleComment'
import stoneComment from '@/views/commentManagement/stoneComment'
import portComment from '@/views/commentManagement/portComment'
import portIndex from '@/views/portManagement/portIndex'
import publishPort from '@/views/portManagement/publishPort'
import articleIndex from '@/views/articleManagement/articleIndex'
import publishArticle from '@/views/articleManagement/publishArticle'
import stoneIndex from '@/views/stoneManagement/stoneIndex'
import publishStone from '@/views/stoneManagement/publishStone'
import login from '@/views/login/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'managerBody',
      component: managerBody,
      children:[
        //用户管理
        {
          path:'',
          name:'userInfo',
          component: userInfo
        },
        {
          path:'/userLocking',
          name:'userLocking',
          component: userLocking
        },
        //评论管理
        {
          path:'/articleComment',
          name:'articleComment',
          component: articleComment
        },
        {
          path:'/stoneComment',
          name:'stoneComment',
          component: stoneComment
        },
        {
          path:'/portComment',
          name:'portComment',
          component: portComment
        },
        //贴子管理
        {
          path:'/portIndex',
          name:'portIndex',
          component: portIndex
        },
        {
          path:'/publishPort',
          name:'publishPort',
          component: publishPort
        },
        //文章管理
        {
          path:'/articleIndex',
          name:'articleIndex',
          component: articleIndex
        },
        {
          path:'/publishArticle',
          name:'publishArticle',
          component: publishArticle
        },
        // //奇石管理
        {
          path:'/stoneIndex',
          name:'stoneIndex',
          component: stoneIndex
        },
        {
          path:'/publishStone',
          name:'publishStone',
          component: publishStone
        },
      ],
    },
    {
      path:'/login',
      name:'login',
      component:login,
    }
  ]
})
