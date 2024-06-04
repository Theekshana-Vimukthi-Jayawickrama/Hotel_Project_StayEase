import React from 'react'
import img1 from '../assets/Experience/Altitude.jpg'
import img2 from '../assets/Home/ep1.jpg'
import img3 from '../assets/Dining/bojunha0.jpg'

const ImgSlider = () => {

      
      return (
  <>
      <div id="priNext" class="carousel slide carousel-fade" data-bs-ride="carousel">
                {/* indicator */}
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#priNext" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#priNext" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#priNext" data-bs-slide-to="2" ></button>
        </div>

        <div class="carousel-inner">
                    {/* image01 */}
          <div class="carousel-item active" data-interval='2500'>
              <img src={img1} class=" w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Wellcome to StayEase</h3>
            </div>
          </div>
                    {/* image02 */}
          <div class="carousel-item">
            <img src={img2} class=" w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h3>Wellcome to StayEase</h3>
            </div>
          </div>
                    {/* image03 */}
          <div class="carousel-item">
              <img src={img3} class=" w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h3>Wellcome to StayEase</h3>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#priNext" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#priNext" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>

      )
}

export default ImgSlider