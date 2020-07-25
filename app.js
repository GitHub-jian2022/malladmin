const Koa = require('koa'),
      Router = require('koa-router'),
      Static = require('koa-static'),
      Session = require('koa-session'),
      BodyParser = require('koa-bodyparser'),
      path = require('path'),
      url = require('url'),
      jsonp = require('koa-jsonp');

const app = new Koa();
const router = new Router();

/*
*配置中间件
*/
//配置session
app.keys = ['some secret hurr'];
app.use(Session({
    key: 'koa:sess',
    maxAge: 8640000,
    overwrite: true,
    httpOnly: true,
    signed: true, 
    rolling: true, 
    renew: false
},app))

//配置静态资源
app.use(Static(path.join(__dirname,'static')))

//配置post请求数据接收
app.use(BodyParser());
//jsonp
app.use(jsonp());

//解决跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.header.origin);
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild,token');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});

//引入路由模块routes
const api = require('./routes/api');

router.use('/api',api);


//启动路由
app.use(router.routes());
app.use(router.allowedMethods());
//启动服务器
app.listen(8090,(err)=>console.log('http://localhost:8090'));