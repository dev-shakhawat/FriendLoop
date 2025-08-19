import React from 'react'
import { Link } from 'react-router'

// logo image
import LogoImg from '../../../../assets/logo.webp'

export default function Logo() {
  return (
    <Link to="/" >
       <img src={LogoImg} alt="Logo" className='w-[112px]' />
    </Link>
  )
}
