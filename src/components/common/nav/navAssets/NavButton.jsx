import React from 'react'

export default function NavButton({icon , count }) {
  return (
    <div className=' w-9 h-9 grid place-items-center bg-bglight-tertiary dark:bg-bgdark-tertiary rounded-full relative cursor-pointer   '>
        
        {/* icons */}
        {icon}

        {/* indicator count */}
        {count && 
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full flex justify-center items-center text-xs text-white">{count}</span>
        }

    </div>
  )
}
