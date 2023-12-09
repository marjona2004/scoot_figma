import React from 'react'
import { Button } from '../../common/button/Button'
import nav_img from "/public/mock-image/nav_img/logo.svg"
export const Navbar = () => {
  return (
    <div className='container'>
      <div className='flex justify-between py-[22px] '>
        <div className='flex gap-[59px]'>
            <img src={nav_img} alt="" />
            <ul className='flex gap-[32px] pt-[15px] '>
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
