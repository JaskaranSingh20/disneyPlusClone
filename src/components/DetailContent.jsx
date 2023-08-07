import React from 'react'

// mt-[18vh]
function DetailContent({titleImg, subTitle, description}) {
  return (
    <div className=' mt-[15vh] mx-[36px] mb-6 ' > 
            <img src={titleImg}
            className=' w-[30%] h-[30%]  max-[640px]:w-[70%] ' />

            {/* row */}
            <div className='flex items-center gap-4 mt-7'>
                <button className='flex items-center justify-center md:w-[120px] md:h-[50px] bg-white text-black py-3 md:py-[11px]   pl-4 pr-6  rounded-md border-[1.5px] border-white
                  hover:scale-105 viewer_h hover:bg-slate-300'>
                    <img src='/images/play-icon-black.png' className=' w-[20px]' />
                    <p className=' font-sans uppercase font-semibold  text-xs tracking-widest md:text-sm' >Play</p>
                    </button>

                <button className='flex items-center bg-[rgba(0,0,0,0.3)] py-3 md:w-[120px] md:h-[50px]  pl-4 pr-6 rounded-md border-[1.5px] border-white hover:scale-105 viewer_h hover:bg-slate-800'>
                    <img src='/images/play-icon-white.png' className=' w-[20px]'/>
                    <p className=' font-sans uppercase font-semibold text-xs tracking-widest md:text-sm' >trailer</p></button>

                <button className='flex items-center justify-center  bg-[rgba(0,0,0,0.6)] w-8 h-8 md:w-[40px] md:h-[40px]  md:pb-1 rounded-[50%] border-[1.5px] border-white hover:scale-105 viewer_h'>
                    <p className='text-2xl'>+</p></button>

                <button className='flex  items-center justify-center bg-[rgb(0,0,0)] rounded-[50%] w-8 h-8 md:w-[40px] md:h-[40px] border-[1.5px] border-white hover:scale-105 viewer_h'>
                  <img src='/images/group-icon.png'/></button>
            </div>

            <p className=' mt-6 mb-3 font-sans text-[14px] md:text-[16px] font-normal '>{subTitle}</p>

            <div className=' w-[60%]  max-[640px]:w-[60%] font-sans text-left md:text-[18px]  '>
            <h4>{description}</h4>

            </div>
        </div>
  )
}

export default DetailContent