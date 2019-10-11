import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { filterCount } from '../../../utils'
import './index.scss'

function DetailInfo(props) {
  const [backGround, setBackGround] = useState({
    background: '#fff',
    backgroundImage: ''
  })
  const [detailInfo, getDetailInfo] = useState({
    coverImgUrl: '',
    name: '',
    subscribedCount: '',
    nickname: '',
    avatarUrl: '',
    opacity: 0
  })
  const [operating] = useState([
    { icon: 'icon-pinglun', icon1: 'icon-pinglun',title: '评论', type: 1 },
    { icon: 'icon-xihuan', icon1: 'icon-xihuan1', title: '点赞', type: 2 },
    { icon: 'icon-hao', icon1: 'icon-hao',title: '收藏', type: 3 },
    { icon: 'icon-gengduo', icon1: 'icon-gengduo',title: '更多', type: 4 }
  ])
  const [xihuan, changeXihuan] = useState(false)
  useEffect(() => {
    getDetailInfo(props.detailInfo)
    setBackGround({
      backgroundImage: `url(${props.detailInfo.coverImgUrl})`
    })
  },[] )
  const clickOperating = title => {
    if(title === '点赞') {
      changeXihuan(!xihuan)
    } else {
      alert(`点击了${title}`)
    }
  }

  return (
    <div className="detail_info">
      <div className="background" style={backGround}>
        <div className="filter"></div>
      </div>
      <div className="img_warpper">
        <div className="play_count">
          <i className="iconfont icon-erji"></i>
          <span className="count">{filterCount(detailInfo.subscribedCount)}</span>
        </div>
        <img src={detailInfo.coverImgUrl} className="cover_img" alt="" />
      </div>
      <div className="desc_wrapper">
        <div className="title">{detailInfo.name}</div>
        <div className="person">
          <div className="avatar">
            <img src={detailInfo.avatarUrl} alt="" />
          </div>
          <div className="name">{detailInfo.nickname}</div>
        </div>
      </div>
      <div className="operating">
        {operating.map(item => {
          return (
            <div className="operating_item" key={item.type} onClick={() => clickOperating(item.title)}>
              <i className={`iconfont ${xihuan ? item.icon1: item.icon}`}></i>
              <div className="title">{item.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default React.memo(withRouter(DetailInfo))
