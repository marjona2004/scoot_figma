import React from 'react'
import footer_nav_scoot from "/public/mock-image/footer_img/scoot_footer_nav.svg"
import footer_icons from "/public/mock-image/footer_img/icons.svg"
export const Footer_nav = () => {
  return (
  <div className='lg:bg-[#333A44] md:bg-[#333A44] max-sm:bg-[#333A44]'>
    <div className='lg:container lg:flex  lg:justify-between lg:py-[35px]  md:flex md:gap-[150px] md:px-[39px] md:py-[35px] max-sm:block max-sm:pt-[64px] max-sm:pb-[88px]'>
        <div className='flex gap-[59px] max-sm:block'>
         <img src={footer_nav_scoot} alt="" className='max-sm:pl-[260px] max-sm:pb-[41px]'/>
        <ul className='flex gap-[32px] pt-[5px] max-sm:block max-sm:text-center max-sm:mb-[88px]'>
              <li ><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer  w-[46px] '>About</a></li>
              <li className='max-sm:my-[30px]'><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold hover:text-orange hover:cursor-pointer w-[46px] max-sm:my-[200px] '>Location</a></li>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer w-[46px]'>Careers</a></li>
        </ul>
        </div>
       <div>
          <img src={footer_icons} alt="" className='max-sm:pl-[260px]'/> 
         </div>
     </div>
    
  </div>
  )
}
