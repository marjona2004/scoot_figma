import React from 'react'
import footer_nav_scoot from "/public/mock-image/footer_img/scoot_footer_nav.svg"
import footer_icons from "/public/mock-image/footer_img/icons.svg"
export const Footer_nav = () => {
  return (
  <div className='bg-[#333A44] '>
    <div className='container flex justify-between py-[35px]'>
        <div className='flex gap-[59px]'>
         <img src={footer_nav_scoot} alt="" />
        <ul className='flex gap-[32px] pt-[5px] '>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer'>About</a></li>
              <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold hover:text-orange hover:cursor-pointer'>Location</a></li>
            <li><a href="#" className='text-[15px] text-[#939CAA] leading-6 font-bold  hover:text-orange hover:cursor-pointer'>Careers</a></li>
        </ul>
        </div>
       <div>
          <img src={footer_icons} alt="" /> 
         </div>
     </div>
    
  </div>
  )
}
