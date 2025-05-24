import React, { useState } from 'react'



// icons
import { RiMicrosoftLoopFill } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import {InputDesign } from '../../components/input/InputDesign';
import { LuMailOpen } from "react-icons/lu";
import { BsShieldLock } from "react-icons/bs";


// colors
import colorSchema from '../../colors/colorSchema';
import { Button } from '../../components/button/Button';
import { Link } from 'react-router';
import { Error } from '../../components/message/Error';



export const Checkpoint = () => {

  
  const [otp , setOtp] = useState("")

  const handelotp = (e)=>{ 
    setOtp(e.target.value)
  }

  const color = colorSchema()

  
  return (
    <div className={`grid place-items-center h-screen ${color.bg} `}>
        <Error/>
        <div className="text-center px-4 ">
                <h2 className={` flex items-center gap-2 font-ubuntu font-bold text-3xl justify-center ${color.brand}`}><RiMicrosoftLoopFill/><span>FriendLoop</span></h2>
                <h3 className={` ${color.txt} font-medium mt-5 font-opensans`}>Almost done , Please verify OTP </h3>

                {/* login form */}
                <form  className={`p-2 mt-10 `}>
                  <div className="flex flex-col gap-5">
                    <InputDesign id={"otp"} value={otp} onChange={(e)=> handelotp(e)}  type={"text"} label={"OTP"} icon={<LuMailOpen/>} />
                    <Button type={"button"} text={"Submit"} style={"w-full py-2 font-ubuntu font-semibold  "}  />
                  </div>
                </form>
        </div>
    </div>
  )
}
