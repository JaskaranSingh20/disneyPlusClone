import React from 'react'
import MoviesItems from './MoviesItems'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Details from './Details'

const Movies = ({title, type}) => {

  const value = useSelector((state)=>{  // getting the data from redux reducers
        // console.log(state.xyz.movies);
       return state.xyz.movies
  })

  // console.log( value)

  return (
    <div className=' mx-[0.5%] mb-[3%] md:px-1  '>
        <h4 className=' font-sans mb-3 text-[18px] tracking-wider max-[640px]:text-[16px]  '>{title}</h4>

        <div className={` grid gap-7   grid-cols-4 max-[780px]:grid-cols-2 `}>       

          {
            value && (
              value.map((dt, index)=>{
                // console.log(dt.cardImg);
                if(dt.type == type) return <NavLink to={`/detail/${dt.id}`} key={index} ><MoviesItems link={dt.cardImg} key={index} /> </NavLink>
              }))
          }

          
        </div>
 
    </div>
  )
}

export default Movies