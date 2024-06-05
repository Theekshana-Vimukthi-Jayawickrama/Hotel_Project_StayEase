import React from 'react'
import se from'../assets/About/0v1.webp'
import './about.css'

export default function AboutDedSlid(props) {
  return (
<>
    <div className='container'>
        <div className='carousel slide carousel-fade' data-bs-ride="carousel" id="pageSlide">

            <div className="carousel-indicators">
            <button type="button" data-bs-target="#pageSlide" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#pageSlide" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#pageSlide" data-bs-slide-to="2" ></button>
            </div>

            <div className='carousel-inner'>
                <div className='carousel-item active '>
                    <img src = {props.imageeSource1} style={{ width: '1000px', height:'400px' }} className=' mh-25 d-block mx-auto img-fluid commonSlider'/>
                </div>
                <div className='carousel-item '>
                    <img src = {props.imageeSource2} style={{ width: '1000px', height:'400px' }} className=' d-block mx-auto img-fluid commonSlider'/>
                </div>
                <div className='carousel-item '>
                    <img src = {props.imageeSource3} style={{ width: '1000px', height:'400px' }} className=' d-block mx-auto img-fluid commonSlider'/>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#pageSlide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '1200px', height:'400px' }}></span>
                    <span className="visually-hidden" style={{ width: '1200px', height:'400px' }}>Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#pageSlide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '1000px', height:'400px' }}></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    </div>
</>
  )
}
