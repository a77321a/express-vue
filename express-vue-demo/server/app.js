/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: 
 * @LastEditTime: 2020-04-18 16:31:39
 */
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')



//  洒水大所多

const app = express()
// 配置express
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['get', 'post'],
}))
// var allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
//   next();
//  };
// app.use(allowCrossDomain)
app.use(bodyParser.urlencoded({
  extended: false
}));

// 导入路由awdwd
let homeRouter = require('./index')
app.use('/error', homeRouter)


app.listen(4000)