import React from 'react'

function MoviesItems({link}) {
  // console.log("link" + link);
  return (
    
    <div className=' w-[100%] h-[100%] rounded-[10px] overflow-hidden
     border-solid border-[rgba(249,249,249,0.1)] border-[4px] 
     slider_shadow v_hover hover:scale-105 viewer_h cursor-pointer' >
        <img src={link} />
    </div>
  )
}

export default MoviesItems