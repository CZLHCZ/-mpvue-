import {request} from '../utils/request.js'
// request 参数说明：(url，方法，数据参数，是否需要token)
// 获取token
export const getToken = data => request(`/api/wx_code/xcx_token?code=${data.code}&nickname=${data.nickname}&headimgurl=${data.headimgurl}&gender=${data.gender}`, 'get', {}, false)
// 获取验证码
export const sendCode = data => request(`/api/wx/user/code?mobile=${data.mobile}`, 'get', data, true)
// 注册
export const register = data => request(`/api/wx/user/register?mobile=${data.mobile}&code=${data.code}`, 'post', data, true)
