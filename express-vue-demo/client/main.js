/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-20 15:41:13
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import xsn from 'xsn-ui'
import 'xsn-ui/packages/css/style.css'
import errHandle from './utils/errorUpload'
Vue.use(xsn)
Vue.config.productionTip = false
errHandle()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})