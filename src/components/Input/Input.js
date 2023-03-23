import React from 'react'
import './input.css'

function Input(props) {
  const { variant = 'style1', placeholder = 'Text', ...rest } = props
  return (
    <input placeholder={`${placeholder}`} className={`input-text ${variant}`} {...rest} />
  )
}

export default Input