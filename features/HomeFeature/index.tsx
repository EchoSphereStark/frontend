import React from 'react'
import RecentlyPlayed from './components/RecentlyPlayed';
import PickedPlayed from './components/PickedPlayed';
import Espresso from './components/Espresso';

export default function index() {
 
  const titles = ['All', 'Trending', 'Starknet Espresso', 'AI', 'Gaming', 'Web 3.0', 'Mixes', 'Music', 'Zero Knowledge', 'Cameras', 'News', 'Recent Upload'];
  return (
    <main>
      <section className="">
        {/* button */}
        <div className="flex gap-2 w-[96%] mx-auto mt-4 flex-wrap">
          {
            titles.map((title, index)=>(
              <div className="" key={index}>
                <button className='border-1 px-2 border-[#e7dfdf] rounded-full'>

                {title}
                </button>
              </div>
            ))
          }
        </div>
      </section>

      {/* Recently Played */}
      <section className="w-[96%] mx-auto mt-4">
        <h2 className="text-[27px] font-semibold ">
          Recently Played
        </h2>
        <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
          <RecentlyPlayed />
          <RecentlyPlayed />
          <RecentlyPlayed />
          <RecentlyPlayed />
        </div>
        
      </section>
      {/* Picked for you */}
      <section className="w-[96%] mx-auto mt-4">
        <h2 className="text-[27px] font-semibold ">
          Picked For You
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 gap-4">
          <PickedPlayed/>
          <PickedPlayed/>
          <PickedPlayed/>
          <PickedPlayed/>
        </div>
      </section>
      {/* Starknet Espresso */}
      <section className="w-[96%] mx-auto mt-4">
        <h2 className="text-[27px] font-semibold ">
          Starknet Espresso
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full justify-items-center">
          <Espresso textStyle='black' borderColor='grey'/>
          <Espresso textStyle='black' borderColor='grey'/>
          <Espresso textStyle='black' borderColor='grey'/>
          <Espresso textStyle='black' borderColor='grey'/>
        </div>
      </section>
      {/* New Episodes */}
      <section className="w-[96%] mx-auto mt-4">
        <h2 className="text-[27px] font-semibold ">
          New Episodes
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full justify-items-center">
          <Espresso textStyle='black' borderColor='grey'/>
          <Espresso textStyle='black' borderColor='grey'/>
          <Espresso textStyle='black' borderColor='grey'/>
          <Espresso textStyle='black' borderColor='grey'/>
        </div>
      </section>
    </main>
  )
}
