import React, { use, useState } from 'react'



// icons
import { RiMailSendLine } from "react-icons/ri";
import { RiMicrosoftLoopFill } from "react-icons/ri";
import {InputDesign } from '../../components/input/InputDesign';
import { LuMailOpen } from "react-icons/lu";
import { GoNumber } from "react-icons/go";
import { BsShieldLock } from "react-icons/bs";


// colors
import colorSchema from '../../colors/colorSchema';
import { Button } from '../../components/button/Button';
import { Link } from 'react-router';



export const ForgotPass = () => {

  
  const [email , setEmail] = useState("")
  const [opt , setOtp] = useState("")
  const [password , setPassword] = useState("")

  const handelEmail = (e)=>{ 
    setEmail(e.target.value)
  }
  const handelotp = (e)=>{ 
    setOtp(e.target.value)
  }
  const handelPassword = (e)=>{
    setPassword(e.target.value)
  }


  const color = colorSchema()

  
  return (
    <div className={`grid place-items-center h-screen ${color.bg} `}>
        <div className="text-center px-4 ">
                <h2 className={` flex items-center gap-2 font-ubuntu font-bold text-3xl justify-center ${color.brand}`}><RiMicrosoftLoopFill/><span>FriendLoop</span></h2>
                <h3 className={` ${color.txt} font-medium mt-5 font-opensans`}>Forgot your password? <br/> Oops! It happens, no need to worry!  <br/> Let's get you back in! </h3>

                {/* send mail form */}
                <form  className={`p-2 mt-10 `}>
                  <div className="flex flex-col gap-5">
                    <InputDesign id={"email"} value={email} onChange={(e)=> handelEmail(e)}  type={"text"} label={"email"} icon={<LuMailOpen/>} />
                      <Button type={"button"} text={"Send OTP"} style={"w-full py-2 font-ubuntu font-semibold  "} icon={<RiMailSendLine className='text-xl' />} />
                  </div>
                </form>

                {/* opt verification form */}
                <form  className={`p-2 mt-10 `}>
                  <div className="flex flex-col gap-5">
                    <InputDesign id={"otp"} value={opt} onChange={(e)=> handelotp(e)}  type={"text"} label={"code"} icon={<GoNumber/>} />
                      {/* <InputDesign id={"password"} value={password} onChange={(e)=> handelPassword(e)}  type={"password"} label={"password"} icon={<BsShieldLock/>} /> */}
                      <Button type={"button"} text={"Verify"} style={"w-full py-2 font-ubuntu font-semibold  "}  />
                  </div>
                </form>

                {/* opt verification form */}
                <form  className={`p-2 mt-10 `}>
                  <div className="flex flex-col gap-5">
                      <InputDesign id={"password"} value={password} onChange={(e)=> handelPassword(e)}  type={"password"} label={"password"} icon={<BsShieldLock/>} />
                      <Button type={"button"} text={"Update Password"} style={"w-full py-2 font-ubuntu font-semibold  "}  />
                  </div>
                </form>
        </div>
    </div>
  )
}
