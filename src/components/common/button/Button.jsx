import React from 'react'

export const Button = ({children}) => {
  return (
    <div>
        <button className='w-[180px] h-[53px] py-[14px] px-[39px] text-[15px] font-bold leading-6 bg-orange text-white hover:border-2 hover:border-orange hover:cursor-pointer hover:bg-white hover:text-orange'>{children}</button>
    </div>
  )
}
