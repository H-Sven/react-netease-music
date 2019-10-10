/*
 * @Author: Siwen
 * @Date: 2019-09-17 14:29:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 15:02:06
 * @Description: 路由表
 */
import React from 'react'
const Recommend = React.lazy(() => import('../views/Recommend'))

export default [
  { path: '/recommend', name: 'Recommend', meta: {}, component: Recommend },
]
