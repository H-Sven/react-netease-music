import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { filterCount } from '../../../utils'
import './index.scss'

function DetailInfo(props) {
  const [opacity, getOpacity] = useState()
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
  useEffect(() => {
    getDetailInfo(props.detailInfo)
    setBackGround({
      backgroundImage: `url(${props.detailInfo.coverImgUrl})`
    })
  },[] )
  useEffect(() => {
    getOpacity({
      opacity: props.opacity,
      backgroundColor: +props.opacity < 1 ? 'red' : ''
    })
  }, [props.opacity])

  return (
    <div className="detail_info">
      <div className="back_box" style={opacity} onClick={() => props.history.goBack() }>
        <i className="iconfont icon-xia"></i>
        <div className="title">歌单</div>
      </div>
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
    </div>
  )
}
export default React.memo(withRouter(DetailInfo))
