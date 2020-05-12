/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 16:41:19
 */
const express = require('express')
const router = express.Router()
const getBookList = require('./spider/spiderBookList')
const getBookDetail = require('./spider/spiderBookDetail')

const db = require('../datebase/index')

router.get('/booklist', (req, res, next) => {
    let book_list = []
    book_list = getBookList(res, db)
})
router.post('/bookdetail', (req, res, next) => {
    var params = req.body.href
    let bookdetail = {}
    bookdetail = getBookDetail(params, res)
})

module.exports = router