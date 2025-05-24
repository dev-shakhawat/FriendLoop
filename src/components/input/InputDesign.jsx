import React, { useRef } from "react";
import colorSchema from "../../colors/colorSchema";

// icons
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

export const InputDesign = ({ type, label , icon , onChange , value , id}) => {

  const color = colorSchema()
  const [inpType , setInpType] = React.useState(type)

  return (
    <div className={`relative flex items-center rounded-md h-[40px] border  w-full  `} style={{borderColor: color.borderColor}}>

      {/* icon  */}
      {icon &&   <div style={{color: color.txt , background: color.bgSecondery}} className={`px-2 bg-brand/20 h-full grid place-items-center    rounded-tl-md rounded-bl-md   `}> {icon} </div> }

      {/* input box */}
      <div className=" w-full h-full     ">
        <input 
          value={value}
          type={inpType}
          onChange={onChange} 
          id={id}
          placeholder=" "
          style={{color: color.txt , }}
          className={`peer  ${inpType == "password" ? "filter blur-[3px]" : ""} pl-1 pr-8 text-[14px] w-full h-full font-ubuntu placeholder-transparent outline-none  `}
        />
        {type == "password" &&
          <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">{inpType == "password" ? <GoEyeClosed onClick={()=> setInpType("text")} style={{color : color.textSecondery}} /> : <GoEye onClick={()=> setInpType("password")} style={{color : color.textSecondery}} />}</button>
        }
        <label
          htmlFor={id}
          style={{color: color.txt}}
          className={`absolute top-[-10px]  left-0  text-gray-500 text-sm transition-all 
           peer-placeholder-shown:top-[19px] 
           translate-y-[-50%]
           peer-placeholder-shown:left-[35px] 
           ${!value && "peer-focus:animate-inputlabel" }
           peer-focus:top-[-10px]
           peer-focus:left-0
           capitalize font-ubuntu font-medium  `}
        >
          {label}
        </label>
      </div>
    </div>
  );
};
