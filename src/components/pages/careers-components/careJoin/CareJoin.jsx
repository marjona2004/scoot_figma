import React from 'react'
import mobility_one_icon from "/public/mock-image/about-images/mobility_img/mobility_icon_one.svg"
import mobility_round_one from "/public/mock-image/mainSection_img/useInfo_round.svg"

import careJoin_img from "/public/mock-image/careers-images/hero_img (2).svg"
import { Button } from '../../../common/button/Button'
export const CareJoin = () => {
  return (
    <div className='relative'>
       <div className='container flex justify-between my-[150px]'>
        <div className='py-[30px] '>
        <h2 className='text-[48px]  text-[#495567]  font-bold leading-12'>
        Care to join our <br />
         mission?
        </h2>
        <p className='mt-[20px]  text-[#939CAA]  text-[15px] font-normal leading-7 mb-[40px]'>
        We’re always looking for ambitious individuals to help us on <br />
         our journey. If you’re passionate about our mission to <br /> provide clean, accessible transport to 
          improve urban living <br />
           we want to hear from you!
        </p>
        <Button>Say Hello</Button>
        </div>
         <div>
          <img src={careJoin_img} alt=""  className='rounded-[50%]'/>
         </div>
 
         </div>
         <img src={mobility_round_one} alt=""  className='absolute  top-[0px] right-0'/>
         <img src={mobility_one_icon} alt="" className='absolute top-[250px] right-0'/>
    </div>
  
  )
}
