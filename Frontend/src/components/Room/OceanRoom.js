import React from 'react'
import "../Room/rooms.css"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import or1 from "../assets/Room/or1.jpg"
import or2 from "../assets/Room/or2.jpg"
import or3 from "../assets/Room/or3.jpg"

const OceanRoom = () => {
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
            <button type="button" data-bs-target="#priNext" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#priNext" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#priNext" data-bs-slide-to="2" ></button>
            </div>

            <div className="carousel-inner">

            <div className="carousel-item active" data-interval='2500'>
                <img src={or1} className=" w-100" alt="..."/>
            </div>

            <div className="carousel-item">
                <img src={or2} className=" w-100" alt="..."/>
            </div>

            <div className="carousel-item">
                <img src={or3} className=" w-100" alt="..."/>
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
            <h1 className='h1 text-center border-bottom border-3' style={text}>Premier Ocean Room</h1>
        </div>
        <div className='container'>
            <div>
                 <h2 className='h2 fw-bold textSm0'>
                 Your exclusive escape with magnificent ocean views
                </h2><br/>

                <h4 className='h4 textSm'>
                Soak up captivating views of the Indian Ocean from your Premier Ocean Room, adorned with contemporary chic décor. The rooms are thoughtfully designed with tasteful furnishings, relaxing colour palettes, and fitted with state-of-the-art technology, delivering the right blend of leisure resort living and sophistication.                    
                </h4><br/><br/>          
                    <h2 className='h2 fw-bold textSm0'>
                        <i>
                            Features
                        </i>
                    </h2>
                <ul style={text}>
                    <li className='h5 textSm'>Each room offers 96 sqm / 1,032 sqf of luxury.</li>

                    <li  className='h5 textSm'>Magnificent view of the Indian Ocean.</li>

                    <li  className='h5 textSm'>Private hideaways with separate living and dining rooms.</li>

                    <li  className='h5 textSm'>Glass-enclosed shower, deep soaking tub, designer bath amenities, plush linens and extra-large towels.</li>
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
                <li className='h5 textSm'>Working desk</li>
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

export default OceanRoom