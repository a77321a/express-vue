/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 17:39:32
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import detail from '@/components/Detail/detail'
import read from '@/components/Detail/read'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: detail
    },
    {
      path: '/read',
      name: 'Read',
      component: read
    },
  ]
})