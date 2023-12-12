import React from 'react'
import locationINfo_img from "/public/mock-image/location-images/locationInfo_img.svg"
export const LocationInfo = () => {
  return (
    <div className='lg:ml-[200px] container lg:py-[150px] md:py-[150px] md:w-[708px] md:mx-[40px] lg:w-[1110px] '>
        <img src={locationINfo_img} alt="" />
    </div>
  )
}
