import React from 'react'
import './index.scss'

function Loading(props) {
  return (
    <div className="loading">
      <div></div>
      <div></div>
    </div>
  )
}

export default React.memo(Loading) 