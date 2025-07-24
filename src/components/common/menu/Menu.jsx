import React, { useState } from "react";
import { useNavigate } from "react-router";  

// Icons
import { IoMdArrowBack } from "react-icons/io"; 
import { BiSolidVideos } from "react-icons/bi";
import { PiMessengerLogoThin } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { RiStore2Line } from "react-icons/ri";
import { ImFlag } from "react-icons/im";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiMemoriesFill } from "react-icons/ri";
import { BsCalendar4Event } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FaEarthEurope } from "react-icons/fa6";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa"; 
import { CiWifiOn } from "react-icons/ci";
import { GiLargePaintBrush } from "react-icons/gi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { CiInboxIn } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai"; 




import colorSchema from "../../../colors/colorSchema";
import MenuProfile from "./MenuProfile";
import MenuTab from "./MenuTab";
import MenuSetting from "./MenuSetting";

// components 

const Menu = ({className}) => {
 
 
  // navigate
  let navigation = useNavigate();
  const color = colorSchema();

  
  return (
    <div
    style={{ background: color.bgSecondery }}
      className={`${className} overflow-y-scroll h-screen fixed top-20 z-[2]  lg:w-[25%] w-full  p-2 shadow  `}
    >  

    {/* menu head */}
    <div className="flex items-center justify-between  ">
      <button type="button"
        className="flex items-center gap-x-2 font-aldrich font-semibold text-lg cursor-pointer  " 
      >
        <IoMdArrowBack />
      </button>
      <span>Menu</span>
    </div>

    {/* profile */}
    <MenuProfile/>

     
     <div className="grid grid-cols-2 gap-x-1 mt-3 gap-y-2  ">
      <MenuTab style={{background: color.bg  }}  className="" icon={<BiSolidVideos className="text-xl text-[#e37568]" />} text="Reels" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<PiMessengerLogoThin className="text-xl text-[#4967f4] " />} text="Chat" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<MdGroups className="text-xl text-[#45a7ee] " />} text="groups" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<PiVideoLight className="text-xl text-[#72BAA9] " />} text="video" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<IoVideocamOutline className="text-xl text-[#72BAA9] " />} text="live" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<RiStore2Line className="text-xl text-[#1eaa2e] " />} text="marketplace" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<ImFlag className="text-xl text-[#a96216] " />} text="pages" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<CiBookmarkCheck className="text-xl text-[#42e619] " />} text="saved" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<RiMemoriesFill className="text-xl text-[#9c05f3] " />} text="memories" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<BsCalendar4Event className="text-xl text-[#18fcfc] " />} text="events" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<GoVerified className="text-xl text-[#0671eb] " />} text="varified" />
      <MenuTab style={{background: color.bg  }}  className="" icon={<FaEarthEurope className="text-xl text-[#1ab14f] " />} text="public" />
     </div>

    <MenuTab style={{background: color.bg  }} link={`/blockList`} className="mt-2" icon={<MdOutlineDoNotDisturbOn className="text-xl text-[#1ab14f] " />} text="Block List" />

    
    {/* menu settings */}
    <MenuSetting/>

        {/* <div
          className={`border-t py-2  `}
        >
          <div
            className="flex justify-between items-center w-full" 
          >
            <h3 className="flex items-center gap-x-2 font-ubuntu text-clrthird ">
              <GoQuestion className="text-xl" />
              <span>Help & support</span>
            </h3> 
              <TiArrowSortedDown className="text-xl" /> 
              <TiArrowSortedUp className="text-xl" /> 
          </div>
          <div className="flex flex-col mt-1 gap-y-2">
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <LiaHandsHelpingSolid className="text-xl " />
              <span>Help</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <CiInboxIn className="text-xl " />
              <span>Support inbox</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <FcAbout className="text-xl " />
              <span>About</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <GoReport className="text-xl " />
              <span>Report & problem</span>
            </div>
            <div className="menuBox gap-x-2 text-clrthird font-ubuntu">
              <AiOutlineSafety className="text-xl " />
              <span>Safety</span>
            </div>
          </div>
        </div>
        <div
          className={`border-t py-2 `} 
        >
          <div className="cursor-pointer w-full">
            <h3 className="flex items-center gap-x-2 font-ubuntu text-clrthird ">
              <AiOutlineLogout className="text-xl" />
              <span>Log out</span>
            </h3>
          </div>
        </div> */}
      </div> 
  );
};

export default Menu;