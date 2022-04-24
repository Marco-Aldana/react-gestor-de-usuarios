import React from 'react'
import './Input.css'

const Input = ({label,...resto}) => {
  return (
      <div className='field'>
          <label>{label}</label>
          <input {...resto}/>
      </div>
    
  )
}

export default Input