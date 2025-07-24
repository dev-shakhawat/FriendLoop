import React from "react";
import colorSchema from "../../../colors/colorSchema";
import { Link } from "react-router";

export default function MenuTab({className , icon , text , link , style}) {
    const color = colorSchema();
  return (
    <Link to={link} style={style} className={` ${className} flex items-center gap-x-2 capitalize pl-2 py-1 rounded-[5px] font-ubuntu`}>
      <button  type="button" className="">{icon}</button>
      <span style={{ color: color.txt }}>{text}</span>
    </Link>
  );
}
