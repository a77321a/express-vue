/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 18:11:20
 */
const express = require('express')
const router = express.Router()
const getBookList = require('./spider/spider')
router.get('/', (req, res, next) => {
    let book_list = []
    book_list = getBookList(res)
    // res(book_list)
})

module.exports = router