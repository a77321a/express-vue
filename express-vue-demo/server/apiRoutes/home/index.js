import router from '../../index'

router.get('/',(req,res,next)=>{
    res.json({
        name:'node',
        id:'1'
    })
})

module.exports = router