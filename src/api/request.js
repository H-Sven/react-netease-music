/*
 * @Author: Siwen
 * @Date: 2019-08-08 13:47:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-12 11:27:57
 * @Description: axios封装
 */
import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.REACT_APP_API_URL
// 公共参数
const publicParams = {}

// 防止重复请求相关配置
const pending = []
const CancelToken = axios.CancelToken
const cancelPending = (config) => {
  pending.forEach((item, index) => {
    if (!config || item.UrlPath === config.url) {
      item.Cancel() //取消请求
      pending.splice(index, 1) //移除当前请求记录
    }
  })
}
//不进行防重处理的接口集合
const noCancelPending = []

//request 拦截器
axios.interceptors.request.use(
  config => {
    // 防止重复请求 ↓↓↓↓
    if (!noCancelPending.includes(config.url)) {
      cancelPending(config)
      config.cancelToken = new CancelToken((res) => {
        pending.push({ 'UrlPath': config.url, 'Cancel': res })
      })
    }
    // 防止重复请求 ↑↑↑↑
    if (config.method === 'post') {
      config.data = qs.stringify(Object.assign(config.data || {}, publicParams))
    } else if (config.method === 'get') {
      config.params = Object.assign(config.params || {}, publicParams)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//response 拦截器
axios.interceptors.response.use(
  response => {
    cancelPending(response.config) // 防止重复请求
    // 具体业务处理
    const res = response.data
    if (typeof res === 'string') {
      return res
    } else if (res.code !== 200) {
      return Promise.reject(res.error)
    } else {
      return res || {}
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default axios

