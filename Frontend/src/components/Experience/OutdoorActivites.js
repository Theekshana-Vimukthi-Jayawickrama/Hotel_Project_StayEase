import React from 'react'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import out1 from "../assets/Experience/out1.jpeg"
import out2 from "../assets/Experience/out2.jpg"
import "./XP.css"

const OutdoorActivites = () => {
    const text ={
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "#876a20",
      };
  return (
    <>
        <Navi0/>
        <Navi/> <br/>
        <div className='container'>
          <div id="priNext" className="carousel slide carousel-fade" data-bs-ride="carousel">
                {/* indicator */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#priNext" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#priNext" data-bs-slide-to="1"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active" data-interval='2500'>
              <img src={out1} className=" w-100" alt="..."/>

            <div className="carousel-caption d-none d-md-block">
              <h1>Outdoor Activites</h1>

            </div>

           </div>

          <div className="carousel-item">
            <img src={out2} className=" w-100" alt="..."/>

            <div className="carousel-caption d-none d-md-block">
              <h1>Outdoor Activites</h1>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#priNext" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#priNext" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

      <div className='container'>
            <div className='row border-bottom border-4'>
                <h1 className='h3 fw-bold text-center' style={text}> Fun-filled adventures under the sun</h1>
                <p></p>
            </div>
            <div className='row'>
                    <p className='h5 textSm'>
                    With a variety of outdoor activities on offer throughout the year, there is something for everyone to enjoy during their stay.  <br/><br/>

                       <h4><b>Aerial Sports</b> </h4><br/>
                        Kids and adults alike can fly high with our full-size trapeze. Our in-house expert will introduce you and your child to the swinging arts, where you will learn exciting tricks in a safe and fully supervised environment. For those who would prefer jumping to swinging, you can defy gravity on our outdoor above-ground trampoline.<br/><br/>

                        
                        <h4><b>Kid's Golf</b></h4> <br/>
                        Do away with the precision and patience needed for golf and let the kids have a go at Golf Discovery, a game of fun and excitement, as they try their hand at this great sport.  <br/><br/>
                        
                        <h4><b>Nature Explorations</b> <br/></h4>
                    Being a large resort in Sri Lanka, we offer adventurous nature trails that can be experienced on foot or if you prefer, a spin-through on a mountain bike. Our trails are fun and educational for the whole family as you learn about tropical vegetation and see colourful birds as they perch on trees. <br/><br/>
                    </p>
            </div>
      </div>
      <Fotter/>
    </>
  )
}

export default OutdoorActivites