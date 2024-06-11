import React from 'react'
import tu1 from "../assets/Experience/tu1.jpg"
import tu2 from "../assets/Experience/to2.jpg"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import "./XP.css"


const Membership = () => {
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
              <img src={tu2} className=" w-100" alt="..."/>

            <div className="carousel-caption d-none d-md-block">
              <h1>Membership</h1>

            </div>

           </div>

          <div className="carousel-item">
            <img src={tu1} className=" w-100" alt="..."/>

            <div className="carousel-caption d-none d-md-block">
              <h1>Membership</h1>
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
                <h1 className='h2 text-center' style={text}> Membership</h1>
                <h3 className='h3 text-center' style={text}>Year-round benefits</h3>
                <p></p>
            </div>
            <div className='row'>
                    <p className='h5 textSm'>
                        The golf membership at StayEase Colombo provides all the amenities you would expect from a world-class golf course, with two different categories of membership to suit golfers’ preferences.<br/><br/>

                        A host of benefits are extended including savings on Green fees, accommodation and dining at the resorts restaurants.<br/><br/>

                        For more details on our Golf Memberships click here. <br/><br/>

                        Download our application form here.<br/><br/>

                        For more information on golf membership, please contact:<br/><br/>

                        <b>Luke Sahabandu</b><br/>
                        Golf Operations Manager<br/>
                        luke.sahabandu@StayEase.com<br/>
                        Tel: (94 76) 668 9611<br/>
                    </p>
            </div>
      </div>
      <Fotter/>
    </>
  )
}

export default Membership