import React, { use, useState } from 'react'



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



export const Login = () => {

  
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const handelEmail = (e)=>{ 
    setEmail(e.target.value)
  }
  const handelPassword = (e)=>{ 
    setPassword(e.target.value)
  }

  const color = colorSchema()

  
  return (
    <div className={`grid place-items-center h-screen ${color.bg} `}>
        <div className="text-center px-4 ">
                <h2 className={` flex items-center gap-2 font-ubuntu font-bold text-3xl justify-center ${color.brand}`}><RiMicrosoftLoopFill/><span>FriendLoop</span></h2>
                <h3 className={` ${color.txt} font-medium mt-5 font-opensans`}>Welcome back! <br/> Missed us? We missed you too.  <br/> Let’s get you connected. </h3>

                {/* login form */}
                <form  className={`p-2 mt-10 `}>
                  <div className="flex flex-col gap-5">
                    <InputDesign id={"email"} value={email} onChange={(e)=> handelEmail(e)}  type={"text"} label={"email"} icon={<LuMailOpen/>} />
                    <div className="flex flex-col items-end w-full ">
                      <Link to={"/resetpassword"} className={`font-opensans hover:underline  text-sm mt-1 ${color.txt}   `}  >Forgot Password?</Link>
                      <InputDesign id={"password"} value={password} onChange={(e)=> handelPassword(e)}  type={"password"} label={"password"} icon={<BsShieldLock/>} />
                    </div>
                    <div className="">
                      <Button type={"button"} text={"Login"} style={"w-full py-2 font-ubuntu font-semibold  "} icon={<AiOutlineLogin className='text-xl' />} />
                      
                      <p className={`font-ubuntu text-sm mt-1 ${color.txt}  ` }>If you haven't created an account, <Link to="/signup" className={`font-semibold ${color.brand} `}>Sign Up</Link> now. </p>
                    </div>
                  </div>
                </form>
        </div>
    </div>
  )
}
