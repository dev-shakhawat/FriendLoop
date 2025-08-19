import React from 'react'

export default function NavProfile( {profilePic} ) {
  return (
    <div className='relative w-9 h-9 rounded-full'>
        
        {/* profile image */}
        {profilePic ? <img src="" alt="" className='     ' /> : <div className='w-full h-full bg-gray-400 rounded-full flex justify-center items-center'></div>}
        
    </div>
  )
}
