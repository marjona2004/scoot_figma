import React from 'react'
import our_one_img from "/public/mock-image/about-images/ourValues/ourTeach_img.svg"
import our_two_img from "/public/mock-image/about-images/ourValues/ourIntegrity_img.svg"
import our_three_img from "/public/mock-image/about-images/ourValues/ourCommunity.svg"
import our_one_icon from "/public/mock-image/about-images/ourValues/our_icon_01.svg"
import our_two_icon from "/public/mock-image/about-images/ourValues/our_icon_02.svg"
import our_three_icon from "/public/mock-image/about-images/ourValues/our_icon_03.svg"
import our_round from "/public/mock-image/mainSection_img/useInfo_round_two.svg"

export const OurValues = () => {
  return (
    <div className='relative'>
      <div className='container mb-[120px]'>
      <h2 className='text-center text-[48px] font-bold leading-12 text-[#495567] mb-[85px]'>Our values</h2>
      <div className='lg:flex gap-[72px]'>
         <div className='md:mb-[50px]'>
         <div className='relative left-[40px] '>
          <img src={our_one_img} alt="" className='rounded-[50%] md:ml-[220px]'/>
          <img src={our_one_icon} alt="" className='absolute bottom-[-55px] left-[70px] md:ml-[225px]'  />
         </div>
         <h3 className='text-[24px] font-bold leading-7 text-center mt-[92px] mb-[27px] text-[#495567] '>Our tech</h3>
         <p className='text-center text-[15px] font-normal leading-7 text-[#939CAA]'>
         We’re using cutting edge technology to drive <br />
          accessible urban transportation forward. Our <br /> 
           fully electric scooters are a joy to ride!
         </p>
        </div>
        <div  className='md:mb-[50px]'>
         <div className='relative left-[40px]'>
          <img src={our_two_img} alt="" className='rounded-[50%] md:ml-[220px]'/>
          <img src={our_two_icon} alt="" className='absolute bottom-[-55px] left-[70px] md:ml-[225px]'  />
         </div>
         <h3 className='text-[24px] font-bold leading-7 text-center mt-[92px] mb-[27px] text-[#495567] '>Our integrity</h3>
         <p className='text-center text-[15px] font-normal leading-7 text-[#939CAA]'>
         We are fully committed to deliver a great yet <br />
          safe, sustainable micro-mobility experience in <br />
           every city we serve.
         </p>
        </div>
       <div>
         <div className='relative left-[40px]'>
          <img src={our_three_img} alt="" className='rounded-[50%] md:ml-[220px]'/>
          <img src={our_three_icon} alt="" className='absolute bottom-[-55px] left-[70px] md:ml-[225px]'  />
         </div>
         <h3 className='text-[24px] font-bold leading-7 text-center mt-[92px] mb-[27px] text-[#495567] '> Our community </h3>
         <p className='text-center text-[15px] font-normal leading-7 text-[#939CAA]'>
         We support every community we serve. All <br />
         workers are paid a living wage based on their <br />
          location and are Scoot employees.
         </p>
        </div>

      </div>
    </div>
    <img src={our_round} alt=""  className='absolute top-[-250px] '/>
    </div>
    
  )
}
