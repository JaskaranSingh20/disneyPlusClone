import React from 'react'

const ViewerItems = ({name, video}) => {
  return (
    <div className=' mx-[3%] my-[4%] border-solid border-[#565663] border-[3px] rounded-lg
     w-[150px] hover:scale-110 v_hover viewer_h slider_shadow cursor-pointer max-[640px]:w-[250px] min-[640px]:w-[1-0px]  max-[1040px]:w-[100px] xl:w-[180px]  relative '>
        <img src={`images/viewers-${name}.png`} className='z-1'/>
        <video src={video} className=' w-[100%] h-[100%] absolute top-0 z-[-1] rounded-md'autoPlay loop playsInline muted/>
    </div>
  )
}

export default ViewerItems