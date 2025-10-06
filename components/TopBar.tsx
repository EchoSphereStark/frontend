import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import Image from 'next/image';
import { IoMdMenu } from "react-icons/io";
import { usePathname } from 'next/navigation'

export default function TopBar() {
   
    const pathname = usePathname();
    console.log(pathname)
    return (
        <main>
            <section className='w-[96%] mx-auto'>
                <section className="pt-4 flex justify-between">
                <div className="flex items-center lg:hidden">
                <Image src="/logo.svg" alt='logo' width={80} height={80} />
                </div>


                    {pathname !== "/podcasts" ? <div className={`hidden md:flex items-center w-[60%] h-[48px] border-[2px] rounded-full border-[#EEEEEE] hover:border-[black] `}>
                        <input
                            type="text"
                            placeholder="What do you want to listen to?"
                            className="w-[93%] h-full outline-none focus:outline-none focus:ring-0 border-0 px-4 text-[16px]"
                        />
                        <div className="w-[7%] h-full flex items-center justify-center bg-[#EEEEEE] rounded-r-full">
                            <IoSearchOutline size={16} className="text-black" />

                        </div>

                    </div>
                    : <div className=""></div>
                    }

                    <div className={`hidden md:flex items-center gap-4 ${pathname === "/podcasts" && "justify-end"}`}>

                        <div className="flex items-center gap-4 h-[48px] border-[1px] px-4 rounded-full">
                            <p className="text-[16px]">Upload New Podcast</p>
                            <GoPlusCircle size={16} />

                        </div>
                        <div className="w-[48px] h-[48px] border-[1px] flex items-center justify-center rounded-full border-[#C51C71]">
                            <Image src="/Avatar.png" alt="" width={40} height={40} className='rounded-full' />
                        </div>
                    </div>

                    <div className="flex items-center lg:hidden">
                        <IoMdMenu size={24}/>
                    </div>

                </section>


            </section>
        </main>
    )
}
