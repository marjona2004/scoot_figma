import React from 'react'
import mobility_one_icon from "/public/mock-image/about-images/mobility_img/mobility_icon_one.svg"
import mobility_round_one from "/public/mock-image/mainSection_img/useInfo_round.svg"

import careJoin_img from "/public/mock-image/careers-images/hero_img (2).svg"
import { Button } from '../../../common/button/Button'
export const CareJoin = () => {
  return (
    <div className='relative'>
        <div className='container lg:flex lg:justify-between my-[150px] md:flex  lg:flex-row md:flex-col-reverse max-sm:flex max-sm:flex-col-reverse '>
        <div className='py-[30px] '>
        <h2 className='text-[48px]  text-[#495567]  font-bold leading-12 md:text-center lg:text-start max-sm:text-center dark:text-white'>
        Care to join our <br />
         mission?
        </h2>
        <p className='mt-[20px]  text-[#939CAA]  dark:text-white text-[15px] font-normal leading-7 mb-[40px] md:text-center lg:text-start max-sm:text-center'>
        We’re always looking for ambitious individuals to help us on <br />
         our journey. If you’re passionate about our mission to <br /> provide clean, accessible transport to 
          improve urban living <br />
           we want to hear from you!
        </p>
        <div className='md:text-center lg:text-start max-sm:text-center'>
        <Button>sayHello</Button>
        </div>
     
        </div>
         <div>
          <img src={careJoin_img} alt=""  className='rounded-[50%] md:ml-[150px] lg:ml-0 max-sm:px-[100px]'/>
         </div>
 
         </div>
         <img src={mobility_round_one} alt=""  className='absolute  top-[0px] right-0 max-sm:hidden'/>
         <img src={mobility_one_icon} alt="" className='absolute top-[250px] right-0 max-sm:hidden'/>
    </div>
  
  )
}
