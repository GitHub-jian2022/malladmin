const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const randomString = require('../../../utils/randomString')

router.post('/login', async (ctx) => {
    const { phone, password } = ctx.request.body
    // console.log('password: ', password);
    let res = fs.readFileSync(path.join(__dirname, '../../../static/user/user.json'), 'utf8')
    let { data } = JSON.parse(res)

    let flag = data.some(item => item.phone === phone && item.password === password)
    if (flag) {
        //生成随机token
        const token = randomString(18) + data[0].id
        ctx.body = {
            code: 200,
            msg: 'success',
            data: token
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '账号或密码不正确'
        }
    }
})

router.post('/getUserInfo', async (ctx) => {
    const { token } = ctx.request.body
    let res = fs.readFileSync(path.join(__dirname, '../../../static/user/user.json'), 'utf8')
    let { data } = JSON.parse(res)
    ctx.body = {
        msg: 'success',
        code: 200,
        data
    }
})

module.exports = router.routes()