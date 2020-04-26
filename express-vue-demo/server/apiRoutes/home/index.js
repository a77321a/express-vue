/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-29 14:37:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-26 09:06:04
 */
import router from '../../index'

router.get('/eeeor', (req, res, next) => {
    console.log(1111)
    req.setEncoding()
    res._destroy()
})

module.exports = router