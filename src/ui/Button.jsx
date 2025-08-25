import React from 'react'

function Button({children}) {
  return (
    <button className='capitalize cursor-pointer font-semibold'>{children}</button>
  )
}

export default Button