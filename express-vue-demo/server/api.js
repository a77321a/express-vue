/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 16:41:19
 */
const express = require('express')
const router = express.Router()
const getReadText = require('./spider/spiderReadText')

router.get('/readtext', (req, res, next) => {
    var params = ''
    // let text = ''
    text = getReadText(params, res)
})

module.exports = router