import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ov1 from '../assets/About/0v1.webp'
import ov2 from '../assets/About/ov2.jpg'
import ov5 from '../assets/About/ov5.jpg'
import ov6 from '../assets/About/ov6.jpg'
import ov3 from '../assets/About/0v3.jpg'
import ov4 from '../assets/About/ov4.jpg'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import '../About/about.css'
import AboutDedSlid from './AboutDedSlid'


export default function Overview() {

    const [isExpand, setExpand] = useState(false);

    const ExpandTog = ()=>{
        setExpand( !isExpand );
    };

    const learn_more = {
        border: '1px solid black',
        textDecoration: 'none',
        padding: '5px',
      };

     const imageSize = {
        overflow: 'hidden',
        width:'624px',
        height:'325px',
       
     };
        
  return (
    <> 
        <Navi0/>
        <Navi/> <br/>
        <AboutDedSlid imageeSource1 = {require ('../assets/About/0v1.webp')} imageeSource2 = {require ('../assets/About/ov2.jpg')} imageeSource3 = {require ('../assets/About/ov6.jpg')}/>

        <div className='container'>
            <div className='row'>
                <div className='display-4 col-12 text-center h2 '> Unlock a World of Wonder</div>
            </div>
            <div className='row'>
                <div className='h3 col-12 text-center'> <b>where stories unfold and memories are made</b> </div>
            </div>
            <div className='row'>
                <div > 
                    <p className=' col-12 h5 text-center text-muted textSm '> Overlooking the pristine southern coast of beautiful Sri Lanka, StayEase Colombo is located along the ancient Spice Route in a city steeped in rich history. Colombo is known for its natural beauty and allows visitors to explore Asia’s fascinating nature and wildlife sanctuaries, including the Yala, Udawalawe, Lunugamvehera and Bundala National Parks.  The luxury resort spans 58 hectares, making it the largest resort in Sri Lanka, and boasts 274 spacious rooms, including 20 suites, all surrounded by stunning tropical gardens.</p><br/>
                    <p className=' col-12 text-center collapse paragraph textSm  h5  text-muted ' id= 'readmo'>The beachfront resort is an adventurer’s dream, with a mosaic of activities and unique curated expeditions to help you absorb the diversity of the island at its best.  Play at the first and only resort golf course in Sri Lanka, for a memorable golfing experience with spectacular views of the Indian Ocean. Designed by world-renowned golf architect, Rodney Wright, the 18-hole golf course spreads across a vast coconut palm plantation, a sapphire quarry, lakes and sand dunes, offering distinctive challenges for both beginners and seasoned players.  Unparalleled recreational activities, and the comprehensive kids' club, make this resort the ideal place for a family vacation. Experience the thrills of a 7-metre-high trapeze, an outdoor water park and many more fun-filled activities. The resort also offers 3 swimming pools and a health club. If you seek relaxation, Chi Ayurveda Spa is a place of personal peace that offers ancient healing therapies and personalized Ayurveda consultations with our expert doctor.   The unique Artisan Village gives you an opportunity to explore and interact with local artists and craftsmen. The Village is a space dedicated to supporting and preserving the treasures of southern Sri Lanka's artisan communities and comes alive with regular traditional dance and music performances in the evening.  Take a gastronomic stroll across our vibrant dining destinations. Indulge in the finest Sri Lankan cuisine at Bojunhala, take in the Southeast Asian flavours, inspired by the famous hawker stalls, at Sera, enjoy international fare in a lush, green setting, at Ulpatha, the resort's Golf Club House, and cap off the day with a sundowner at Gimanhala Lounge, offering specially crafted cocktails and magnificent views of the Indian Ocean.   Stayease Hambantota features inspired venues for your event - from a magical wedding under swaying palms to a high-powered conference in our ballroom, our team is dedicated to designing the memorable event for you.  We invite you to unlock a world of wonder and discover the true spirit of Sri Lanka at Stayease Hambantota.  View our factsheet here.</p>
                    <div className='row '>
                        <a href='#readmo' data-toggle="collapse" className='text-center text-dark link-dark'  onClick={ExpandTog} >{isExpand ?'collapse':'Read more..'  }</a>
                    </div>
                </div>
            </div>
        </div>

        <div className='container border-top border-3'>
            <div className='row '>
                <div className=' col-lg-6 col-sm-12  '>
                    <h4 className='text-center h4 '><b>Explore Colombo</b></h4>
                    <p className='textSm  h5  text-muted'>Colombo, the commercial capital of Sri Lanka, has a long history as an important port on the ancient east-west trade routes, and has been variously ruled by the Portuguese, Dutch and British. That heritage is reflected in its often charming architecture and unique culture.The city</p>
                    <div className='text-center py-4'><Link to='/about/exploreColombo' className='text-dark link-dark text-center ' style = {learn_more}>Learn More...</Link></div>
                </div> 
                <div className='col-lg-6 mt-4 h4 col-sm-12'>
                    <img className='ma-auto d-block img-fluid ' src={ov5}></img>
                </div>
            </div>
        </div>

        <div className='container border-top border-3 '>
            <div className='row '  >
                <div className=' col-lg-8  mt-4 p-4 ml-4 col-sm-12 order-lg-2'>
                    <h4 className='text-center h4 '><b>Services and Facilities</b></h4>
                    <p className='textSm  h5  text-muted'>Stayease Colombo offers a full range of services and facilities, supported by an experienced and dedicated staff. If you require any service that is not listed here, please contact us and we will do our very best to accommodate your request. Facilities  Conference Facilities</p>
                    <div className='text-center py-4'><Link to='/about/servicesFacilities' className='text-dark link-dark text-center '  style = {learn_more}>Learn More...</Link></div> </div>
                <div className='col-lg-4 pt-4 col-sm-12' >
                    <img className='ma-auto d-block img-fluid order-lg-1 w-100'  src={ov4} />
                </div>
            </div>
        </div>

        <div className='container border-top border-3'>
            <div className='row  '>
                <div className=' col-lg-6  mt-4 pt-4 ml-4 col-sm-12 '>
                    <h4 className='text-center h4'><b>Map & Directions</b></h4>
                    <p className='textSm  h5'>StayEase Colombo benefits from a prime location between the Galle Face Green promenade and Beira Lake, in the heart of Colombo’s business district.It is also close to popular shopping areas and entertainment venues in the city.</p>
                    <div className='text-center py-4'><a href='' className='text-dark link-dark'  style = {learn_more}>Learn More...</a></div>
                </div>
                <div className='col-lg-6 pt-4'>
                    <img className='ma-auto d-block img-fluid col-sm-12' src={ov3}></img>
                </div>
            </div>
        </div>
        <Fotter/>
    </>
  )
}
