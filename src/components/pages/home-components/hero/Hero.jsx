import React from 'react'
import { Button } from '../../../common/button/Button'

import header_img_line_one from "/public/mock-image/hero_img/header_line.svg"
import header_img_line_two from "/public/mock-image/hero_img/header_line_two.svg"
import hero_round from "/public/mock-image/careers-images/hero_round.svg" 
import hero_bg from "/public/mock-image/hero_img/bg.png"  


export const Hero = () => {
  return (
    <div className="relative   lg:bg-[url('/public/mock-image/hero_img/bg.png')]  md:bg-[url('/public/mock-image/hero_img/bg.png')] max-sm:bg-[url('/public/mock-image/hero_img/bg.png')] lg:bg-cover  md:pb-[100px] max-sm:py-[40px]">
        <div className='container md:py-[163px] lg:py-[163px] '>
              <h1 className='text-[56px] lg:font-bold leading-11 text-white lg:text-start  md:text-center max-sm:text-center max-sm:pt-[125px]'>
              Scooter sharing <br /> made simple
              </h1>
              <p className='lg:py-[40px] lg:pl-[95px] lg:leading-6 md:py-[40px] text-white md:text-center  lg:text-start max-sm:text-center max-sm:my-[50px]'>
              Scoot takes the hassle out of urban mobility. Our bikes <br />
               are placed in convenient locations in each of our cities. <br />
                Use our app to locate the nearest bike, unlock it with  a <br />
                 tap, and you’re away!
              </p>
              <div className='md:text-center lg:text-start max-sm:text-center max-sm:pb-[50px]'>
              <Button>Get Scootin</Button>
              </div>
          
        </div>

         <img src={header_img_line_one} alt="" className='lg:absolute lg:top-[410px] lg:w-[250px] md:hidden  lg:block max-sm:hidden'/>
         <img src={header_img_line_two} alt="" className='lg:absolute lg:top-[400px] lg:left-[750px] md:absolute md:top-[650px] max-sm:w-[250px]'/>
         <img src={hero_round} alt="" className='lg:absolute lg:top-[470px]  lg:right-0 md:absolute md:top-[720px] md:right-0 max-sm:hidden' />

         
    </div>
  )
}
