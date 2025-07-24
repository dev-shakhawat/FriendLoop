import React from 'react'
import { RiMicrosoftLoopFill } from 'react-icons/ri'
import { Link } from 'react-router'
import colorSchema from '../../colors/colorSchema';

export default function Logo() {
    const color = colorSchema();
  return (
    <Link to={`/`}
    style={{ color: color.brand }}
    className={` flex items-center gap-2 font-ubuntu font-bold text-3xl justify-center `}
  >
    <RiMicrosoftLoopFill />
    <span>FriendLoop</span>
  </Link>
  )
}
