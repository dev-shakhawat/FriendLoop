import React, { useEffect, useRef, useState } from 'react'
import { CiWifiOn } from 'react-icons/ci'
import { FaRegCreditCard } from 'react-icons/fa6'
import { GiLargePaintBrush } from 'react-icons/gi'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiUserSettingsLine } from 'react-icons/ri'
import { TiArrowSortedDown } from 'react-icons/ti'


import colorSchema from '../../../colors/colorSchema'
import MenuTab from './MenuTab'

export default function MenuSetting() {

    const color = colorSchema();
    const [height , setHeight] = useState("0px");
    const [isToggle , setIsToggle] = useState(false);
    const boxRef = useRef(null)

    useEffect(() => {
      if (isToggle) {
          setHeight(`${boxRef.current.scrollHeight}px`);
      } else {
          setHeight("0px");
      }
  }, [isToggle]);


  return (
            <div
            style={{ background: color.bg }}
              className={` p-2 mt-3  `}
            >
              <div onClick={() => setIsToggle(prev => !prev)} className="flex justify-between items-center w-full cursor-pointer "  >
                <h3 style={{ color: color.txt }} className="flex items-center gap-x-2 font-ubuntu text-clrthird ">
                  <IoSettingsOutline className="text-xl" />
                  <span>Settings & privacy</span>
                </h3> 
                  <TiArrowSortedDown  style={{ color: color.txt }} className={` ${isToggle ? "rotate-180" : ""} transition-all duration-400  text-xl`} />  
              </div>

              {/* all settings */}
              <div ref={boxRef} style={{ height }} className={`flex flex-col transition-all duration-400 gap-y-2   ${isToggle ? "mt-2" : ""} overflow-hidden `}>

                <MenuTab style={{background: color.bgSecondery  }} className="" icon={<RiUserSettingsLine className="text-2xl text-[#168d26]" />} text="Setting" link={""}  />
                <MenuTab style={{background: color.bgSecondery  }} className="" icon={<FaRegCreditCard className="text-xl text-[#168d26]" />} text="Orders & payments" link={""}  />
                <MenuTab style={{background: color.bgSecondery  }} className="" icon={<GiLargePaintBrush className="text-xl text-[#168d26]" />} text="Clear space" link={""}  />
                <MenuTab style={{background: color.bgSecondery  }} className="" icon={<CiWifiOn className="text-xl text-[#168d26]" />} text="Data saver" link={""}  />
 
              </div>
            </div>
  )
}
