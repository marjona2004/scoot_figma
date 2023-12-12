import React from 'react'
import hero_round from "/public/mock-image/careers-images/hero_round.svg"   
export const Hero = () => {
  return (
    <div className='bg-[#2F3B59]   flex justify-between py-[70px]'>
    <div className='text-white text-[56px] font-bold leading-12  lg:pl-[230px] md:pl-[100px] max-sm:pl-[100px]'>
    Locations
    </div>
    <img src={hero_round} alt=""className='max-sm:hidden' />
  </div>
  )
}
