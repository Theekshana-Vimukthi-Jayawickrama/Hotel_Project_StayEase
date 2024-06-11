import React from 'react'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import kid1 from "../assets/Experience/kid1.png"
import kid2 from "../assets/Experience/kid2.png"
import "./XP.css"

const CoolZoneKidsClub = () => {
    const text ={
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "#876a20",
      };
  return (
    <div>
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
              <img src={kid1} className=" w-100" alt="..."/>

            <div className="carousel-caption d-none d-md-block">
              <h1>Cool Zone Kids Club </h1>

            </div>

           </div>

          <div className="carousel-item">
            <img src={kid2} className=" w-100" alt="..."/>

            <div className="carousel-caption d-none d-md-block">
              <h1>Cool Zone Kids Club </h1>
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

      <div className='container-fulid'>
            <div className='row border border-4'>
                <b><h1 className='h3 text-center' style={text}>A place for kids to call their own</h1></b>
                    <p className='h5 text-secondary textSm'><br/><br/>
                The Cool Zone Kids Club offers unparalleled activities that kids will love – from messy hand-play with crafts for the budding artist, a ball pool for kids to cheerfully spring into action, and special themed activities - unlimited fun awaits!<br/><br/>

                Children from 4 to 12 years are introduced to a member of the Cool Zone Concierge upon arrival – parents can enjoy true vacation bliss, knowing that the kids are well taken care of. Children below the age of 4 must be accompanied by a parent.
                    </p>
            </div>
      </div>
      <Fotter/>
    </div>
  )
}

export default CoolZoneKidsClub