import React from 'react'

function DetailBg({link}) {
  return (
    <img src={link}
        className='z-[-1] absolute  h-[100%] max-[640px]:h-[80%] max-[640px]:bottom-0  max-[640px]:top-[75px]  lg:w-full lg:h-full lg:object-cover  lg:top-[65px] xl:top-[55px] lg:bottom-0 lg:right-0 lg:left-0  '/>

  )
}

export default DetailBg