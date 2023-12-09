import React from 'react'
import infocard_one from "/public/mock-image/infoCards_img/img1.svg"
import infocard_two from "/public/mock-image/infoCards_img/img2.svg"
import infocard_three from "/public/mock-image/infoCards_img/img3.svg"
import infoCard_line from "/public/mock-image/infoCards_img/infoCard_line.svg"

export const InfoCard = () => {
  return (
    <div className='relative'>
    <img src={infoCard_line} alt="" className='absolute top-[200px] '/>
    <div className='container pt-[160px] pb-[147px] flex gap-[50px]'>
      <div>
          <img src={infocard_one} alt="" className='mb-[40px]'/>
          <h3 className='text-[24px] font-bold leading-6  text-[#495567;]'>Locate with app</h3>
          <p className='mt-[40px] mb-[27px] text-[15px] leading-6 font-normal text-[#939CAA]'>Use the app to find the nearest scooter to you. <br />
           We are continuously placing scooters in the <br />
           areas with most demand, so one should never <br />
           be too far away.
          </p>
      </div>
      <div>
          <img src={infocard_two} alt="" className='mb-[40px]'/>
          <h3 className='text-[24px] font-bold leading-6  text-[#495567;]'>Pick your scooter</h3>
          <p className='mt-[40px] mb-[27px] text-[15px] leading-6 font-normal text-[#939CAA]'>
          We show the most important info for the <br />
           scooters closest to you. So you know how much <br />
            charge they have left and can see roughly how <br />
             much it will cost.
          </p>
      </div>
      <div>
          <img src={infocard_three} alt="" className='mb-[40px]'/>
          <h3 className='text-[24px] font-bold leading-6  text-[#495567;]'>Enjoy the ride</h3>
          <p className='mt-[40px] mb-[27px] text-[15px] leading-6 font-normal text-[#939CAA]'>
          Scan the QR code and the bike will unlock. <br />
           Retract the cable lock, put on a helmet, and <br />
            you’re off! Always lock bikes away from <br />
             walkways and accessibility ramps.
          </p>
      </div>
     
    </div>

    </div>
  
  )
}
