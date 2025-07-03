import Image from 'next/image'
import React from 'react'
import { TfiHome } from "react-icons/tfi";
import { BsPlusCircle } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaPodcast } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { MdVideoLibrary } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";

export default function Sidebar() {
  return (
    <section className='w-[200px] max-w-[200px]'>
        <section className="w-[90%] mx-auto pt-4">
        <div className="border-b-[1px] border-[#d4cbb9] pb-2">
            <Image src="/logo.svg" alt='logo' width={100} height={100} />
        </div>

        <section className="border-b-[1px] border-[#d4cbb9] pb-4">
            <div className="mt-4 w-[90%] mx-auto">
                <p className="text-[12px] font-medium text-[#BCBAB7]">Main Menu</p>
            </div>
            <div className="mt-2 items-center hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex items-center w-[90%] mx-auto gap-1">
                    <TfiHome size={16}/>
                    <p className="text-[14px] font-medium">Home</p>
                </div>
            </div>
            <div className=" hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex items-center w-[90%] mx-auto gap-1">
                    <BsPlusCircle size={16}/>
                    <p className="text-[14px] font-medium">New Podcast</p>
                </div>
            </div>
            <div className=" hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex items-center w-[90%] mx-auto gap-1">
                    <BsCollectionPlay size={16}/>
                    <p className="text-[14px] font-medium">Manage Episode</p>
                </div>
            </div>

        </section>
        <section className="border-b-[1px] border-[#d4cbb9] pb-4">
           
            <div className="mt-2 hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex items-center w-[90%] mx-auto gap-1">
                    <FaPodcast size={16}/>
                    <p className="text-[14px] font-medium">Your Podcast</p>
                </div>
            </div>
            <div className=" hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex items-center w-[90%] mx-auto gap-1">
                    <GoHistory size={16}/>
                    <p className="text-[14px] font-medium">History</p>
                </div>
            </div>
            <div className=" hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex items-center w-[90%] mx-auto gap-1">
                    <MdVideoLibrary size={16}/>
                    <p className="text-[14px] font-medium">Library</p>
                </div>
            </div>
            <div className=" hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex items-center w-[90%] mx-auto gap-1">
                    <AiOutlineLike size={16}/>
                    <p className="text-[14px] font-medium">Liked podcasts</p>
                </div>
            </div>

        </section>
        <section className=" border-[#d4cbb9] pb-4">
            <div className="mt-4 w-[90%] mx-auto">
                <p className="text-[12px] font-medium text-[#BCBAB7]">System</p>
            </div>
            <div className="mt-2 hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex w-[90%] items-center mx-auto gap-1">
                    <GrAnalytics size={16}/>
                    <p className="text-[14px] font-medium">Analytics</p>
                </div>
            </div>
            <div className=" hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex w-[90%] items-center mx-auto gap-1">
                    <GiSettingsKnobs size={16}/>
                    <p className="text-[14px] font-medium">Preferences</p>
                </div>
            </div>
            <div className=" hover:bg-[#FFDCEE] p-2 hover:rounded-lg cursor-pointer">
                <div className="flex w-[90%] items-center mx-auto gap-1">
                    <IoSettingsOutline size={16}/>
                    <p className="text-[14px] font-medium">Settings</p>
                </div>
            </div>

        </section>
        </section>
    </section>
  )
}
