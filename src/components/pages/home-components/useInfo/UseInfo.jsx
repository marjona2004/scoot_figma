import React from 'react'
import { Button } from '../../../common/button/Button'
import useInfo_img from "/public/mock-image/mainSection_img/img1.png"
import useInfo_img_two from "/public/mock-image/mainSection_img/img2.png"
import useInfo_img_three from "/public/mock-image/mainSection_img/img3.png"

import useInfo_line from "/public/mock-image/mainSection_img/useInfo_line_img.svg"
import useInfo_line_two from "/public/mock-image/mainSection_img/useInfo_line_two.svg"
import useInfo_line_three from "/public/mock-image/mainSection_img/useInfo_line_three.svg"
import useInfo_round from "/public/mock-image/mainSection_img/useInfo_round.svg"
import useInfo_round_two from "/public/mock-image/mainSection_img/useInfo_round_two.svg"


export const UseInfo = () => {
  return (
    <div className='relative'>
    <div className='container  '>
      <div className='flex justify-between'>
        <div className='py-[50px]'>
            <h2 className='text-[48px] font-bold leading-12 text-[#495567]' >Easy to use <br />
             riding telemetry
           </h2>
           <p className='mb-[40px] mt-[24px] text-[#939CAA] text-[15px] leading-6 font-normal' >
             The Scoot app is available with riding telemetry. This means <br />
             it can show you your average speed, how long you've been <br />
             using the scooter, your traveling distance, and many more <br />
             things all in an easy to use app.
           </p>
           <Button>Learn More</Button>
        </div>
        <div>
         <img src={useInfo_img} alt="" />
        </div>
      </div>
     <div className='flex justify-between my-[150px]'>
        <div>
         <img src={useInfo_img_two} alt="" />
        </div>
        <div className='py-[50px]'>
            <h2 className='text-[48px] font-bold leading-12 text-[#495567]' >
            Coming to a city <br /> near you
           </h2>
           <p className='mb-[40px] mt-[24px] text-[#939CAA] text-[15px] leading-6 font-normal' >
           Scoot is available in 4 major cities so far. We’re expanding <br />
            rapidly, so be sure to let us know if you want to see us in <br />
             your hometown. We’re aiming to let our scooters loose on 23 <br />
              cities over the coming year.
           </p>
           <Button>Learn More</Button>
        </div>
      
      </div>
      <div className='flex justify-between mb-[178px]'>
        <div className='py-[50px]'>
            <h2 className='text-[48px] font-bold leading-12 text-[#495567]' >
            Zero hassle <br /> payments
           </h2>
           <p className='mb-[40px] mt-[24px] text-[#939CAA] text-[15px] leading-6 font-normal' >
           Our payment is as easy as one two three. We accept most <br />
            credit cards and debit cards. You can also link your PayPal <br />
             account inside the app. Need to pay later? No worries! You <br />
              can defer payment for up to a month.
           </p>
           <Button>Learn More</Button>
        </div>
        <div >
         <img src={useInfo_img_three} alt=""  className='rounded-[50%]'/>
        </div>
      </div>
    
    </div>
    <img src={useInfo_round}  alt="" className='absolute top-[30px] right-0' />
    <img src={useInfo_round}  alt="" className='absolute bottom-[150px] right-0' />
    <img src={useInfo_round_two} alt="" className='absolute top-[600px] '/>

    <img src={useInfo_line} alt=""  className='absolute top-[320px] right-0 w-[734px]'/>
    <img src={useInfo_line_two} alt=""  className='absolute top-[620px] w-[400px] '/>
    <img src={useInfo_line_three} alt=""  className='absolute bottom-[500px] right-0 w-[300px]'/>
 
    </div>
 
  )
}
