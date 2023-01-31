import React from 'react'
import '../styles/popOver.css'

const PopOver = ({provincia}) => {
  return (
    <div className='containerPopOverProvincia'>
      <h3>{provincia}</h3>
    </div>
  )
}

export default PopOver