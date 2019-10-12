import React from 'react'
import { filterCount } from '../../utils'
import './index.scss'

function Tracks(props) {

  const addCollect = () => {
    alert('点击了收藏')
  }
  const ClickInfo = (info) => {
    console.log(info)
  }
  
  const filterAr = ar => {
    let arString = ''
    ar.forEach(item => {
      arString = `${arString}/${item.name}`
    })
    return arString.substr(1)
  }

  return (
    <div className="tracks">
      <div className="head">
        <div className="left">
          <i className="iconfont icon-bofang"></i>
          <div className="title">播放全部<span>(共{props.tracks.length}首)</span></div>
        </div>
        {props.collect && 
          <div className="right" onClick={() => addCollect()}>
            <i className="iconfont icon-hao"></i>
            <div className="collect">
              收藏<span>({filterCount(props.subscribedCount)})</span>
            </div>
          </div>
        }
      </div>
      <ul className="tracks_list">
        {props.tracks.map((item, index) => {
          return (
            <li className="tracks_item" key={item.id} onClick={() => ClickInfo(item)}>
              <div className="index">{index+1}</div>
              <div className="info">
                <span>{item.name}</span>
                <span>{filterAr(item.ar)} - {item.al.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default React.memo(Tracks)
