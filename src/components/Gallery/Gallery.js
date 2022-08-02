import React from 'react'
import {Carousel} from '3d-react-carousal';
import i1 from '../../assets/slides/1.jpg'
import i2 from '../../assets/slides/2.jpg'
import i3 from '../../assets/slides/3.jpg'
import i4 from '../../assets/slides/4.jpg'
import i5 from '../../assets/slides/5.jpg'
import i6 from '../../assets/slides/6.jpg'
import i7 from '../../assets/slides/7.jpg'
export const Gallery = () => {
    let slides = [
        <img className='w-1/2'  src={i1} alt="1" />,
        <img className='w-1/2'  src={i2} alt="2" />  ,
        <img className='w-1/2'  src={i3} alt="3" />  ,
        <img className='w-1/2'  src={i4} alt="4" />  ,
        <img className='w-1/2' src={i5} alt="5" />  ,
        <img className='w-1/2' src={i6} alt="6" /> ,
        <img className='w-1/2' src={i7} alt="7" />  ];
        const callback = function(index){
            console.log("callback",index);
        }   
  return (
    <div>
        <br/><br/>
        <div className='text-white font-mono text-5xl mt-5 mb-5'>Gallery</div>
        <br/><br/>
        <Carousel slides={slides} autoplay={true} interval={1000} onSlideChange={callback}/>
    </div>
  )
}
