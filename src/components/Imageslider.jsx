import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSlide from './ImgSlide';

function Imageslider() {

  const imgData = [
    {
    src: "images/slider-badag.jpg"
  },
  {
    src: "images/slider-badging.jpg"
  },
  {
    src: "images/slider-scale.jpg"
  },
  {
    src: "images/slider-scales.jpg"
  },
]


  let setting = {
    dots: true,
    infinite: true,
    speed: 400,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <div className=' max-[640px]: h-20  ' >
        <Slider {...setting} className=' mt-[10px] slider_shadow ' >

        {imgData.map((data, index)=>(
          <ImgSlide src={data.src} key={index}/>
        ))}  

        </Slider>
    </div>
  )
}

export default Imageslider 