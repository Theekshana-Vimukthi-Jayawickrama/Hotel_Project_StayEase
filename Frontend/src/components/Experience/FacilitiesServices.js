import React from 'react'
import tu1 from "../assets/Experience/tu1.jpg"
import tu2 from "../assets/Experience/to2.jpg"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import "./XP.css"

const FacilitiesServices = () => {

    const text ={
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "#876a20",
        textDecoration: 'underline'
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

          <div className="carousel-item active" data-interval='2000'>
              <img src={tu2} className=" w-100 " alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Facilities and Services</h1>
            </div>
           </div>

          <div className="carousel-item">
            <img src={tu1} className=" w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Facilities and Services</h1>
            </div>
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
    <div className='container border-bottom border-3'>
        <div className='row'>
            <div className='h3 text-center' style={text}>
            Facilities and Services
            </div>
            <div className='h4 text-center' style={text}>
                Golf essentials
            </div>
        </div>       
    </div>

    <div className='container'>
           <div className='row'>
                    <div className='col-12'>
                        <h4 className='h4 text-center textSm0'>The Golf and Country Club provides a wide array of services and facilities for golfers to enjoy their experience in idyllic settings.</h4><br/><br/>
                        <h4 className='h4 text-decoration-underline'><b>Golf (18-hole, Par 70)</b></h4>
                        <p className='h5 text-muted textSm'>
                        The Tees
                        Each hole has 3 tee decks<br/>
                        - Championship Tees - 6,107yds / 5,584m<br/>
                        - Gentlemen’s Tees - 5,770yds / 5,276m<br/>
                        - Ladies' Tees - 4,424yds / 4,045m<br/>
                        Putting green<br/>
                        Electric golf carts with on-board cooler boxes<br/>
                        Driving range
                        </p><br/>
                    </div>
                    <div className='col-12'>
                        <b><h4 className="text-decoration-underline">Ulpatha</h4></b>
                        <p className='h5 text-muted textSm'>
                        The clubhouse overlooks the 18th green and welcomes all golfers and guests.<br/><br/>

                        Inspired by Sri Lanka's colonial heritage, Ulpatha (watering hole) is the right place to unwind after a game of golf, with a fine selection of beers, malt whiskies, cocktails and other beverages and snacks. It serves international fare and comfort food, for a relaxed lunch in cool settings overlooking the golf course.<br/><br/>

                        Ulpatha is the centre for sporting, social and recreational excellence, offering a pool table and a wide range of games to watch on TV.
                        </p> <br/><br/>

                        <b><h4 className='font-weight-bold h4 text-decoration-underline'>Proshop</h4></b>
                        <p className='h5 text-muted textSm'>
                        Avail a wide range of products from a selection of premium golf equipment, caps, polos, shoes and sun glasses, for total comfort and elegance.   
                        </p><br/><br/>
                        
                        <b><h4 className="text-decoration-underline">Equipment Rental</h4></b>
                        <p className='h5 text-muted textSm'>
                        New sets of clubs and shoes are available for hire at the Proshop.
                        </p><br/><br/>

                        <b><h4 className="text-decoration-underline">Locker Rooms</h4></b>
                        <p className='h5 text-muted textSm'>
                        With lockers, changing and shower facilities.
                        </p><br/><br/>

                        <b><h4 className="text-decoration-underline">Bag Storage</h4></b>
                        <p className='h5 text-muted textSm'>Space available for 100 bags.</p><br/><br/>

                        <b><h4 class="text-decoration-underline">Dress Code</h4></b>
                        <p className='h5 text-muted textSm'>Golf shoes with soft spikes are compulsory on the golf course. Regular golf attire is required: shirts with collars, tailored trousers and Bermuda shorts. No denims, beach wear, tennis wear or training shoes are permitted on the golf course at any time.</p><br/><br/>

                    </div>
            </div> 
    </div>
    <Fotter/>
    </>
  )
}

export default FacilitiesServices