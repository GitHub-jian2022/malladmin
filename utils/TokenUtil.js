const jwt = require('jsonwebtoken') 
//token秘钥
const privateKey = 'uwsaosaouwuwsao'

/*
* @param param 要签名的参数
* @param time '15d'表示15天,'2h'表示2小时
* */

const sign = function (userId, time = '2d') {
    const payload = { userId }
    let token = jwt.sign(payload, privateKey, { expiresIn: time });
    return token
}

const verify = function (token) {
    let result = {};
    jwt.verify(token, privateKey, (error, decoded) => {
        if (error) {
            console.log('error: ', error);
            result.success = false
        } else {
            result.success = true
            result.decoded = decoded
        }
    });
    return result
}

module.exports = {
    sign,
    verify
}