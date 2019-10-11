import React, { useEffect } from 'react'

function Detail(props) {
  const { match } = props

  useEffect(() => {
    console.log(match.params.id)
    
  }, [])
  return (
    <div className="detail">
      Detail
    </div>
  )
}
export default React.memo(Detail)
