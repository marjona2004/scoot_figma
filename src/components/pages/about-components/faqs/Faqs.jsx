import React from 'react'
import faq_icon_one from "/public/mock-image/about-images/faqs/faq_icon_one.svg"
import faq_icon_two from "/public/mock-image/about-images/faqs/faq_icon_two.svg"
import faq_round from "/public/mock-image/mainSection_img/useInfo_round_two.svg"

export const Faqs = () => {
  return (
    <div className='relative'>
   <div className='container'>
        <h1 className='mb-[68px] text-[48px] font-bold leading-12 text-[#495567] text-center'>FAQs</h1>
        <div className='lg:flex lg:gap-[50px] mb-[64px]' > 
            <h2 className='text-[40px] text-[#495567] font-bold leading-12 md:text-center md:mb-[32px]'>How it works</h2>
            <div>


                <div className='py-[32px] px-[40px] bg-[#F2F5F9] lg:w-[730px] md:w-[689px] md:mx-[40px]'>
                       <div className='flex justify-between'>
                        <h2 className='text-[24px] font-bold leading-7 '>How do I download the app?</h2>
                        <img src={faq_icon_one} alt="" />
                       </div>
                       <p className=' mt-[24px]'>
                       To download the Scoot app, you can search “Scoot” in both the App and Google Play <br />
                        stores. An even simpler way to do it would be to click the relevant link at the bottom of <br />
                         this page and you’ll be re-directed to the correct page.
                       </p>
                </div>
                <div className='flex justify-between py-[32px] px-[40px] lg:w-[730px]  bg-[#F2F5F9] my-[20px] md:w-[689px] md:mx-[40px]'>
                    <h2 className='text-[24px] font-bold leading-7'>Can I find a nearby Scoots?</h2>
                    <img src={faq_icon_two} alt="" />
                </div>
                <div className='flex justify-between py-[32px] px-[40px] lg:w-[730px] bg-[#F2F5F9] md:w-[689px] md:mx-[40px]'>
                    <h2 className='text-[24px] font-bold leading-7'>Do I need a license to ride?</h2>
                    <img src={faq_icon_two} alt="" />
                </div>

            </div>
        </div>

        <div className='lg:flex gap-[70px] mb-[64px] ' > 
            <h2 className='text-[40px] text-[#495567] font-bold leading-12 md:text-center'>Safe driving</h2>
            <div>


                <div className='py-[32px] px-[40px] bg-[#F2F5F9] lg:w-[730px] md:w-[689px] md:mx-[40px] md:mt-[50px]'>
                       <div className='flex justify-between'>
                        <h2 className='text-[24px] font-bold leading-7 '>Should I wear a helmet?</h2>
                        <img src={faq_icon_one} alt="" />
                       </div>
                       <p className=' mt-[24px]'>
                       Yes, please do! All cities have different laws. But we strongly <br />
                        strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we <br />
                         want you to be as safe as possible while Scooting.
                       </p>
                </div>
                <div className='flex justify-between py-[32px] lg:w-[730px] px-[40px] bg-[#F2F5F9] my-[20px] md:w-[689px] md:mx-[40px] '>
                    <h2 className='text-[24px] font-bold leading-7'>How about the rules & regulations?</h2>
                    <img src={faq_icon_two} alt="" />
                </div>
                <div className='flex justify-between py-[32px] lg:w-[730px] px-[40px] bg-[#F2F5F9] md:w-[689px] md:mx-[40px] md:mb-[100px]'>
                    <h2 className='text-[24px] font-bold leading-7'>What if I damage my Scoot?</h2>
                    <img src={faq_icon_two} alt="" />
                </div>

            </div>
        </div>
       
    </div>
    <img src={faq_round} alt=""  className='absolute bottom-[50px] w-[150px] md:hidden'/>
    </div>
   
  )
}
