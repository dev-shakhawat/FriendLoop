import React from 'react'
import Logo from './navAssets/Logo'
import Search from './navAssets/navSearch/Search'
import NavProfile from './navAssets/navProfile/NavProfile'
import AllNavIcons from './navAssets/AllNavIcons/AllNavIcons'

export default function Nav() {
  return (
    <div className='flex items-center justify-between py-3.5 px-5 shadow-sm '>
      

      {/* logo */}
       <Logo/>
      
      {/* search */}
      <Search/>

      {/* profile */}
      <div className="flex gap-5 items-center    ">
        <AllNavIcons/>
        <NavProfile/>
      </div>

    </div>
  )
}
