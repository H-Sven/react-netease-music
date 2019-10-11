import React from 'react'
import HomeLayout from '../../components/HomeLayout'

function Singers(props) {
  return (
    <>
      <HomeLayout />
      <div className="singers">
        singers
      </div>
    </>
  )
}
export default React.memo(Singers)
