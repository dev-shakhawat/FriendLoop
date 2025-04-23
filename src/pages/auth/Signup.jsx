import React, { use, useState } from 'react'



// icons
import { FaRegAddressBook } from "react-icons/fa6";
import { RiMicrosoftLoopFill } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
import {InputDesign } from '../../components/input/InputDesign';
import { LuMailOpen } from "react-icons/lu";
import { BsShieldLock } from "react-icons/bs";


// colors
import colorSchema from '../../colors/colorSchema';
import { Button } from '../../components/button/Button';
import { Link } from 'react-router';



export const Signup = () => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const handelname = (e)=>{ 
    setName(e.target.value)
  }
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
                <h3 className={` ${ color.hoverbg} ${color.txt} font-medium mt-5 font-opensans`}>Chase your dreams, we're here every step of the way.<br/> Lets create your <span className={`font-ubuntu font-medium ${color.brand} `}>FriendLoop</span> account now. </h3>

                {/* signup form */}
                <form  className={`p-2 mt-10 `}>
                  <div className="flex flex-col gap-8">
                    <InputDesign id={"name"} value={name} onChange={(e)=> handelname(e)}  type={"text"} label={"full name"} icon={<SiNamecheap/>} />
                    <InputDesign id={"email"} value={email} onChange={(e)=> handelEmail(e)}  type={"text"} label={"email"} icon={<LuMailOpen/>} />
                    <InputDesign id={"password"} value={password} onChange={(e)=> handelPassword(e)}  type={"password"} label={"password"} icon={<BsShieldLock/>} />
                    <div className="">
                      <Button type={"button"} text={"Sign up"} style={"w-full py-2 font-ubuntu font-semibold  "} icon={<FaRegAddressBook/>} />
                      <p className={`font-ubuntu text-sm mt-1 ${color.txt}  ` }>By registering you agree to the FriendLoop <Link to="/" className={`font-semibold ${color.brand} `}>Terms of Use</Link></p>
                    </div>
                  </div>
                </form>
        </div>
    </div>
  )
}
