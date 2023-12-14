import React from 'react'
import { Button } from '../../common/button/Button'
import nav_img from "/public/mock-image/nav_img/logo.svg"
import burger from "/public/mock-image/nav_img/burger.svg"
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

export const Navbar = (props) => {
  return (
    <div className='container'>
      <div className='dark:bg-gray-900 dark:text-white lg:flex lg:justify-between lg:gap-[30px]  py-[22px] md:flex md:gap-[150px] md:px-[32px] md:py-[22px] max-sm:flex'>
        <div className='lg:flex lg:gap-[59px] md:gap-[59] md:flex max-sm:py-[24px]'>
          <img src={burger} alt="" className='max-sm:pl-[32px] lg:hidden md:hidden max-sm:text-center dark:text-white' />
            <img src={nav_img} alt="" className='max-sm:pl-[150px] max-sm:mt-[-28px]'/>
            <ul className='lg:flex lg:gap-[32px] lg:pt-[15px] md:flex md:gap-[32px] md:pt-[15px] md:pl-[30px] max-sm:hidden'>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer dark:text-white'>About</a></li>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold hover:text-orange hover:cursor-pointer dark:text-white'>Location</a></li>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer dark:text-white'>Careers</a></li>
            </ul>
            <LuSun size={30}  onClick={props.changeThemeHandler}/>
            <FaMoon size={30}/>   
        </div>
        <div className='max-sm:hidden'>
        <Button>Get Scootin</Button>
        </div>
      </div>
    
    </div>
  )
}
