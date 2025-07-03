import Image from 'next/image'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";


export default function PodcastCard() {
  return (
    <div className='w-[280px] border-[1px] border-[#FFF9E9] rounded-lg flex justify-center py-4'>
      <div className="w-[240px]">

      <div className="relative">
        <div className="relative">
            <Image src="/image 3.png" alt="podcast video" width={240} height={141} className='rounded-lg' />

        </div>

        <div className="absolute bottom-2 right-4 ">
            <FaPlayCircle size={30} className='text-[#AE055A]'/>
        </div>

      </div>
        <div className="flex justify-between items-center mt-2">
          <div className="border-[1px] bg-[#EFE47E] rounded-full py-4 px-2">
            <p className="text-[#26011B] font-normal text-[12px] leading-0">Starknet Esspreso</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegClock size={16} className='text-[#FFF9E9]'/>
            <p className="text-[#FFF9E9] font-normal text-[12px] leading-0">10 Minutes</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-[#FFF9E9] font-bold text-[20px] leading-0">These are the Issues</h2>
          <p className="mt-4 text-[12px]leading-[0px] text-[#FFF9E9]">Latest updates, insights, and conversations on all things Starknet. Tune in for interviews and latest gists in the Starknet Ecosytem. </p>
        </div>
        
      </div>
      {/* <p className="text-[#FFF9E9] font-bold text-[20px] leading-0">These are the Issues</p>
       */}
       
      {/* </div> */}
     
    </div>
  )
}
