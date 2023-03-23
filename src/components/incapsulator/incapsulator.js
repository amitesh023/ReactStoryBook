import React from 'react'
import './incapsulator.css'
function Incapsulator(props) {
  return (
      <div className='center'>{ props.children }</div>
  )
}

export default Incapsulator