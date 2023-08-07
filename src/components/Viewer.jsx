import React from 'react'
import ViewerItems from './ViewerItems'

function Viewer() {

  const viewerItm = [
    {
      name: "disney",
      url: "videos/1564674844-disney.mp4"
    },
    {
      name: "pixar",
      url: "videos/1564676714-pixar.mp4"
    },
    {
      name: "marvel",
      url: "videos/1564676115-marvel.mp4"
    },
    {
      name: "starwars",
      url: "videos/1608229455-star-wars.mp4"
    },
    {
      name: "national",
      url: "videos/1564676296-national-geographic.mp4"
    }
  ]

  return (
    <div className='flex items-center justify-center mt-8 w-full flex-wrap  py-[3%]' >

        {viewerItm.map((data, index)=>(
          <ViewerItems name={data.name} video={data.url} key={index} />
        ))}
    </div>
  )
}

export default Viewer