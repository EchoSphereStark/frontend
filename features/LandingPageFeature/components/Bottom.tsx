import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

import { FaCirclePlay } from "react-icons/fa6";

export default function Bottom() {
  return (
    <main className='mt-8'>
        <section className="w-[90%] mx-auto bg-[#26011B] rounded-[16px] md:rounded-[56px]">
            <div className="w-[90%] flex flex-col-reverse lg:flex-row gap-2 mx-auto mb-4 ">
                <div className="lg:w-[50%] ">
                    <Image src="/Frame 427319748 (1).svg" alt="" width={100} height={100} className='w-full'/>
                </div>
                <div className="lg:w-[50%] flex flex-col justify-center ">
                    <h4 className="font-semibold text-[24px] md:text-[30px] mt-4 md:mt-8 lg:mt-0 lg:text-[40px] leading-[100%] text-[#FFF9E9] tracking-[0%]">Become a podcast creator and listener with Echosphere Today!</h4>
                    <p className="text-[14px] md:text-[16px] font-normal leading-[120%] tracking-[0%] mt-4 text-[#FFF9E9]">Echosphere has made it seamless for podcast creator to publish their podcasts on-chain. Join the train of podcast creators to get started. You can also listen to your favorite podcast right here!</p>
                    <div className="mt-4 flex flex-col gap-4 w-[70%] md:flex-row lg:w-[100%]">
                        <Button text="Create Podcast" bg="#C51C71" bg_color="#26011B" icon={FaArrowCircleRight} />
                        <Button text="Explore Podcast" bg="" bg_color="#FFF9E9" icon={FaCirclePlay} />
                    </div>
                </div>
            </div>

        </section>
    </main>
  )
}
