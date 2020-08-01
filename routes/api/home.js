const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

router.get('/getBanners', async (ctx) => {
    // 导航图片资源路径
    const fileUrl = 'static/images/Banners'
    var files = fs.readdirSync(fileUrl)//读取该文件夹
    if (files.length < 1) return
    let data = []
    files.forEach((file, i) => {
        const img_path = `/images/Banners/${file}`
        data.push({
            url: img_path
        })
    })
    ctx.body = {
        msg: 'success',
        code: 200,
        data
    }
})

router.get('/getNavs', async (ctx) => {
    // 导航图片资源路径
    const fileUrl = 'static/images/Navs'
    var files = fs.readdirSync(fileUrl)//读取该文件夹
    if (files.length < 1) return
    let data = []
    const navs = ['9.9元包邮', '限时抢购', '拼团', '大牌手机']
    files.forEach((file, i) => {
        const img_path = `/images/Navs/${file}`
        data.push({
            url: img_path,
            title: navs[i]
        })
    })
    ctx.body = {
        msg: 'success',
        code: 200,
        data
    }
})

router.get('/getAdverts', async (ctx) => {
    // 导航图片资源路径
    const fileUrl = 'static/images/Adverts'
    var files = fs.readdirSync(fileUrl)//读取该文件夹
    if (files.length < 1) return
    let data = []
    files.forEach((file, i) => {
        const img_path = `/images/Adverts/${file}`
        data.push({
            url: img_path
        })
    })
    ctx.body = {
        msg: 'success',
        code: 200,
        data
    }
})

module.exports = router.routes()