/*
 * @Author: Siwen
 * @Date: 2019-08-14 16:49:43
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-20 17:34:39
 * @Description: 接口中心
 */
import axios from './request'

export const getUserInfo = () => {
  return axios.post('/user/userInfo')
}
/**gt初始化 */
export const initGt = (account) => {
  return axios.post('/user/initGt', {
    account,
    clientType: 'web'
  })
}
export const verifyGt = (data) => {
  return axios.post('/user/verifyGt', data)
}
export const verifyCode = (data) => {
  return axios.post('/user/verifyCode', data)
}
export const sendCode = (account, codeType) => {
  return axios.post('/user/sendCode', { account, codeType, orgId: 4 })
}
export const login = (account) => {
  return axios.post('/user/login', { account, orgId: 4 })
}
export const logout = () => {
  return axios.post('user/logout')
}
export const register = (data) => {
  return axios.post('/user/register', data)
}
/**首页奖池余额/总充值 */
export const pondInfo = () => {
  return axios.post('/pond/pondInfo')
}
/**抽奖首页 */
export const indexInfo = () => {
  return axios.post('/pond/indexInfo')
}
/**参与抽奖接口 */
export const pondDraw = () => {
  return axios.post('/pond/draw')
}
/**我的资产 */
export const accountAsset = () => {
  return axios.post('/account/asset')
}
/**账户记录 */
export const accountLog = (data) => {
  return axios.post('/account/accountLog', data)
}
/**我的钱包地址 */
export const accountRchAddress = () => {
  return axios.post('/account/rchAddress')
}
/**快捷充值 */
export const rchFast = () => {
  return axios.post('/account/rchFast')
}
/**我的社区成员列表 */
export const myNodeUserList = (data) => {
  return axios.post('/node/myNodeUserList', data)
}
/**我的社区统计数据 */
export const myNodeInfo = () => {
  return axios.post('/node/myNodeInfo')
}
/**申请节点 */
export const applyNode = () => {
  return axios.post('/node/applyNode')
}
/**推荐节点 */
export const recommendNode = (data) => {
  return axios.post('/node/recommendNode', data)
}
