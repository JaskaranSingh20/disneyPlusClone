import React from 'react'

const ImgSlide = ({src}) => {
  return (
    <img src={src} className=' w-[100%] h-[100%] rounded-md mx-2 border-[4px] border-transparent  hover:border-solid hover:border-[rgba(249,249,249,0.8)] hover:max-[780px]:border-[2px] hover:scale-105 transition-all ease-in duration-200 ' />

  )
}

export default ImgSlide