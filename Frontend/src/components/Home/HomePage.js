import React from 'react'
import  Navi from './Navi'
import Navi0 from './Navi0'
import HomeAbout from './HomeAbout'
import ImgSlider from './ImgSlider'
import Destination from './Destination'
import Fotter from './Fotter'


export default function HomePage() {


  return (
<div>
  <div >
      <Navi0/>
      <Navi/>
    <ImgSlider/>
    <HomeAbout/>
    <Destination/>
    <Fotter/>

  </div>
</div>
  )
}
