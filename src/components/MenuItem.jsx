import React from 'react'

// used inside Header

function MenuItem({name, image}) {
  return (
    <div className=' mx-4 flex cursor-pointer items-center font-semibold hover:underline  underline-offset-8 viewer_h'>
    <img src={`/images/${image}.svg`} className=' w-4 h-4' alt=''/>
    <p className='text-white tracking-[1.25px] font-sans ml-1 text-[12px]  max-[1040px]:hidden xl:text-[16px]' >{name}</p>
    </div>
  )
}

export default MenuItem