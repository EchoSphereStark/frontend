import Image from 'next/image'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";


export default function PodcastCard({textStyle, borderColor}:{textStyle:string, borderColor:string}) {
  return (
    <div className={`w-[340px] sm:w-[340px] md:w-[238px] lg:w-[260px] xl:w-[310px] 2xl:w-[335px] border-[1px] ${borderColor ? borderColor :'border-[#FFF9E9]'} rounded-lg flex justify-center py-4`}>
      <div className="w-[310px] sm:w-[310px] md:w-[230px] lg:w-[240] xl:w-[280px]">

      <div className="relative">
        <div className="relative">
            <Image src="/image 3.png" alt="podcast video" width={240} height={141} className='rounded-lg w-[310px] xl:w-[280px]' />

        </div>

        <div className="absolute bottom-2 right-4 ">
            <FaPlayCircle size={30} className='text-[#AE055A]'/>
        </div>

      </div>
        <div className="flex justify-between items-center mt-2">
          <div className="border-[1px] bg-[#EFE47E] rounded-full py-4 px-2">
            <p className="text-[#26011B] font-normal text-[12px] leading-0">Starknet Esspreso</p>
          </div>
          <div className={`flex gap-1 items-center ${textStyle ? textStyle : 'text-[#FFF9E9]'}`}>
            <FaRegClock size={16} className=''/>
            <p className=" font-normal text-[12px] leading-0">10 Minutes</p>
          </div>
        </div>
        <div className={`mt-4 ${textStyle ? textStyle : 'text-[#FFF9E9]'}`}>
          <h2 className=" font-bold text-[20px] leading-0">These are the Issues</h2>
          <p className="mt-4 text-[12px]leading-[0px] ">Latest updates, insights, and conversations on all things Starknet. Tune in for interviews and latest gists in the Starknet Ecosytem. </p>
        </div>
        
      </div>
     
    </div>
  )
}
