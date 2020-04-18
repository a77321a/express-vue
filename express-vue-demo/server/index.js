/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-18 16:35:22
 */
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({
        req, res
    })
})

module.exports = router