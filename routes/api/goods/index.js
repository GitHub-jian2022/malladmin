const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

router.get('/list', async (ctx)=>{
    let goodslist = fs.readFileSync(path.join(__dirname,'../../../static/goods_list.json'),'utf8')
    let data = JSON.parse(goodslist)  
    ctx.body={
        msg: 'success',
        code: 200,
        data
    }
})
module.exports = router.routes()