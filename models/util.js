const utils = require('utility');//md5加密

/**
 * @method md5Pwd  md5加密
 * @param {String} pwd 要加密的密码
 * @return 返回加密后的密码
 */
exports.md5Pwd=(pwd)=>{
    const salt = 'cms_web19941003!@#SUWenHao~~';
    return utils.md5(utils.md5(pwd+salt))
}
