import React from 'react'
import logo1 from"../assets/Dining/logo1.png"
import Bojun from"../assets/Dining/Bojunhala.webp"
import bojunha0 from "../assets/Dining/bojunha0.jpg"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import '../Dining/dining.css'

export default function Bojunhala() {
    const styles0 = {
        position: 'relative',
    };
    const styles1 = {
        position: 'absolute',
        textAlign:'center',
        top:'70%',
        color: '#fff',
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

        <div className='container' style={styles0}>
            <div className='row' >
                <span className='h1' style={styles1}>Bojunhala <br/> International | $$$</span>
                <div className='text-center'><img src={bojunha0} style={customHeight } className='w-100' ></img></div>
            </div>
        </div>

                {/* small size screen visble basicinformation */}
    <div className='container  d-md-none border border-3 px-0 bg-white'>
        <div className='row'>
        <div className='col-md-12'>
                    <div className=' sticky-top float-right border border-5'>
                    <img className='ma-auto img-fluid p-2' src={logo1}/><br/>
                        <div className=' bg-success p-2 text-dark bg-opacity-10 textSm'>
                            Location: 
                            Ground Level, Sittrakala Estate, colombo<br/><br/>
                            Email:
                            dining.slht@StayEase.com<br/><br/>
                            Phone:
                            (94 47) 788 8812254<br/><br/>
                            Operating Hours:
                            Breakfast - 7am to 10.30am<br/><br/>
                            Lunch - 12noon to 3.30pm<br/><br/>
                            Dinner - 7pm to 10.30pm
                            </div>
                        </div>
                    </div>
                </div> 
            </div>    
    <div>
        {/* end mobile */}
    </div>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-12 col-sm-12' style={stick}>
                <div className='col-lg-7 col-md-12 ' >      
                <a href ="#RestaurantStory" className='float-lef p-2 button" class=" btn m-2 btn-outline-secondary text-decoration-none '> <p className='fw-bold  textSm h4 '>Restaurant Story</p></a>
                <a href = "#BasicInfor" className='float-left p-2 button" class=" m-2 btn btn-outline-secondary text-decoration-none fw-bold  textSm' > <p className='fw-bold  textSm h4'>Basic Information</p></a>
                </div>
            </div>
            </div>
        </div>
    <div className='container'>
        <div className='row'>            
                <div className='col-lg-8 col-sm-12' > {/* Restaurant Story */}
                    <div id="RestaurantStory"><h3 className='h2 textSm0 fw-bold' >Restaurant Story</h3></div>
                            <div className='col-lg-12 col-sm-12 text-center'>
                            <div className='text-center'>
                                <img className='img-fluid w-100'  style={{ height: '400px', width: '600px' }} src={Bojun}/></div>
                                <div className='col-lg-12 col-sm-12 p-4'>
                                    <h4 className='h4'>Native delights and world cuisine</h4>
                                    <p className='p-4 textSm h5  text-muted'>
                                        Bojunhala, the all-day dining restaurant, offers the finest of native Sri Lankan cuisine alongside an extensive array of international fare. Multiple show kitchens allow our chefs to serve the freshest of dishes, including the finest seafood on the south coast, hand-picked just for you. The casual and convivial indoor ambiance or dining al fresco with spectacular views of the garden, make this restaurant a fine choice at any hour. A dedicated kid’s zone will keep the little ones prancing to the counter for more.
                                    </p>
                                    {/* Basic Information */}
                                    <h3 className='h3 p-2'id="BasicInfor">Basic Information</h3> 
                                <div className='col-lg-12 col-sm-12 bg-success p-2 text-dark bg-opacity-10'>
                                    
                                        <p className='h5 textSm h5 ' >
                                        Cuisine: International<br/><br/>
                                        Budget: $$$<br/><br/>
                                        Dress Code: Smart Casual<br/><br/>
                                        Smoking Policy: Designated smoking area is available<br/><br/>
                                        Children's Meal Plan: <br/><br/>
                                        Children must be under 12 years of age.<br/><br/>
                                        StayEase Circle member privilege:<br/><br/>
                                        Up to 2 children (under the age of 7) can enjoy complimentary buffet meals at all-day dining venues, when accompanied by a paying adult. Children aged 7 to 11 will enjoy a 50% discount.   
                                        </p>
                                </div>                                    
                            </div> 
                    </div>      
                </div>
                
                        {/* Information */}
                <div className='col-lg-4 col-sm-12 d-none d-md-block d-none d-md-block'>
                    <div className=' sticky-top float-right m-2 p-4 border border-5'>
                    <img className='ma-auto img-fluid p-4' src={logo1}/><br/>
                        <div className=' bg-success p-4 text-dark bg-opacity-10 textSm h5 '>
                            Location: 
                            Ground Level, Sittrakala Estate, colombo<br/><br/>
                            Email:
                            dining.slht@StayEase.com<br/><br/>
                            Phone:
                            (94 47) 788 8812254<br/><br/>
                            Operating Hours:
                            Breakfast - 7am to 10.30am<br/><br/>
                            Lunch - 12noon to 3.30pm<br/><br/>
                            Dinner - 7pm to 10.30pm
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
            <Fotter/>                    
</>
  )
}
