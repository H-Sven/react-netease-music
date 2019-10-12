import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Loading from '../../../components/Loading'
import './index.scss'
import store from '../../../store'
import { filterCount } from '../../../utils'

function SongList(props) {
  const {history, match } = props
  const personalized = store.useStore('personalized')
  const { personalizedList, getPersonalizedList } = personalized

  useEffect(() => {
    personalizedList.length === 0 && getPersonalizedList()
  }, [])

  const detail = id => {
    history.push(`${match.path}/${id}`)
  }

  return (
    <div className="song_list_container">
      {personalizedList.length === 0 ? <Loading /> : <h3 className="title">推荐歌单</h3>}
      <div className="list">
          {personalizedList.length === 0 ? <Loading /> : personalizedList.map(item => {
            return (
              <div className="song_item" key={item.id} onClick={() => detail(item.id)}>
                <div className="play_count">
                  <i className="iconfont icon-erji"></i>
                  <span className="count">{filterCount(item.playCount)}</span>
                </div>
                <img src={item.picUrl} alt=""/>
                <p>{item.name}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default React.memo(withRouter(SongList))