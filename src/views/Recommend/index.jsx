import React from 'react'
import HomeLayout from '../../components/HomeLayout'
import Slider from '../../components/Slider'

function Recommend(props) {
  return (
    <>
      <HomeLayout />
      <div className="recommend">
        <Slider />
      </div>
    </>
  )
}
export default React.memo(Recommend)
