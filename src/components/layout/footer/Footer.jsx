import React from 'react'
import footer_one_img from "/public/mock-image/footer_img/appStore.svg"
import footer_two_img from "/public/mock-image/footer_img/googlePlay.svg"
import round_footer from "/public/mock-image/footer_img/round_footer.svg"
import round_footer_two from "/public/mock-image/footer_img/round_footer_two.svg"
export const Footer = () => {
  return (
    <div className='lg:bg-[#495567] md:bg-[#495567] lg:relative md:relative '>
      <div className='lg:container lg:py-[122px] lg:flex lg:justify-between md:justify-center  md:text-center '>
        <div>
         <h3 className='text-white text-[48px] font-bold leading-12 '>
           Sign up and <br /> Scoot off today
         </h3>
        </div>
        <div className='flex gap-[18px] pt-[22px] md:pl-[200px] md:pb-[30px]' >
        <div className='flex gap-[11px] bg-white py-[9px] px-[18px] rounded-[4px] w-[159px] h-[56px]  '>
        <img src={footer_one_img} alt="" className=''/>
         <div>
          <p className='text-[#495567] text-[10px] font-bold leading-normal'>Available on the</p>
          <h4 className='text-[#495567] text-[20px] font-bold leading-4'>AppStore</h4>
         </div>
        </div>
        <div className='flex gap-[11px] bg-white py-[9px] px-[18px] rounded-[4px] w-[182px] h-[56px] '>
        <img src={footer_two_img} alt="" className=''/>
         <div>
          <p className='text-[#495567] text-[10px] font-bold leading-normal'>Get it on</p>
          <h4 className='text-[#495567] text-[20px] font-bold leading-4'>GooglePlay</h4>
         </div>
        </div>
          
        </div>
       </div>
        <img src={round_footer} alt=""  className='lg:absolute lg:bottom-0 lg:left-[450px] lg:w-[347px] lg:h-[257px] md:bottom-0 md:absolute md:left-0 md:w-[200px] md:h-[200px]'/>
        <img src={round_footer} alt=""  className='lg:absolute lg:bottom-0 lg:left-[930px] lg:w-[347px] lg:h-[257px] md:bottom-0 md:absolute md:left-[300px] md:w-[200px] md:h-[200px]'/>
        <img src={round_footer_two} alt="" className='lg:absolute lg:bottom-0 lg:right-0 lg:w-[200px] lg:h-[207px] md:absolute md:bottom-0 md:right-0  md:w-[150px] md:h-[150px] '/>
   </div>

  
  )
}
