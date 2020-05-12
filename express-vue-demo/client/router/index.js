/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: 
 * @LastEditTime: 2020-05-12 16:30:04
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import detail from '@/components/Detail/detail'

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
  ]
})