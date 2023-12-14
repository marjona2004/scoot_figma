import React from 'react'
import hero_round from "/public/mock-image/careers-images/hero_round.svg"

export const Hero = () => {
  return (
  
     <div className="bg-[url('/public/mock-image/careers-images/careers_bg.svg')] flex justify-between py-[70px] ">
        <div className='text-white text-[56px] font-bold leading-12  lg:pl-[180px] md:pl-[100px] max-sm:pl-[150px] '>
          Careers
        </div>
        <img src={hero_round} alt="" className='max-sm:hidden'/>
      </div>
  
  
  )
}
