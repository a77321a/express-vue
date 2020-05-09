/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-09 11:26:58
 */
const express = require('express')
const router = express.Router()
const getBookList = require('./spider/spiderBookList')
const db = require('../datebase/index')

router.get('/', (req, res, next) => {
    let book_list = []
    book_list = getBookList(res, db)
})

module.exports = router