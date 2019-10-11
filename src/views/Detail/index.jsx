import React, { useState, useEffect } from 'react'
import Scroll from '../../components/Scroll'
import DetailInfo from './DetailInfo/index'
import Tracks from './Tracks/index'
import { palylistDetail } from '../../api/index'
import './index.scss'

function Detail(props) {
  const { match } = props
  const [title, setTitle] = useState('歌单')
  const [detailInfo, setDetailInfo] = useState({})
  const [tracks, setTracks] = useState([])
  const [opacity, changeOpacity] = useState({
    opacity: 1,
    backgroundColor: ''
  })

  
  useEffect(() => {
    palylistDetail(match.params.id).then(res => {
      setDetailInfo({
        coverImgUrl: res.playlist.coverImgUrl,
        name: res.playlist.name,
        subscribedCount: res.playlist.subscribedCount,
        nickname: res.playlist.creator.nickname,
        avatarUrl: res.playlist.creator.avatarUrl,
      })
      setTracks(res.playlist.tracks)
    })
  }, [])
  const handleScroll = (pos) => {
    let minScrollY = -45
    let percent = Math.abs(pos.y/minScrollY)
    if (pos.y < minScrollY) {
      changeOpacity({
        opacity: Math.min(1, (percent-1)/2),
        backgroundColor: '#d44439'
      })
      setTitle(detailInfo.name)
    } else {
      changeOpacity({
        opacity: 1,
        backgroundColor: ''
      })
      setTitle('歌单')
    }
  }
  return (
    <div className="detail">
      <div className="back_box" style={opacity} onClick={() => props.history.goBack() }>
        <i className="iconfont icon-xia"></i>
        <div className="title">{title}</div>
      </div>
      <Scroll onScroll = { handleScroll }>
        <div>
          {JSON.stringify(detailInfo) !== '{}' && <DetailInfo detailInfo={detailInfo} opacity={opacity} />}
          {tracks.length > 0 && <Tracks tracks={tracks} />}
        </div>
      </Scroll>
    </div>
  )
}
export default React.memo(Detail)
