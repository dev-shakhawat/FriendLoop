import React from 'react'
import NavButton from '../NavButton'


// icons
import { GoPlus } from "react-icons/go";
import { GrNotification } from "react-icons/gr";
import { BsChatText } from "react-icons/bs";


export default function AllNavIcons() {
  return (
    <div className='flex items-center gap-5   '> 
        
        {/* nav plus */}
        <NavButton icon={<GoPlus className='text-xl'/>} />
        
        {/* nav notifications */}
        <NavButton count={6} icon={<GrNotification/>}/>

        {/* nav messages */}
        <NavButton  icon={<BsChatText className='text-lg'/>}/>

    </div>
  )
}
