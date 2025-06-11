import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className='w-full text-[#26011B]'>

        <div className="w-[90%] mx-auto">
            <p className="text-[32px] leading-[130%] tracking-[0%] text-center font-semibold  md:text-[45px] lg:text-[48px] xl:text-[56px] md:leading-[100%]">Built for Podcast Creators and Listeners</p>
            <div className="flex justify-center items-center gap-3 mt-2">
                <Image src="ava.svg" width={120} height={32} alt='podcast creator' className='md:w-[200px] h-[45px]' />
                <p className="text-[32px] leading-[130%] tracking-[0%] text-center font-semibold text-[#26011B] md:text-[45px] lg:text-[48px] xl:text-[56px] md:leading-[100%]">Echosphere</p>
            </div>
        </div>
<div className="w-[90%] mx-auto mt-4">
    <p className="font-normal text-[14px] text-center leading-[140%] md:w-[70%] md:text-[16px] md:mx-auto lg:text-[20px] lg:w-[60%] xl:w-[50%]">Welded on the blockchain, Echosphere is the new broadcast platform for podcasters and podcast lovers,</p>
</div>
    </section>
  )
}
