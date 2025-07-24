import React from "react"; 
import { SlArrowDown } from "react-icons/sl";
import colorSchema from "../../../colors/colorSchema";

export default function MenuProfile() {

    const color = colorSchema()
  return (
    <div style={{ background: color.bg }} className="flex flex-col mt-3  menuBox items-start px-2 py-1 rounded-[5px] ">

        {/* menu profile */}
      <div className="flex   items-center w-full pb-1 gap-1">
        <div className="flex-1">
          <img
            src={""}
            alt="profile"
            className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer "
          />
        </div>

        <button type="button">

        </button>
          <SlArrowDown className="  cursor-pointer" />
      </div>


    </div>
  );
}
