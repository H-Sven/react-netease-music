/*
 * @Author: Siwen
 * @Date: 2019-09-18 16:28:05
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 14:19:30
 * @Description: 
 */
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'https://t-api.xyhj.io/v1/w/zh',
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }))
}