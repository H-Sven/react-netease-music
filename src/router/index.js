/*
 * @Author: Siwen
 * @Date: 2019-09-17 14:29:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 14:16:43
 * @Description: 路由表
 */
import React from 'react'
const Home = React.lazy(() => import('../views/Home'))

export default [
  { path: '/', name: 'Home', meta: {}, component: Home },
]
