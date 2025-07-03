import Image from 'next/image'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <main className='text-[#FFFBE8]'>
            <section className="w-[90%] mx-auto pt-[50px]">
                <div className="mt-[40px]">
                    <div className="">
                        <p className="text-[18px] md:text-[24px] font-bold md:text-center text-[black]">
                            All your favorite podcasts, on-chain!
                        </p>
                        <p className='text-[18px] md:text-[24px] font-bold md:text-center  text-[#BFBBB3]'>
                            Echosphere is absolutely free to use.
                        </p>

                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mt-12 border-b-[1px] gap-4 md:gap-0 mb-2 pb-[40px] border-b-black">
                    <div className="flex flex-col md:flex-row  gap-4 text-black md:gap-[50px]">
                        <h4 className="text-[18px] font-medium">About</h4>
                        <h4 className="text-[18px] font-medium">Subscribe</h4>
                    </div>
                    <div className="">
                        <Image src="/logo.svg" alt="echosphere" width={99} height={66} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-[50%] md:w-[100%] gap-4 md:justify-center pb-8 pt-8">
                    <div className="border-[1px] border-black flex items-center p-4 gap-3 rounded-full">
                        <FaXTwitter size={24} className='text-black' />
                        <p className="text-[18px] text-black font-semibold">Twitter</p>
                    </div>
                    <div className="border-[1px] border-black flex items-center p-4 gap-2 rounded-full">
                        <AiFillInstagram  size={24} className='text-black' />
                        <p className="text-[18px] text-black font-semibold">Instagram</p>
                    </div>
                    <div className="border-[1px] border-black flex items-center p-4 gap-2 rounded-full">
                        <FaFacebook size={24} className='text-black' />
                        <p className="text-[18px] text-black font-semibold">Facebook</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
