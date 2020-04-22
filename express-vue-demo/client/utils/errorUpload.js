/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-04-20 15:37:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-20 15:41:49
 */

import Vue from 'vue'
import * as api from './axios'
const errHandle = () => {
  Vue.config.errorHandler = (err, vm, info) => {
    console.log('errorHandle:', err)
    const str = window.btoa(JSON.stringify(info))
    // console.log('errorHandle11:', str)
    // new Image().src = `http://localhost:4000/error/?info=${str}`

    api.get('/error', err).then((res) => [
      console.log(res)
    ])
  }
}
export default errHandle