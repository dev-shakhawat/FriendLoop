import React from 'react'


// icons
import { IoCloseOutline } from "react-icons/io5";

export default function SearchHistory({image , searchText = "Shakhawat Hossain" , type  }) {
  return (
    <div className='flex  items-center p-2 rounded-md hover:bg-bglight-tertiary dark:hover:bg-bgdark-tertiary transition cursor-pointer     '>
        
        {/* image */}
        {image && <img src={image} alt="image" className='w-8 h-8 rounded-full' />}
        
        {/* search text */}
        <div className="">
            <h2 className="">{searchText}</h2>
            {type && <p className="text-sm text-blue-500 capitalize  ">{type}</p>}
        </div>

        {/* clear */}
        <button type="button" className='ml-auto text-xl   '><IoCloseOutline/></button>

    </div>
  )
}
