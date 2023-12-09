import React from 'react'
import { Button } from '../../../common/button/Button'

export const City = () => {
  return (
    <div className='container mb-[120px]'>
        <div className='flex justify-between'>
          <h1 className='text-[48px]  text-[#495567] font-bold leading-12 '>  Your city <br /> not listed?</h1>
             <p className='text-[#939CAA] text-[18px] font-normal leading-8'>
             If you’d like to see Scoot in your hometown, be sure to let us <br />
              know. We track requests and plan launches based on <br />
               demand. Feel free to message us by clicking the link or <br />
                messaging us on social.
             </p>
             <div className='mt-[40px]'>
             <Button>Message Us</Button>
             </div>
             
        </div>
    </div>
  )
}
