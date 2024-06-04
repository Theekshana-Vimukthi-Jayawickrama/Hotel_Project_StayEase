import React from 'react'
import off1 from '../assets/Home/off1.webp'
import off2 from '../assets/Home/off2.jpeg'
import off3 from '../assets/Home/off3.jpg'
import { Link } from 'react-router-dom';

export default function () {
  return (
    <>  
              { /* offer1 */ }
        <div class='offSec0'> 
                <h4 id='head'>Offers</h4>
            <div className='d-flex flex-row  justify-content-center'>
                    
            <div className='d-flex flex-colun'>
                <div className='p-4 offSec'>
                        <div><img src={off1}/></div>
                        <div>
                          <span>Rooms & Suites</span><br/>
                          <h6>StayEase Exclusive Member Rate With Breakfast</h6><br/>
                          <p>Exclusive Member Rate with Breakfast for StayEase member.</p>
                          <h6>From LKR 54,858.60 Average Per Night</h6><br/>
                        </div>
                        <div ><Link to="/off1" className='moreOff'>View Details</Link></div>
                </div>
                </div>
                            {/* offer2 */}
                <div className='d-flex flex-colun'>
                <div className='p-4 offSec'>
                    <div><img src={off2}/></div>
                    <div ><span>Rooms & Suites</span><br/>
                    <h6>An All-inclusive Island Escapet</h6><br/>
                    <p>An indulgent escape with breakfast, lunch, dinner, select beverages, return airport transfers and leisure experiences.  </p>
                    <h6>From LKR 54,858.60 Average Per Night</h6>
                    </div>
                    <div  className='p-4'><Link href to="/Off2" className='moreOff'>View Details</Link></div>
                </div>
                </div>
                                  {/* offer03 */}
                <div className='d-flex flex-colun'>
                <div className='p-4 offSec'>
                    <div className='p-2'><img src={off3}/></div>
                    <div className='p-2'><span>weddings</span><br/>
                    <h6>Weddings Made by StayEase</h6><br/>
                    <p>Book your wedding and earn Triple Golden Circle Award Points. Redeem your honeymoon stay with a Diamond benefit.</p>
                   </div>
                <div className='p-2'><Link href to='/off3' className='moreOff'>View Details</Link></div>
                </div>
                </div>

            </div>

          </div>
        
    
    </>
  )
}
