import React from 'react'
import { Link, useLocation } from 'react-router'
import colorSchema from '../../../colors/colorSchema';

export default function NavBtn({name , link , icon}) {

    const location = useLocation();
    const color = colorSchema(); 
    

  return (
    <Link to={link} style={{color: location.pathname === link ?  color.btnbg : color.txt  }} className={` w-[40px] h-[40px] flex items-center gap-2 font-ubuntu font-bold text-2xl justify-center rounded-full `} >{icon}</Link>
  )
}
