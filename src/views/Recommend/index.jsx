import React from 'react'
import HomeLayout from '../../components/HomeLayout'
import Scroll from '../../components/Scroll'
import Slider from './Slider'
import SongList from './Songlist'
import './index.scss'

function Recommend(props) {
  return (
    <>
      <HomeLayout />
      <div className="recommend">
        <Scroll>
          <div>
            <Slider />
            <SongList />
          </div>
        </Scroll>
      </div>
    </>
  )
}
export default React.memo(Recommend)
