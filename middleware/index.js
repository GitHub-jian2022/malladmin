const { verify }= require("../utils/TokenUtil");

function auth(ctx,next){
  const { authorization } = ctx.request.header
  let access_token = authorization.split(' ').pop()
  access_token = access_token.replace(/\"/g, "")
  //去掉双引号
  console.log('access_token',access_token)

  if(verify(access_token).success){
    next();
  }else{
    ctx.body = {
      code  : 403,
      msg: '登录验证已过期,请重新登录'
    }
  }
}

module.exports = auth