/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-18 16:32:13
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import xsn from 'xsn-ui'
import 'xsn-ui/packages/css/style.css'
Vue.use(xsn)
Vue.config.productionTip = false
Vue.config.errorHandler = (err, vm, info) => {
  console.log('errorHandle:', err)
  const str = window.btoa(JSON.stringify(info))
  console.log('errorHandle11:', str)

  new Image().src = `http://localhost:4000/error/?info=${str}`
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})