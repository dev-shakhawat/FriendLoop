import React, { useEffect, useRef, useState } from 'react'


// icons
import { LuSearch } from "react-icons/lu";
import SearchHistory from './SearchHistory';


export default function Search() {

  const historyRef = useRef(null);
  const [isHistoryOpen, setIsHistoryOpen] =  useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (historyRef.current && !historyRef.current.contains(event.target)) {
        setIsHistoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  return (
    <div ref={historyRef} className='relative w-150      '>
        
        {/* search box */}
        <div className="flex px-2 mx-2 bg-bglight-tertiary dark:bg-bgdark-tertiary rounded-md relative z-1 ">
            <button type="button" className=' text-light-text-secondary dark:text-dark-text-secondary ' ><LuSearch/></button>
            <input onFocus={() => setIsHistoryOpen(true)} placeholder='Search Friends , videos ..' type="text" className='font-medium w-full px-3 py-2 outline-none text-light-text-secondary dark:text-dark-text-secondary    ' />
        </div>

        {/* search modal/history */}
        {isHistoryOpen && 
        <div className={` absolute top-0 left-0 transition animate-bottomToTop bg-bglight-secondary dark:bg-bgdark-secondary h-50 p-1 w-full shadow-md rounded-md pt-12  px-2 `}>
          
          {/* search head */}
          <div className="flex justify-between items-center pb-2   ">
            <span>Recent</span>
            <button type="button">Clear All</button>
          </div>

          {/* all search history */}
          <SearchHistory/> 

        </div>}


    </div>
  )
}
