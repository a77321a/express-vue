/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-22 18:29:24
 */
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    send()
    res.json(res)
})

module.exports = router