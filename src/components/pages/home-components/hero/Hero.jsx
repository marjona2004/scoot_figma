import React from 'react'
import { Button } from '../../../common/button/Button'

import header_img_line_one from "/public/mock-image/hero_img/header_line.svg"
import header_img_line_two from "/public/mock-image/hero_img/header_line_two.svg"
import hero_round from "/public/mock-image/careers-images/hero_round.svg" 
import hero_bg from "/public/mock-image/hero_img/bg.png"  


export const Hero = () => {
  return (
    <div className="relative   lg:bg-[url('/public/mock-image/hero_img/bg.png')] md:bg-[url('/public/mock-image/hero_img/bg.png')]  lg:bg-cover  md:pb-[100px]">
        <div className='container lg:py-[163px] md:py-[163px]'>
              <h1 className='text-[56px] font-bold leading-11 text-white md:text-center'>
              Scooter sharing <br /> made simple
              </h1>
              <p className='
              lg:py-[40px] lg:pl-[95px] lg:leading-6 md:py-[40px] text-white md:text-center  '>
              Scoot takes the hassle out of urban mobility. Our bikes <br />
               are placed in convenient locations in each of our cities. <br />
                Use our app to locate the nearest bike, unlock it with  a <br />
                 tap, and you’re away!
              </p>
              <div className='md:text-center '>
              <Button>Get Scootin</Button>
              </div>
          
        </div>
         <img src={header_img_line_one} alt="" className='lg:absolute lg:top-[410px] lg:w-[250px] md: hidden'/>
         <img src={header_img_line_two} alt="" className='lg:absolute lg:top-[400px] lg:left-[750px] md:absolute md:top-[650px] '/>
         <img src={hero_round} alt="" className='lg:absolute lg:top-[470px]  lg:right-0 md:absolute md:top-[720px] md:right-0' />
    </div>
  )
}
