import React from "react";

export const InputDesign = ({ type, label , icon }) => {
  return (
    <div className=" relative flex items-center border h-[40px] peer-placeholder-shown:border-t-transparent   ">

      {/* icon  */}
      {icon &&   <div className=" px-2 bg-brand/20 h-full grid place-items-center   "> {icon} </div> }

      {/* input box */}
      <div className=" w-full h-full     ">
        <input
          type={type}
          id="floatingInput"
          placeholder=" "
          className={`peer ${type == "password" ? "filter blur-[5px]" : ""}  pl-3 w-full h-full   text-gray-900 placeholder-transparent outline-none  `}
        />
        <label
          htmlFor="floatingInput"
          className="absolute left-2 text-gray-500 text-sm transition-all 
           peer-placeholder-shown:top-[50%] 
           translate-y-[-50%]
           peer-placeholder-shown:text-base 
           peer-placeholder-shown:text-gray-400 
           peer-focus:top-[-10px] 
           peer-focus:left-[-10px] 
           peer-focus:text-sm 
           peer-focus:text-brand 
           top-0   "
        >
          {label}
        </label>
      </div>
    </div>
  );
};
