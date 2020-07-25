const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}
router.get('/list', async (ctx)=>{
    const { page,limit } = ctx.request.query
    // console.log(page,limit)
    let res = fs.readFileSync(path.join(__dirname,'../../../static/goods_list.json'),'utf8')
    res = JSON.parse(res)  
    let data = res.data.splice((page-1) * limit,limit)

    await delay(200);

    ctx.body={
        msg: 'success',
        code: 200,
        data,
        total: res.total
    }
})
module.exports = router.routes()