import React from "react";
import colorSchema from "../../../colors/colorSchema"; 
import Logo from "../Logo";
import NavBtn from "./NavBtn";

// icons
import { BsPlusSquare } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg"; 
import { GoHome } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { PiMessengerLogoThin } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import { PiVideoLight } from "react-icons/pi";
import { RiUserCommunityFill } from "react-icons/ri";

// components
import Menu from "../menu/Menu";

export default function Nav() { 
  const color = colorSchema()
  const navsInfo = [
    {name: "Home", link: "/", icon: <GoHome />},
    {name: "Friends", link: "/friends", icon: <GoPeople />},
    {name: "Chat", link: "/chat", icon: <PiMessengerLogoThin />},
    {name: "Notifications", link: "/notifications", icon: <VscBell />},
    {name: "Watch", link: "/watch", icon: <PiVideoLight />},
    {name: "Marketplace", link: "/marketplace", icon: <RiUserCommunityFill />},
  ]
  
  const sideNavs = [
    {name: "Create Post",  icon: <BsPlusSquare />},
    {name: "Search",  icon: <BsSearch />},
    {name: "menu",  icon: <CgMenuRight/>},
  ]

  return (
    <div style={{ background: color.bg }} className="flex items-center justify-between px-4 py-5 border-b border-gray-200 relative   ">
      {/* logo */}
      <Logo />

      {/* navs */}
      <div className="flex items-center gap-5  ">
        {navsInfo.map((nav) => (
          <NavBtn key={nav.name} name={nav.name} link={nav.link} icon={nav.icon} />
        ))}
      </div>

      {/* sidenav */}
      <div className="flex items-senter gap-5  ">
        {sideNavs.map((nav) => ( 
          <button style={{ color: color.txt }} key={nav.name} type="button"   name={`menu`} className=" w-[40px] h-[40px] flex items-center gap-2 font-ubuntu font-bold text-2xl justify-center cursor-pointer  rounded-full" > {nav.icon}</button>
        ))}


      </div>

      <Menu className={`right-0     `}/>


    </div>
  );
}
