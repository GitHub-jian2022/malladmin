const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const { sign, verify } = require('../../../utils/TokenUtil')
const { decrypt } = require('../../../utils/Tool')
const auth = require('../../../middleware')

router.post('/login', async (ctx) => {
    const { phone, password } = ctx.request.body
    
    let res = fs.readFileSync(path.join(__dirname, '../../../static/user/user.json'), 'utf8')
    let { data } = JSON.parse(res)
    let userId = ''
    let flag = false
    flag = data.some((item,index) => {
        if(item.phone === phone && decrypt(item.password) === decrypt(password)) {
            userId = item.id
            return true
        }
    })
    if (flag) {
        //生成token
        const token = sign(userId)
        ctx.body = {
            code: 200,
            msg: 'success',
            data: token
        }
    } else {
        ctx.body = {
            code: 401,
            msg: '账号或密码不正确'
        }
    }
})

router.post('/getUserInfo',auth, async (ctx) => {
    let { token } = ctx.request.body
    token = verify(token).decoded
    console.log('token: ', token);
    const { userId } = token
    let res = fs.readFileSync(path.join(__dirname, '../../../static/user/user.json'), 'utf8')
    let { data } = JSON.parse(res)
    let user = {}
    data.some(item => {
        if(item.id === userId) {
            user = item
        }
    })
    ctx.body = {
        msg: 'success',
        code: 200,
        data: user
    }
})

module.exports = router.routes()