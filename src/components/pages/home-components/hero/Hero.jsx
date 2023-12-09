import React from 'react'
import { Button } from '../../../common/button/Button'

import header_img_line_one from "/public/mock-image/hero_img/header_line.svg"
import header_img_line_two from "/public/mock-image/hero_img/header_line_two.svg"
import hero_round from "/public/mock-image/careers-images/hero_round.svg"   


export const Hero = () => {
  return (
    <div className="relative  bg-[#2F3B59]">
        <div className='container py-[163px]'>
              <h1 className='text-[56px] font-bold leading-11 text-white'>
              Scooter sharing <br /> made simple
              </h1>
              <p className='py-[40px] pl-[95px] leading-6 text-white'>
              Scoot takes the hassle out of urban mobility. Our bikes <br />
               are placed in convenient locations in each of our cities. <br />
                Use our app to locate the nearest bike, unlock it with  a <br />
                 tap, and you’re away!
              </p>
            <Button>Get Scootin</Button>
        </div>
         <img src={header_img_line_one} alt="" className='absolute top-[410px] w-[250px] '/>
         <img src={header_img_line_two} alt="" className='absolute top-[400px] left-[750px]'/>
         <img src={hero_round} alt="" className='absolute top-[470px]  right-0' />
    </div>
  )
}
