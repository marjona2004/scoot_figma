import React from 'react'
import locationINfo_img from "/public/mock-image/location-images/locationInfo_img.svg"
export const LocationInfo = () => {
  return (
    <div className='lg:ml-[200px] container lg:py-[150px] md:py-[150px] md:w-[708px] md:mx-[40px] lg:w-[1110px] max-sm:w-[311px] max-sm:py-[100px]'>
        <img src={locationINfo_img} alt="" />
        <div className='max-sm:my-[100px] md:hidden lg:hidden'>
          <div className='max-sm:w-[311px] max-sm:px-[100px] max-sm:py-[30px] max-sm:bg-rose-100'>
            <h2 className='max-sm:text-[24px] max-sm:font-bold max-sm:text-[#495567]'>New York</h2>
          </div>
          <div className='max-sm:w-[311px] max-sm:px-[100px] max-sm:py-[30px] max-sm:bg-rose-100 mt-[20px]'>
            <h2 className='max-sm:text-[24px] max-sm:font-bold max-sm:text-[#495567]'>London</h2>
          </div>
          <div className='max-sm:w-[311px] max-sm:px-[100px] max-sm:py-[30px] max-sm:bg-rose-100 mt-[20px]'>
            <h2 className='max-sm:text-[24px] max-sm:font-bold max-sm:text-[#495567]'>Jakarta</h2>
          </div>
          <div className='max-sm:w-[311px] max-sm:px-[100px] max-sm:py-[30px] max-sm:bg-rose-100 mt-[20px]'>
            <h2 className='max-sm:text-[24px] max-sm:font-bold max-sm:text-[#495567]'>Yokohama</h2>
          </div>
        </div>
    </div>
  )
}
