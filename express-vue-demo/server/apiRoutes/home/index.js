/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 16:51:48
 */
import router from '../../index'

router.get('/eeeor', (req, res, next) => {
    req.setEncoding()
    res._destroy()
})

module.exports = router