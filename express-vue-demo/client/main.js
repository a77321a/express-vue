/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 18:00:24
 */
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import List from './common/component/List.vue'
Vue.component('List', List)

import * as http from './utils/axios'
Vue.prototype.$http = http

// import errHandle from './utils/errorUpload'
Vue.config.productionTip = false
// errHandle()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})