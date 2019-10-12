/*
 * @Author: Siwen
 * @Date: 2019-09-17 14:29:01
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-12 13:54:58
 * @Description: 路由表
 */
import React from 'react'
import Recommend from '../views/Recommend'
import Singers from '../views/Singers'
import Rank from '../views/Rank'
const Detail = React.lazy(() => import('../views/Detail'))

export default [
  { path: '/recommend', name: 'Recommend', meta: {}, component: Recommend },
  { path: '/singers', name: 'Singers', meta: {}, component: Singers },
  { path: '/rank', name: 'Rank', meta: {}, component: Rank },
  { path: '/recommend/:id', name: 'Rank', meta: {}, component: Detail },
  { path: '/rank/:id', name: 'Rank', meta: {}, component: Detail },
]
