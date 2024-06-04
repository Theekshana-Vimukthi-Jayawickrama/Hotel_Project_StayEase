import React from 'react'
import './homeAbout.css'
import ep1 from '../assets/Home/ep1.jpg'
import ep2 from '../assets/Home/ep2.jpg'


export default function HomeEp() {
  return (
<>  
    <div className='ep'> 
            
            {/* Experiences */}
            <div className='epSec d-flex flex-row'>
            
                <div className='imgep'>
                        <img  src={ep1}/>  
                </div>
                    
                    <div className='epDes'> 
                        <h3>Experiences</h3>
                            <p className='h5'>
                            Sri Lanka’s first and only golf resort is set amid a vast coconut palm plantation, offering spectacular views and unique challenges for both casual and seasoned players.
                                                                <br/>
                            The abundance of nature and wildlife, framed by lakes and the beautiful Indian Ocean, sets the scene for an incredible golfing experience.                            </p>
                        <div className='moreEP py-2'>
                            <a href="" className='moreEPRoute' >Learn more...</a>
                        </div>
                    </div>            
            </div>

        <div className='epSec d-flex flex-row'>
                    
            <div className='epDes'> 
                    <h3>Experiences</h3>
                            <p className='h5'>
                            Kids and adults alike can fly high with our full-size trapeze. Our in-house expert will introduce you and your child to the swinging arts, where you will learn exciting tricks in a safe and fully supervised environment. For those who would prefer jumping to swinging, you can defy gravity on our outdoor above-ground trampoline.
                            </p>
                    <div className='moreEP py-3'>
                            <a href="" className='moreEPRoute' >Learn more...</a>
                    </div>
            </div> 
            <div className='imgep'>
                <img  src={ep2}/>  
            </div>            
        </div>
    </div>
</>  
  )
}
