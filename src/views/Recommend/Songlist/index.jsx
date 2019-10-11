import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './index.scss'
import store from '../../../store'

function SongList(props) {
  const {history, match } = props
  const personalized = store.useStore('personalized')
  const { personalizedList, getPersonalizedList } = personalized

  useEffect(() => {
    personalizedList.length === 0 && getPersonalizedList()
  }, [])

  const filter = count => {
    if (`${parseInt(count)}`.length >= 5) {
      return `${parseInt(count / 10000)}万`
    } else if (`${parseInt(count)}`.length === 4) {
      return `${parseInt(count / 1000)}千`
    } else {
      return count
    }
  }
  const detail = id => {
    history.push(`${match.path}/${id}`)
  }

  return (
    <div className="song_list_container">
      <h3 className="title">推荐歌单</h3>
      <div className="list">
        {personalizedList.map(item => {
          return (
            <div className="song_item" key={item.id} onClick={() => detail(item.id)}>
              <div className="play_count">
                <i className="iconfont icon-erji"></i>
                <span className="count">{filter(item.playCount)}</span>
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