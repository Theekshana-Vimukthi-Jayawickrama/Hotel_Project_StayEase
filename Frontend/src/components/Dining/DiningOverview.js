import React from 'react'
import { Link } from 'react-router-dom';
import sera_restaurant from '../assets/Dining/sera-restaurant.jpg'
import Bojunhala0 from "../assets/Dining/Bojunhala0.png"
import bojunha0 from "../assets/Dining/bojunha0.jpg"
import s1 from "../assets/Dining/01.jpg"
import s2 from "../assets/Dining/02.jpg"
import ulpatha1 from "../assets/Dining/ulpatha0.jpg"
import GimanhalaLounge1 from "../assets/Dining/GimanhalaLounge1.jpg"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import '../Dining/dining.css'

const DiningOverview = () => {
 const text ={
    fontFamily:"Arial, Helvetica, sans-serif",
    color: "#876a20",
    textDecoration: 'none'
 };
  return (
    <>
    <Navi0/>
    <Navi/>
    <br/><br/>
        <div className='container-xxl' >
        <div className='carousel slide carousel-fade' data-bs-ride="carousel" id="pageSlide">

            <div className="carousel-indicators">
            <button type="button" data-bs-target="#pageSlide" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#pageSlide" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#pageSlide" data-bs-slide-to="2"></button>
  
            </div>

            <div className='carousel-inner bg-dark overflow-hidden' >

                <div className='carousel-item d-block w-100 active'  data-bs-interval="2000">
                    <img src = {s1}  className=' mx-auto img-fluid '/>      
                    <div class="carousel-caption d-none d-md-block">
                    <h1>DINING</h1>
                    </div>
                </div>
        
                <div className='carousel-item d-block ' data-bs-interval="3000" >
                    <img src = { bojunha0}  className='  mx-auto img-fluid' />
                    <div class="carousel-caption d-none d-md-block">
                    <h1>DINING</h1>
                    </div>
                </div>
                <div className='carousel-item d-block'data-bs-interval="2000" >
                    <img src = { s2}  className='  mx-auto img-fluid' />
                    <div class="carousel-caption d-none d-md-block">
                    <h1>DINING</h1>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#pageSlide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#pageSlide" data-bs-slide="next"> 
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>

            </div>
        </div>
    </div>

    <div className='row m-4 p-4 text-center border ' style={text}>
        <div className='col-lg-3 col-sm-2'></div>
        <div className='col-lg-6 col-sm-8'>
        <h1 className='h1'><i> Fresh island tastes & flavours of the world</i></h1><br/>
        <p className='h4 text-muted textSm'>From authentic Sri Lankan specialities to dishes inspired by the hawker stalls of Southeast Asia, there’s something for everyone.
            Unlock experiences worth savouring with StayEase Circle. Earn and redeem Points, and enjoy exclusive member privileges. Enjoy a fixed Points redemption value of 15 Points to US$1. Join now.
        </p>
        </div>
        <div className='col-lg-3 col-sm-2'></div>
    </div><br/>

    <div className='container'>
        <h3 className='h2 fw-bold text-center' style={text}>Restaurants & Bars</h3>
        <div className='row'>
                
                <div className='col-lg-3 col-md-6 p-4 offSec border' >
                        < Link to ='/dining/Ulpatha' className='text-decoration-none'> 
                            < img src={ulpatha1} className='img-thumbnail img-fluid  '/>
                            <h3 className='h5 text-center pt-2 ' style={text}> Ulpatha Club House and Bar</h3><br/>
                            <p className='text-center' style={text}>
                                StayEase Colombo<br/><br/>
                                Colombo<br/><br/>
                                Modern European | $$
                            </p> 
                        </Link>
                </div>
               
                <div className='col-lg-3 col-md-6 p-4 offSec  border'>
                    < Link to ='/dining/gimanhala' className='text-decoration-none'>                      
                        < img src={GimanhalaLounge1} className='img-thumbnail img-fluid ' style={text}/>
                        <h3 className='h5 text-center pt-2' style={text}> Gimanhala Lounge</h3><br/>
                        <p className='text-center' style={text}>
                            StayEase Colombo<br/><br/>
                            Colombo<br/><br/>
                            Lounge and Bar | $$                      
                        </p>
                    </Link>
                </div> 

                
                <div className='col-lg-3  col-md-6 p-4 offSec  border'>
                    < Link to ='/dining/bojunhala' className='text-decoration-none'>    
                        < img src={Bojunhala0} className='img-thumbnail img-fluid ' style={text}/>
                        <h3 className='h5 text-center pt-2' style={text} > Bojunhala</h3><br/><br/>
                        <p className='text-center' style={text}>
                            StayEase Colombo<br/><br/>
                            Colombo<br/><br/>
                            International | $$$                    
                        </p>
                    </Link>      
                </div> 

                <div className='col-lg-3  col-md-6 p-4 offSec  border'> 
                    < Link to ='/dining/Sera' className='text-decoration-none'>                    
                        < img src={sera_restaurant} className='img-thumbnail img-fluid ' style={text}/>
                        <h3 className='h5 text-center pt-2' style={text}>  Sera</h3><br/>
                        <p className='text-center' style={text}>                  
                        StayEase Colombo<br/><br/>
                        Colombo<br/><br/>
                        South East Asian | $$$                   
                        </p>
                    </Link>     
               </div>
                

        </div>
        <div>

        </div>
    </div>
    <Fotter/>
    </>
  )
}

export default DiningOverview