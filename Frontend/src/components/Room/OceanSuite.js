import React from 'react'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import os1 from "../assets/Room/os1.jpg"
import os2 from "../assets/Room/os2.jpg"
import os3 from "../assets/Room/os3.jpg"

const OceanSuite = () => {
    const text ={
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "#876a20",
      };
  return (
    
    <>
        <Navi0/>
            <Navi/> <br/>
        <div className='container'>
            <div id="priNext" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    {/* indicator */}
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#priNext" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#priNext" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#priNext" data-bs-slide-to="2" ></button>
            </div>

            <div className="carousel-inner">

            <div className="carousel-item active" data-interval='2500'>
                <img src={os1} className=" w-100" alt="..."/>
            </div>

            <div className="carousel-item">
                <img src={os2} className=" w-100" alt="..."/>
            </div>

            <div className="carousel-item">
                <img src={os3} className=" w-100" alt="..."/>
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
        </div><br/><br/>

        <div>
            <h1 className='h1 text-center border-bottom border-3' style={text}>Premier Ocean Suite</h1>
        </div>
        <div className='container'>
            <div>
                 <h2 className='h2 fw-bold textSm0'>
                 Marvellous ocean views
                </h2><br/>

                <h4 className='h4 textSm'>
                The spacious Premier Ocean Suites offer a separate living and dining area, and the private balcony offers a front row seat to spectacular views over the Indian Ocean. These suites are furnished with a touch of flair in rich hues inspired by authentic local culture.                </h4><br/><br/>          
                    <h2 className='h2 fw-bold textSm0'>
                        <i>
                            Features
                        </i>
                    </h2>
                <ul style={text}>
                    <li className='h5 textSm'>Each room offers 48 sqm / 516 sqf of luxury.</li>

                    <li  className='h5 textSm'>Stunning views of the Indian Ocean.</li>

                    <li  className='h5 textSm'>Plush linens and extra-large towels. Glass-enclosed shower, deep soaking tub and designer bath amenities.</li>

                    <li  className='h5 textSm'>Broadband Internet and Wi-Fi access.</li>
                </ul><br/><br/>

                <h2 className='h2 fw-bold textSm0'>
                        <i>
                    Amenities
                        </i>
                </h2>

                <h4>Bath & Personal Care</h4>

                <ul style={text}>
                    <li className='h5 textSm'>Pillow menu</li>
                    <li className='h5 textSm'>Plush bathrobes and slippers</li>
                    <li className='h5 textSm'>Premium StayEase toiletries</li>
                    <li className='h5 textSm'>Separate shower and soaking tub</li>
                </ul><br/><br/>

                <h2 className='h2 fw-bold textSm0'>
                        <i> 
                        Media & Entertainment             
                        </i>
                        <ul style={text}> 
                        <li className='h5 textSm'>Satellite / cable television</li> </ul>
                </h2><br/>

                <h2 className='h2 fw-bold textSm0'>
                        <i> 
                Office Equipment & Stationery
                        </i>
                </h2>        
                <ul style={text}> 

                <li className='h5 textSm'>Elegant stationary</li>
                <li className='h5 textSm'>In-room locker</li>
                <li className='h5 textSm'>International Direct Dial telephone</li>
                </ul> <br/>
                
                <h2 className='h2 fw-bold textSm0'>
                        <i> Refreshments
                        </i>
                </h2>

                <ul style={text}> 
                <li className='h5 textSm'>Coffee / tea-making facilities</li>
                <li className='h5 textSm'>Mini-bar</li>

                </ul>        <br/>        
                
                <h2 className='h2 fw-bold textSm0 text-center'> Children's meal plan for guests staying at the hotel.</h2><br/>
                <p className='textSm h5 text-muted text-center' >               
                Children must be under 12 years of age.<br/><br/>
                StayEase Circle member privilege.<br/><br/>
                Up to 2 children (under the age of 7) can enjoy complimentary buffet meals at all-day dining venues, when accompanied by a paying adult. Children aged 7 to 11 will enjoy a 50% discount.
                </p>
 
            </div>
        </div><br/>
        <Fotter/>
    </>

  )
}

export default OceanSuite