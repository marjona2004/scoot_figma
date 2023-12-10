import React from 'react'
import { Button } from '../../common/button/Button'
import nav_img from "/public/mock-image/nav_img/logo.svg"
export const Navbar = () => {
  return (
    <div className='container '>
      <div className='lg:flex lg:justify-between lg:gap-[30px]  py-[22px] md:flex md:gap-[150px] md:px-[32px] md:py-[22px]'>
        <div className='lg:flex lg:gap-[59px] md:gap-[59] md:flex'>
            <img src={nav_img} alt="" className=''/>
            <ul className='lg:flex lg:gap-[32px] lg:pt-[15px] md:flex md:gap-[32px] md:pt-[15px] md:pl-[30px] '>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer'>About</a></li>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold hover:text-orange hover:cursor-pointer'>Location</a></li>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer'>Careers</a></li>
            </ul>
        </div>
        <div>
        <Button>Get Scootin</Button>
        </div>
      </div>
    
    </div>
  )
}
