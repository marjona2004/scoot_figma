import React from 'react'
import hero_round from "/public/mock-image/careers-images/hero_round.svg"
import hero_bg from "/public/mock-image/about-images/about_bg.svg"
export const Hero = () => {
  return (
    <div className="bg-[url('/public/mock-image/about-images/about_bg.svg')] flex ">  
    <div className='container  py-[62px] text-[white]'>
        <h1 className='text-[56px] font-bold leading-12 pl-[100px]'>About</h1>
    </div>
    <div>
    <img src={hero_round} alt="" className='pt-[70px]'/>
    </div>
    </div>

    
  )
}
