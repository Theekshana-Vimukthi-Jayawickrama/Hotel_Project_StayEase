import React from 'react'
import map0 from '../assets/About/map0.jpg'
import map1 from '../assets/About/map1.jpg'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import EC4 from '../assets/About/EC4.jpg'
import Destination from '../Home/Destination'
import '../About/about.css'

export default function MapDirections() {
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
  return (
<>    <Navi0/>
    <Navi/> 
    <div>
        <div className='container' style={styles0}>
            <div className='row' >
                <span className='display-1 d-none d-md-block' style={styles1}>Map & Directions</span>
                <img src={EC4}  className='w-100' ></img>
            </div>
        </div>
    </div> 
    <div>
        <h2 className='h2 text-center textSm0 fw-bold'>
        Find your way to luxury in Colombo
        </h2><br/>
        <p className='text-center textSm h5  text-muted'>
        StayEase Colombo benefits from a prime location between the Galle Face Green promenade and Beira Lake, in the heart of Colombo’s business district.It is also close to popular shopping areas and entertainment venues in the city.
        </p>
        <hr/><br/>
    </div>

    <div>
        <h2 className='h2 text-center textSm0 fw-bold'>
        Airport Connections
        </h2><br/>
        <p className='text-center textSm h5  text-muted'>
        The hotel is approximately 45 minutes’ drive from Bandaranaike International Airport (BIA).
        </p>
        <br/>
    </div>

    <div className='container'>
            <div className='row border-top border-3'>
                <div className=' col-lg-6 col-sm-12 '>
                    <h4 className='text-center h3 '>Hotel Limousine</h4>
                    <p className='textSm h5  text-muted text-center'>You can book a limousine pick-up by providing your flight details and estimated time of arrival when booking online.Alternatively, you can also contact us at (94 11) 788 8288 or email us at reservations.slcb@StayEase.com.</p>
                </div> 
                <div className='col-lg-6 pt-4 h4'>
                    <img className='ma-auto d-block img-fluid col-sm-12' src={map0}></img>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row border-top border-3 '>
                <div className=' col-lg-6 col-sm-12  order-lg-2 '>
                    <h4 className='text-center h3 textSm0'>Car Hire</h4>
                    <p className='textSm h5  text-muted text-center'>Car hire can be arranged by the hotel, or at any registered rent-a-car counter in the airport arrivals hall.</p>
                </div> 
                <div className='col-lg-6 pt-4 h4  order-lg-1'>
                    <img className='ma-auto d-block img-fluid col-sm-12' src={map1}></img>
                </div>
            </div>
        </div>
        <Destination/>
        <Fotter/>
</> 
  )
}
