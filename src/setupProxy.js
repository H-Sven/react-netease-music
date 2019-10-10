/*
 * @Author: Siwen
 * @Date: 2019-09-18 16:28:05
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 16:38:15
 * @Description: 
 */
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }))
}