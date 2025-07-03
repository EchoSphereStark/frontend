import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  text: string;
  bg: string;
  bg_color:string;
  icon: IconType;
}

export default function Button({ text, bg, bg_color, icon: Icon }: ButtonProps) {
  return (
    <button className={`flex gap-2 items-center border-[1px] border-[${bg_color}] bg-[${bg}] px-4 py-4 rounded-full`}>
        <p className="font-semibold text-[16px] leading-[100%] text-white">{text}</p>
        <Icon size={32.5} className="text-white"/>
    </button>
  )
}
