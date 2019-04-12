const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')



 

const app = express()
// 配置express
app.use(bodyParser.json());
app.use(cors({
  origin:'*',
  methods:['get','post'],
}))
// var allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
//   next();
//  };
// app.use(allowCrossDomain)
app.use(bodyParser.urlencoded({
  extended: false
}));

// 导入路由
let homeRouter = require('./index')
app.use('/',homeRouter)


app.listen(4000)