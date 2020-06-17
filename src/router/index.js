import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//404
import error from '@/views/404/error'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/error',
      name:'error',
      component:error
    },
    {
      path:'/',
      name:'menu',
      redirect: "/home",
      component: resolve => require(['@/views/menu/menu'],resolve),
      children:[
        {
          path:'/home',
          name:'home',
          component: home
        },
        {
          path:'/category',
          name:'category',
          component: resolve => require(['@/views/category/category'],resolve),
        },
        {
          path:'/profile',
          name:'profile',
          component: resolve => require(['@/views/profile/profile'],resolve),
        },
        {
          path:'/shopcart',
          name:'shopcart',
          component: resolve => require(['@/views/shopcart/shopcart'],resolve),
        },
      ]
    },
    {//测试路由传参
      path:'/luyou',
      name:'luyou',
      component: resolve => require(['@/views/home/luyou'],resolve),
    },   
    {
      path:'/warn',
      name:'warn',
      component: resolve => require(['@/views/warn/warn'],resolve),
    },
  ]
})
