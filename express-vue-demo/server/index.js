/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 17:56:06
 */
const express = require('express')
const router = express.Router()
const getBookList = require('./spider/spider')

router.get('/', (req, res, next) => {
    let book_list = []
    book_list = getBookList()
    // if (book_list.length) {
    res.send(getBookList)
    // }
    // let time = setInterval(() => {

    // }, 500)

    // setTimeout(() => {
    //     console.log('-----', book_list)
    // }, 2000)
})

module.exports = router