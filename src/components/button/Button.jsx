import React from 'react'
import colorSchema from '../../colors/colorSchema'

export const Button = ({type , text , style , icon}) => {

    const color = colorSchema()
  return (
    <button style={{color: color.txt , background: color.btnbg}} className={`${style}  flex justify-center items-center cursor-pointer gap-2 rounded-md ${color.btncolor}   `} type={type}>{text} {icon}</button>
  )
}
