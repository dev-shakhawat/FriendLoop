import React from 'react'
import colorSchema from '../../colors/colorSchema'

export const Button = ({type , text , style , icon}) => {

    const color = colorSchema()
  return (
    <button className={`${style}  flex justify-center items-center cursor-pointer gap-2 rounded-md ${color.btncolor} ${color.txt}  `} type={type}>{text} {icon}</button>
  )
}
