const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

router.get('/getBanners', async (ctx)=>{
    let res = fs.readFileSync(path.join(__dirname,'../../static/home.json'),'utf8')
    let { banners } = JSON.parse(res)  
    ctx.body={
        msg: 'success',
        code: 200,
        data: banners
    }
})

router.get('/getAdverts', async (ctx)=>{
    let res = fs.readFileSync(path.join(__dirname,'../../static/home.json'),'utf8')
    let { Adverts } = JSON.parse(res)  
    ctx.body={
        msg: 'success',
        code: 200,
        data: Adverts
    }
})

module.exports = router.routes()