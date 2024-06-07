import React from 'react'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import ulpatha0 from '../assets/Dining/ulpatha0.jpg'
import ulpatha1 from'../assets/Dining/ulpatha1.jpg'
import ulpatha3 from "../assets/Dining/ulpatha3.jpg"
import '../Dining/dining.css'

const Ulpatha = () => {
    const styles0 = {
        position: 'relative',
    };
    const styles1 = {
        position: 'absolute',
        textAlign:'center',
        top:'50%',
        color: 'white',
        fontWeight:'bold',
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
                <span className='h1' style={styles1}>Ulpatha Club House & Bar<br/>Modern European | $$</span>
                <div className='text-center'><img src={ulpatha1}  style={customHeight } className='w-100' ></img></div>
            </div>
        </div>

                {/* small size screen visble basicinformation */}
    <div className='container  d-md-none border border-3 px-0 bg-white'>
        <div className='row'>
        <div className='col-md-12'>
                    <div className=' sticky-top float-right border border-5'>
                    <img className='ma-auto img-fluid p-2' src={ulpatha3}/><br/>
                        <div className=' bg-success p-2 text-dark bg-opacity-10'>
                        Location:
                            Lobby Level, Sittrakala Estate, colombo<br/><br/>
                            Email: dining.slht@shangri-la.com <br/><br/>
                            Phone: (94 47) 788 812888<br/><br/>
                        Operating Hours:1pm : 11pm daily<br/>
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
                <a href ="#RestaurantStory" className='float-lef p-2 button" class="font-weight-bold btn m-2 btn-outline-secondary text-decoration-none'><p className='fw-bold  textSm h4 '>Restaurant Story</p></a>
                <a href = "#BasicInfor" className='float-left p-2 button" class="font-weight-bold m-2 btn btn-outline-secondary text-decoration-none' ><p className='fw-bold  textSm h4'>Basic Information</p></a>
                </div>
            </div>
            </div>
        </div>
    <div className='container'>
        <div className='row'>            
                <div className='col-lg-8 col-sm-12' > {/* Restaurant Story */}
                    <div id="RestaurantStory"><h3 className='h3 fw-bold' >Restaurant Story</h3></div>
                            <div className='col-lg-12 col-sm-12 text-center'>
                            <div className='text-center'>
                                <img className='img-fluid' style={{ height: '300px', width: '600px' }}  src={ulpatha0}/></div>
                                <div className='col-lg-12 col-sm-12 p-4'>
                                    <h4 className='h4 fw-bold textSm0'>Stunning ocean vistas and elegant settings</h4>
                                    <p className='p-4 h5 text-muted textSm'>
                                    Walk into our breezy lounge overlooking the Indian Ocean and be captivated by the beauty of this extraordinary place. <br/>Gimanhala Lounge is the spot for guests to enjoy afternoon tea or a selection from the cocktail trolley after a day of exploring. The best time to visit is at sunset, where you can catch the last rays of the day with a signature beverage crafted by our expert mixologist.                                     </p>
                                    {/* Basic Information */}
                                    <h3 className='h3 p-2 fw-bold'id="BasicInfor">Basic Information</h3> 
                                <div className='col-lg-12 col-sm-12 bg-success p-2 text-dark bg-opacity-10'>
                                    
                                        <p className='h4 textSm' >
                                        Cuisine: Lounge and Barl<br/><br/>
                                        Budget: $$<br/><br/>
                                        Dress Code: Smart casual<br/><br/>
                                        Smoking Policy: Designated smoking area available<br/><br/>
                                        </p>
                                </div>                                    
                            </div> 
                    </div>      
                </div>
                
                        {/* Information */}
                <div className='col-lg-4 col-sm-12 d-none d-md-block d-none d-md-block'>
                    <div className=' sticky-top float-right m-2 p-4 border border-5'>
                    <img className='ma-auto img-fluid p-4' src={ulpatha3}/><br/>
                        <div className=' bg-success p-4 text-dark bg-opacity-10 h4 text-muted textSm0'>
                        Location:
                            Lobby Level, Sittrakala Estate, colombo<br/><br/>
                            Email: dining.slht@StayEase.com <br/><br/>
                            Phone: (94 47) 788 812888<br/><br/>
                            Operating Hours:1pm : 11pm daily<br/>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
            <Fotter/>  
    </>
  )
}

export default Ulpatha