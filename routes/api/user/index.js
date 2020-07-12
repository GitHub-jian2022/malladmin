const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const randomString = require('../../../utils/randomString')

router.post('/login', async (ctx)=>{
    const { phone,password } = ctx.request.body
    // console.log(phone,password)
    let res = fs.readFileSync(path.join(__dirname,'../../../static/user/user.json'),'utf8')
    let { data } = JSON.parse(res)
    //生成随机token
    const token = randomString(18)+data.id
    if(data.phone === phone && data.password === password) {
        ctx.body={
            code: 200,
            msg: 'success',
            data: token
        }
    }else {
        ctx.body={
            code: 400,
            msg: '账号或密码不正确'
        }
    }
})

router.post('/getUserInfo', async (ctx)=>{
    const { token } = ctx.request.body
    console.log('token',token)
    let res = fs.readFileSync(path.join(__dirname,'../../../static/user/user.json'),'utf8')
    let { data } = JSON.parse(res)  
    ctx.body={
        msg: 'success',
        code: 200,
        data
    }
})

module.exports = router.routes()