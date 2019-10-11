import React from 'react'
import './index.scss'

function Tracks(props) {
  return (
    <div className="tracks">
      {props.tracks.map(item => {
        return (
          <div key={item.id}>{item.name}</div>
        )
      })}
    </div>
  )
}
export default React.memo(Tracks)
