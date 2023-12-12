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
    <div className='container max-sm:py-[200px]'>

      <div className='lg:flex lg:gap-[60px] lg:flex-row  md:flex  md:flex-col-reverse max-sm:flex  max-sm:flex-col-reverse  '>
        <div className='lg:py-[50px]  md:mb-[10px] max-sm:py-[50px]'>
            <h2 className='text-[48px] font-bold leading-12 text-[#495567] md:text-center lg:text-start max-sm:text-center' >Easy to use <br />
             riding telemetry
           </h2>
           <p className='mb-[40px] mt-[24px] text-[#939CAA] text-[15px] leading-6 font-normal md:text-center lg:text-start max-sm:text-center' >
             The Scoot app is available with riding telemetry. This means <br />
             it can show you your average speed, how long you've been <br />
             using the scooter, your traveling distance, and many more <br />
             things all in an easy to use app.
           </p>
           <div className='md:text-center lg:text-start max-sm:text-center'>

           <Button>Learn More</Button>
           </div>
        </div>
        <div>
         <img src={useInfo_img} alt=""className='max-sm:ml-[100px]' />     
        </div>
      </div>
      <div className=' my-[150px]  lg:flex lg:justify-between'>
        <div>
         <img src={useInfo_img_two} alt="" className='md:ml-[150px] lg:ml-0 max-sm:ml-[100px]'/>
        </div>
        <div className='py-[50px] '>
            <h2 className='text-[48px] font-bold leading-12 text-[#495567] md:text-center lg:text-start max-sm:text-center' >
            Coming to a city <br /> near you
           </h2>
           <p className='mb-[40px] mt-[24px] text-[#939CAA] text-[15px] leading-6 font-normal md:text-center lg:text-start max-sm:text-center' >
           Scoot is available in 4 major cities so far. We’re expanding <br />
            rapidly, so be sure to let us know if you want to see us in <br />
             your hometown. We’re aiming to let our scooters loose on 23 <br />
              cities over the coming year.
           </p>
           <div className='md:text-center lg:text-start max-sm:text-center'>
           <Button>Learn More</Button>
           </div>
       
        </div>
      
      </div>
      
      <div className='lg:flex-row lg:justify-between mb-[178px] md:flex md:flex-col-reverse max-sm:flex  max-sm:flex-col-reverse '>
        <div className='py-[50px]'>
            <h2 className='text-[48px] font-bold leading-12 text-[#495567] md:text-center lg:text-start max-sm:text-center' >
            Zero hassle <br /> payments
           </h2>
           <p className='mb-[40px] mt-[24px] text-[#939CAA] text-[15px] leading-6 font-normal md:text-center lg:text-start max-sm:text-center' >
           Our payment is as easy as one two three. We accept most <br />
            credit cards and debit cards. You can also link your PayPal <br />
             account inside the app. Need to pay later? No worries! You <br />
              can defer payment for up to a month.
           </p>
           <div className='md:text-center lg:text-start max-sm:text-center'> 
           <Button>Learn More</Button>
           </div>
        
        </div>
        <div >
         <img src={useInfo_img_three} alt=""  className='rounded-[50%] md:ml-[150px] lg:ml-0 max-sm:px-[100px]' />
        </div>
      </div>
    
    </div>
    <img src={useInfo_round}  alt="" className='absolute top-[30px] right-0 max-sm:hidden' />
    <img src={useInfo_round}  alt="" className='absolute bottom-[10px] right-0 md:bottom-[450px] lg:bottom-0 max-sm:hidden' />
    <img src={useInfo_round_two} alt="" className='lg:absolute lg:top-[600px] md:absolute md:top-[1100px] max-sm:hidden'/>

    <img src={useInfo_line} alt=""  className='absolute top-[320px] right-0 w-[734px] max-sm:w-[550px] max-sm:top-[500px]'/>
    <img src={useInfo_line_two} alt=""  className='lg:absolute lg:top-[620px] lg:w-[400px] md:absolute md:top-[+1100px] md:w-[390px] max-sm:absolute max-sm:top-[1350px] max-sm:w-[450px]'/>
    <img src={useInfo_line_three} alt=""  className='absolute bottom-[200px] right-0 lg:w-[450px] md:bottom-[720px] md:w-[400px]  lg:bottom-[200px] max-sm:bottom-[1050px] max-sm:w-[480px]' />
 
    </div>
 
  )
}
