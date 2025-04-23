import React, { use, useState } from 'react'



// icons
import { RiFriendicaFill } from "react-icons/ri";
import { RiMicrosoftLoopFill } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
import {InputDesign } from '../../components/input/InputDesign';


// colors
import colorSchema from '../../colors/colorSchema';
import { useDispatch, useSelector } from 'react-redux';
import { isTheme } from '../../redux/slices/themeSlice';



export const Signup = () => {


  const istheme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const hudai = () => {
    dispatch(isTheme(true))
  }

  const faltu = () => {
    dispatch(isTheme(false))
  }
  let [name , setName] = useState("")
  const handelname = (e)=>{ 
    setName(e.target.value)
    
  }

  const color = colorSchema()

  
  return (
    <div className={`grid place-items-center h-screen ${color.bg} `}>
        <div className="text-center">
                <h2 onClick={hudai}  className={` flex items-center gap-2 font-ubuntu font-bold text-3xl justify-center ${color.brand}`}><RiMicrosoftLoopFill/><span>FriendLoop</span></h2>
                <h3 onClick={faltu} className={` ${ color.hoverbg} ${color.txt} font-medium p-5 mt-10 font-opensans`}>Lets create your <span className={`font-ubuntu font-medium ${color.brand} `}>FriendLoop</span> account now. </h3>

                {/* signup form */}
                <form action="POST" className="p-2 ">
                   
                   <div className="">
                      <InputDesign value={name} onChange={(e)=> handelname(e)}  type={"text"} label={"name"} icon={<SiNamecheap/>} />
                   </div>
                </form>
        </div>
    </div>
  )
}
