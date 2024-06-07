import React from 'react'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import sera from "../assets/Dining/sera.png"
import seraRestaurant from "../assets/Dining/sera-restaurant.jpg"
import sera0 from "../assets/Dining/sera0.jpg"
import { FaConciergeBell } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import '../Dining/dining.css'

const Sera = () => {
    const styles0 = {
        position: 'relative',
    };
    const styles1 = {
        position: 'absolute',
        textAlign:'center',
        top:'70%',
        color: 'white',
        fontWeight:'bold',
        zIndex: "100",
    };
    const stick = {
        position: "sticky",
        top: "0",
        zIndex: "100",
      }
    const customHeight={
        height:"400px",
    }  
  return (
    <>
        <Navi0/>
    <Navi/>
    <div>
        <div className='container-fulid' style={styles0}>
            <div className='row' >
                <span className='h1' style={styles1}>Sera <br/> South East Asian $$$</span>
                <div className='text-center'><img src={sera0}  className='w-100 img-fluid img-fluid'style={customHeight } ></img></div>
            </div>
        </div>
    </div> 
    {/* small size screen visble basicinformation */}
    <div className='container d-md-none border border-3 px-0 bg-white'>
        <div className='col-md-12 px-2 text-center'>
            <div class="d-flex flex-row ">
                <div className='p-2'><h3>Basic Information</h3></div>
            </div>
        </div>
    <div className='row'>     
        <div className=' col-sm-6'>
                <div className='pb-3 flex-grow-1'><h3 className='h6 text-muted'>< FaConciergeBell /> South East Asian</h3></div>
                <div className=' pb-3  flex-grow-1'><h3 className='h6 text-muted'> <FaDollarSign />  $$$</h3></div>
                <div className='pb-3  flex-grow-1'><h3 className='h6 text-muted'><FaClock/> 6.30 p.m. to 10.30 p.m.</h3></div>
        </div>
        <div className='col-sm-6'>          
                <div className='pb-3 '><h3 className='h6 text-muted'><FaPhoneAlt/> Phone: (94 47) 788 8128254</h3></div>
                <div className='pb-3'><h3 className='h6 text-muted'><FaTshirt/> Smart Casual</h3></div>
                <div className='pb-3 '><h3 className='h6 text-muted'><FaMailBulk/> Email: dining.slht@StayEase.com</h3></div>
        </div>
     
    </div>        
        <div >
            <div class="d-flex flex-row">
                <div className='text-center'><h3 className='h6 text-muted'><FaLocationArrow/> Location: Location: Ground Level, Sittrakala Estate,colombo</h3></div>
            </div>
        </div>
    </div>   
    {/* end mobile vision */}

        <div className='container'>
            <div className='col-lg-12 col-sm-12' style={stick}>
                <div className='col-7 col-sm-12 d-none d-md-block' >      
                <a href ="#RestaurantStory" className='float-lef p-2 button" class="font-weight-bold btn m-2 btn-outline-secondary text-decoration-none'><p className='fw-bold  textSm h4 '>Restaurant Story</p></a>
                <a href = "#BasicInfor" className='float-left p-2 button" class="font-weight-bold m-2 btn btn-outline-secondary text-decoration-none' > <p className='fw-bold  textSm h4'>Basic Information</p></a>
                </div>
            </div>
        </div>
    <div className='container'>
     <div className='row'>               {/* Restaurant Story */}
                <div className='col-lg-8 col-sm-12 ' >
                    <div id="RestaurantStory"><h3 className='h3 textSm0 fw-bold' >Restaurant Story</h3></div>
                            <div className='col-lg-12 col-sm-12 text-center'>
                            <div className='text-center'>
                                <div className='col-lg-8 col-sm-12 '><img className='img-fluid w-100' style={{ height: '300px', width: '600px' }}src={seraRestaurant}/></div>
                                <div className='col-lg-12 col-sm-12 p-4'>
                                    <h4 className='h4 fw-bold'>Alluring flavours of Asia</h4>
                                    <p className='p-4 col-sm-12 h5 textSm text-muted'>
                                    From Tom Yang Goong, the delicious soup of Thailand, to Malaysian sambals with their spicy, lingering taste; from authentic Singaporean Laksa, rich in coconut flavour to succulent Peking duck, these authentically prepared dishes will have you feeling nostalgic of travels to these vibrant regions.                                    </p>
                                    <h3 className='h3 fw-bold p-4 d-none d-md-block d-none d-md-block'id="BasicInfor">Basic Information</h3> 
                                <div className='col-lg-12 col-sm-12 bg-success p-2 text-dark bg-opacity-10  d-none d-md-block d-none d-md-block'>                                   
                                        <p className='h4 textSm0'>
                                        Cuisine: International<br/><br/>
                                        Budget: $$$<br/><br/>
                                        Dress Code: Smart Casual<br/><br/>
                                        Smoking Policy: Designated smoking area is available<br/><br/>
                                        </p>
                                    </div>
                                </div>                                    
                            </div> 
                    </div>      
                </div>
                <div className='col-lg-4 col-sm-12 '>
                    <div className=' sticky-top float-right m-2 p-4 border border-5 d-none d-md-block d-none d-md-block'>
                    <img className='ma-auto img-fluid p-4' src={sera}/><br/>
                        <div className=' bg-success p-4 text-dark bg-opacity-10 h5 text-muted textSm'>
                 
                            Location: Ground Level, Sittrakala Estate,colombo<br/><br/>
                            Email: dining.slht@StayEase.com<br/><br/>
                            Phone: (94 47) 788 8128254<br/><br/>
                            Operating Hours: 6.30 p.m. to 10.30 p.m.
                            
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
            <Fotter/>  
    
    </>
  )
}

export default Sera