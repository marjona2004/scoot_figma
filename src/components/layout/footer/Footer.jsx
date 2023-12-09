import React from 'react'
import footer_one_img from "/public/mock-image/footer_img/appStore.svg"
import footer_two_img from "/public/mock-image/footer_img/googlePlay.svg"
import round_footer from "/public/mock-image/footer_img/round_footer.svg"
import round_footer_two from "/public/mock-image/footer_img/round_footer_two.svg"
export const Footer = () => {
  return (
    <div className='bg-[#495567] relative'>
      <div className='container py-[122px] flex justify-between '>
        <div>
         <h3 className='text-white text-[48px] font-bold leading-12 '>
           Sign up and <br /> Scoot off today
         </h3>
        </div>
        <div className='flex gap-[18px] pt-[22px]' >
        <div className='flex gap-[11px] bg-white py-[9px] px-[18px] rounded-[4px] w-[159px] h-[56px]'>
        <img src={footer_one_img} alt="" className=''/>
         <div>
          <p className='text-[#495567] text-[10px] font-bold leading-normal'>Available on the</p>
          <h4 className='text-[#495567] text-[20px] font-bold leading-4'>AppStore</h4>
         </div>
        </div>
        <div className='flex gap-[11px] bg-white py-[9px] px-[18px] rounded-[4px] w-[182px] h-[56px]'>
        <img src={footer_two_img} alt="" className=''/>
         <div>
          <p className='text-[#495567] text-[10px] font-bold leading-normal'>Get it on</p>
          <h4 className='text-[#495567] text-[20px] font-bold leading-4'>GooglePlay</h4>
         </div>
        </div>
          
        </div>
    
       
        
       </div>
        <img src={round_footer} alt=""  className='absolute bottom-0 left-[450px] w-[347px] h-[257px]'/>
        <img src={round_footer} alt=""  className='absolute bottom-0 left-[930px] w-[347px] h-[257px]'/>
        <img src={round_footer_two} alt="" className='absolute bottom-0 right-0 w-[200px] h-[207px]'/>
   </div>

  
  )
}
