"use client"
import Image from 'next/image'

import { LuUser } from "react-icons/lu";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';

export default function Navbar() {
    const [openNav, setOpenNav] = useState<boolean>(false);
    return (
        <main className='w-full'>
            <section className="w-[90%] mx-auto flex justify-between items-center mt-[8px]">
                <div className="">
                    <Image
                        src="logo.svg"
                        width={99}
                        height={60}
                        alt="home of podcast"
                        className="w-[73px] h-[44px] md:w-[99px] md:h-[60px]"
                    />
                </div>
                <div className="">
                    <ul className="hidden md:flex text-[16px] gap-8 leading-[100%] tracking-[0px] text-[#26011B]">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Podcasts</li>
                        <li className="cursor-pointer">Creators</li>
                        <li className="cursor-pointer">About</li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <button className='bg-[#C51C71] border-[#26011B] border-[1px] flex items-center gap-4 py-[16px] px-[36px] text-white rounded-[96px]'>
                        <p className="text-[16px] font-semibold ">Register</p>
                        <LuUser className='text-[24px]' />
                    </button>
                </div>

                <div className="md:hidden">
                    <IoMenuSharp size={24} className='cursor-pointer' onClick={() => setOpenNav(!openNav)} />
                </div>
            </section>


            <section className="" >

            {
            openNav &&
                <div className="absolute w-[200px] right-[5%]">
                    <div className="flex flex-col gap-4">
                        <ul className=" flex flex-col text-[16px] gap-4 leading-[100%] tracking-[0px] text-[#26011B]">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">Podcasts</li>
                            <li className="cursor-pointer">Creators</li>
                            <li className="cursor-pointer">About</li>
                        </ul>

                        <button className='bg-[#C51C71] border-[#26011B] border-[1px] flex items-center gap-4 py-[16px] px-[36px] text-white rounded-[96px]'>
                            <p className="text-[16px] font-semibold ">Register</p>
                            <LuUser className='text-[24px]' />
                        </button>

                    </div>

                </div>
            }
            </section>

        </main>
    )
}
