import React from 'react'
import FS1 from '../assets/About/FS1.jpg'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import '../About/about.css'

export default function ServicesFacilities() {
    const styles0 = {
        position: 'relative',
    };
    const styles1 = {
        position: 'absolute',
        textAlign:'center',
        top:'50%',
        color: 'black',
        fontWeight:'bold',
    };
  return (
<>
    <Navi0/>
    <Navi/>
    <div>
        <div className='container' style={styles0}>
            <div className='row' >
                <span className='display-1 d-none d-md-block' style={styles1}>Services Facilities</span>
                <div className='col-12'><img src={FS1}  className='w-100' ></img></div>
            </div>
        </div>
    </div>

    <div className='container'>
        <h2 className='h2 text-center'>
        Catering to your every need.
        </h2><hr/><br/>

        <p  className='textSm  h5  text-muted text-center'>
            StayEase Colombo offers a full range of services and facilities, supported by an experienced and dedicated staff.
            <br/>
            If you require any service that is not listed here, please contact us and we will do our very best to accommodate your request.
        </p><br/>

        <div>
            <h4 className='h4 fw-bold'>
                Facilities 
            </h4>
            <ol  className='textSm h5  text-muted'>
                <li className='py-2'>Conference Facilities</li>
                <li className='py-2'>Facilities for the Disabled</li>
                <li className='py-2'>Foreign Exchange Counter</li>
                <li className='py-2'>Parking Facilities</li>
                <li className='py-2'>Safe Deposit Box</li>
            </ol>
        </div><br/>

        <div>
            <h4 className='h4 fw-bold'>
            Services 
            </h4>
            <ol  className='textSm h5  text-muted'>
                <li className='py-2'>Butler service in Suites</li>
                <li className='py-2'>Shoeshine Service</li>
                <li className='py-2'>Express Check-in and Check-out</li>
                <li className='py-2'>House Doctor on Call and In-House Clinic</li>
                <li className='py-2'>Laundry & Valet Service</li>
                <li className='py-2'>Postal/ Courier Service</li>
                <li className='py-2'>Wireless Internet in Public Areas</li>
            </ol>
        </div><br/>

        <div>
            <h4 className='h4 fw-bold'>
            Transportation 
            </h4>
            <ol  className='textSm h5  text-muted'>
                <li className='py-2'>Car Rental Service</li>
                <li className='py-2'>Taxi & Limousine Service</li>
            </ol>
        </div><br/>

        <div>
            <h4 className='h4 fw-bold'>
            Shops 
            </h4>
            <ol  className='textSm h5  text-muted'>
                <li className='py-2'>Beauty Salon</li>
                <li className='py-2'>Florist</li>
                <li className='py-2'>Gift Shop</li>
                <li className='py-2'>Pastry Shop</li>
            </ol>
        </div><br/>

        <div>
            <h4 className='h4 fw-bold'>
            Food & Beverages 
            </h4>
            <ol  className='textSm h5  text-muted'>
                <li className='py-2'>Lobby Lounge</li>
                <li className='py-2'>24-hour Room Service</li>
                <li className='py-2'>Grab & Go</li>
                
            </ol>
        </div><br/>
        
    </div>
    <Fotter/>
</>
  
  )
}
