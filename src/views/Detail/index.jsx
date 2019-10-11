import React, { useState, useEffect } from 'react'
import Scroll from '../../components/Scroll'
import DetailInfo from './DetailInfo/index'
import Tracks from './Tracks/index'
import { palylistDetail } from '../../api/index'
import './index.scss'

function Detail(props) {
  const { match } = props
  const [detailInfo, setDetailInfo] = useState({})
  const [tracks, setTracks] = useState([])
  const [opacity, changeOpacity] = useState(1)

  
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
  useEffect(() => {
    // changeOpacity(Math.random().toFixed(1))
  }, [opacity])
  return (
    <div className="detail">
      <Scroll>
        <div>
          {JSON.stringify(detailInfo) !== '{}' && <DetailInfo detailInfo={detailInfo} opacity={opacity} />}
          {tracks.length > 0 && <Tracks tracks={tracks} />}
        </div>
      </Scroll>
    </div>
  )
}
export default React.memo(Detail)
