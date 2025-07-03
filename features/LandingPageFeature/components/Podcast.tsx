import Button from '@/components/Button'
import PodcastCard from '@/components/PodcastCard'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

export default function Podcast() {
    return (
        <main className='bg-[#26011B] pb-4'>
            <section className="w-[90%] mx-auto pt-[64px]">
                <div className="relative mt-4">
                    <div className="text-[#FFF9E9] pt-[50px]">
                        <h3 className="text-[32px]  text-center font-semibold leading-[100%] md:text-[40px]">Find All Your Favorite Podcast Here</h3>
                        <p className="text-[14px] leading-[130%] font-normal text-center w-[70%] mx-auto mt-4 md:text-[20px] md:w-[90%]">Watch and listen to your favorite podcasts on Echosphere</p>

                    </div>
                    <div className="bg-[#FFE982] border-[3px] border-[#E0B63B] absolute top-0 px-4 rounded-full rotate-6">
                        <h4 className="text-[12px] font-nornmal md:text-[24px] md:font-medium">Your favorite podcasts</h4>

                    </div>
                </div>

                <section className='flex gap-4 mt-10 flex-wrap justify-center'>
                    <PodcastCard/>
                    <PodcastCard/>
                    <PodcastCard/>
                    <PodcastCard/>
                    <PodcastCard/>


                </section>

                <div className="flex justify-center mt-12">
                    <Button text="Explore Podcast" bg="#C51C71" bg_color="#26011B" icon={FaPlayCircle} />
                </div>
            </section>

        </main>
    )
}
