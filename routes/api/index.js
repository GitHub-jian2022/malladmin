const router = require('koa-router')();

//路由模块
const user = require('./user')
const home = require('./home')
const cate = require('./cate');
const goods = require('./goods');
const alliance = require('./alliance');

router.get('/', async (ctx)=>{
   ctx.body={code:0,msg:'成功'}
})

router.use('/user',user)
router.use('/home',home)
router.use('/cate',cate)
router.use('/goods',goods)
router.use('/alliance',alliance)

module.exports = router.routes()