import React from 'react'
import mobility_one_img from "/public/mock-image/about-images/mobility_img/mobility_img_one.svg"
import mobility_two_img from "/public/mock-image/about-images/mobility_img/mobility_img_two.svg"
import mobility_one_icon from "/public/mock-image/about-images/mobility_img/mobility_icon_one.svg"
import mobility_two_icon from "/public/mock-image/about-images/mobility_img/mobility_icon_two.svg"
import mobility_round_one from "/public/mock-image/mainSection_img/useInfo_round.svg"
import mobility_round_two from "/public/mock-image/mainSection_img/useInfo_round_two.svg"


export const Mobility = () => {
  return (
    <div className='relative '>
          <div className='container'>
           <div className='flex justify-between my-[150px]'>
        <div className='py-[100px] '>
        <h2 className='text-[48px]  text-[#495567]  font-bold leading-12'>
        Mobility for the <br />
         digital era
        </h2>
        <p className='mt-[20px]  text-[#939CAA]  text-[15px] font-normal leading-7'>
        Getting around should be simple (and even fun!) for <br />
         everyone. We embrace technology to provide low cost, smart <br />
          access to scooters at your fingertips.
        </p>
        </div>
         <div>
          <img src={mobility_one_img} alt=""  className='rounded-[50%]'/>
         </div>
 
           </div>
          <div className='flex justify-between mb-[100px]'>
          <div>
          <img src={mobility_two_img} alt=""  className='rounded-[50%]'/>
         </div>
        <div className='py-[100px] '>
        <h2 className='text-[48px]  text-[#495567]  font-bold leading-12'>
        Better urban <br />
         living
        </h2>
        <p className='mt-[20px]  text-[#939CAA]  text-[15px] font-normal leading-7'>
        We’re helping connect cities and bring people closer <br />
         together. Our scooters are also fully-electric and we offset <br />
          the minimal carbon footprint for each ride.
        </p>
        </div>
         
 
         </div>
    
           </div>
        <img src={mobility_round_one} alt=""  className='absolute  top-[140px] right-0'/>
        <img src={mobility_round_two} alt=""  className='absolute bottom-[100px]'/>
        <img src={mobility_one_icon} alt="" className='absolute top-[270px] right-0'/>
        <img src={mobility_two_icon} alt=""  className='absolute bottom-[290px]'/>
    </div>
 
  )
}
