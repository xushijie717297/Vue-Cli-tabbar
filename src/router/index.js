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
      redirect: '/home'
    },
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
})
