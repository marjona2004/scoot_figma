import React from 'react'
import { Button } from '../../../common/button/Button'

export const City = () => {
  return (
    <div className='container mb-[120px]'>
        <div className='lg:flex lg:justify-between'>
          <h1 className='text-[48px]  text-[#495567] font-bold leading-12 md:text-center max-sm:text-center dark:text-white'>  Your city <br /> not listed?</h1>
             <p className='text-[#939CAA] text-[18px] font-normal leading-8 md:text-center md:my-[50px] max-sm:text-center max-sm:px-[3px] max-sm:py-[32px] dark:text-white'>
             If you’d like to see Scoot in your hometown, be sure to let us <br />
              know. We track requests and plan launches based on <br />
               demand. Feel free to message us by clicking the link or <br />
                messaging us on social.
             </p>
             <div className='mt-[40px] md:text-center max-sm:text-center'>
             <Button>btn</Button>
             </div>
             
        </div>
    </div>
  )
}
