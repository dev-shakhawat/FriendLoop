import React, { useRef } from "react";
import colorSchema from "../../colors/colorSchema";

export const InputDesign = ({ type, label , icon , onChange , value }) => {

  const color = colorSchema()

  return (
    <div className={`relative flex items-center border rounded-md h-[40px] ${color.border}   `}>

      {/* icon  */}
      {icon &&   <div className={`px-2 bg-brand/20 h-full grid place-items-center ${color.txtsecondery} ${color.bgsecondery} rounded-tl-md rounded-bl-md   `}> {icon} </div> }

      {/* input box */}
      <div className=" w-full h-full     ">
        <input 
          value={value}
          type={type}
          onChange={onChange} 
          id="floatingInput"
          placeholder=" "
          className={`peer ${type == "password" ? "filter blur-[5px]" : ""} pl-1 pr-8  w-full h-full   text-gray-900 placeholder-transparent outline-none  `}
        />
        <label
          htmlFor="floatingInput"
          className={`absolute top-[-10px]  left-0  text-gray-500 text-sm transition-all 
           peer-placeholder-shown:top-[17px] 
           translate-y-[-50%]
           peer-placeholder-shown:left-[35px] 
           ${!value && "peer-focus:animate-inputlabel" }
           peer-focus:top-[-10px]
           peer-focus:left-0
           capitalize `}
        >
          {label}
        </label>
      </div>
    </div>
  );
};
