import React from 'react'
import HomeLayout from '../../components/HomeLayout'
import Slider from './Slider'
import SongList from './Songlist'
import './index.scss'

function Recommend(props) {
  return (
    <div className="recommend">
      <HomeLayout />
      <Slider />
      <SongList />
    </div>
  )
}
export default React.memo(Recommend)
