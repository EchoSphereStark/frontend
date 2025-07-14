import Image from 'next/image'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

export default function PickedPlayed() {
  return (
    <div className=''>
        <div className="relative">
            <div className="relative">
            <Image src="/image5.png" alt="" width={240} height={240} className='w-[100%] object-cover rounded-lg'  />
            </div>
            <div className="absolute bottom-14 right-8 ">
            <FaPlayCircle size={40} className="text-[#b03959] sm:size-[48px]" />
            </div>
            <h4 className="text-[20px] font-semibold mt-2">No Excuses</h4>
        </div>
    </div>
  )
}
