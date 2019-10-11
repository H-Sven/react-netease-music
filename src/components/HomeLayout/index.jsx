/*
 * @Author: Siwen
 * @Date: 2019-10-10 15:05:52
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 18:30:20
 * @Description: 导航菜单
 */
import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './index.scss'

function HomeLayout(props) {
  return (
    <div className="home_layout">
      <div className="top">
        <i className="iconfont icon-menu" onClick={() => alert('用户中心正在开发中，敬请期待:)')}></i>
        <div className="title">云音乐</div>
        <i className="iconfont icon-search" onClick={() => alert('点击了搜索)')}></i>
      </div>
      <div className="tab">
        <NavLink to="/recommend" activeClassName="selected">推荐</NavLink>
        <NavLink to="/singers" activeClassName="selected">歌手</NavLink>
        <NavLink to="/rank" activeClassName="selected">排行榜</NavLink>
      </div>
    </div>
  )
}

export default React.memo(withRouter(HomeLayout))