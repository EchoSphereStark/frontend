import Image from 'next/image'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

export default function RecentlyPlayed() {
  return (
    <div className="border-[1px] border-[#AAAAAA] rounded-lg h-full flex flex-col lg:w-[255px] xl:w-[320px] 2xl:w-[350px]">
      <div className="flex sm:flex-row gap-4 lg:gap-2 p-4 items-center h-full lg:px-2 xl:gap-4 ">
        <div className="rounded-lg object-cover flex-shrink-0">
          <Image
            src="/image 4.png"
            alt="starknet recently played"
            width={80}
            height={80}
            className="rounded-lg w-20 h-20 sm:w-20 sm:h-20 object-cover"
            style={{ width: '80px', height: '80px' }}
          />
        </div>
        <div className="flex sm:flex-row items-center gap-18 sm:gap-2 xl:gap-10 flex-1">
          <h4 className="text-[18px] sm:text-[18px] md:text-[18px] xl:text-[20px] leading-[1.2] font-normal text-left w-[120] sm:w-[150px] md:w-[90px] xl:w-[104px]">
            Last Week Was Friday
          </h4>
          <FaPlayCircle size={40} className="text-[#b03959] sm:size-[48px]" />
        </div>
      </div>
    </div>
  )
}
