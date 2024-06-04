import React from 'react'
import './homeAbout.css'
import one from "../assets/Home/sasha-kaunas-TAgGZWz6Qg8-unsplash.jpg"
import one1 from "../assets/Home/dining.jpg"
import one2 from "../assets/Home/spool.jpg"
import one3 from "../assets/Home/Room0.jpg"
import one4 from "../assets/Home/Room2.jpg"
import one5 from "../assets/Home/Room3.jpeg"
import RoomHome from './RoomHome'
import HomeEp from './HomeEp'
import HomeOffer from './HomeOffer'
import { Link } from 'react-router-dom'

const HomeAbout= () => {
  return (
    <div>
            {/*device*/}
        <div className='aboutSec0'>
            <div className='aboutSec d-flex flex-row '>
                <div className='aboutDes'> 
                
                    <h3>About</h3>
                        <p className='h5 text-muted py-2'>
                        Overlooking the pristine southern coast of Sri Lanka, StayEase colombo is home to an 18-hole championship golf course, which is the only resort course in the country, an expansive spa featuring exceptional Ayurveda treatments, and a unique artisan village that showcases local arts and crafts.                        </p>

                    <div className='more py-2'>
                        <Link to='/about' className='moreRoute' >Learn more...</Link>
                    </div>
                </div>            

                <div className='imgAbout'>
                    <img  src={one}/>  
                </div>
            </div>
        </div>
        <RoomHome/>
        <HomeEp/>
        <HomeOffer/>           
        {/*web end*/}

        
        {/* {mobile} */}
            <br/><br/>
            <div className='mob'> 
                <div className='mAbout'>
                    <div id ='topic'><h4>About</h4></div>
                    <div id='subTopic'><h6>Unlock a world of wonder</h6></div>
                    <div><img  src={one} className='w-75'/></div>  
                    <div id = 'description'><p>  The luxury resort spans 58 hectares, making it the largest resort in Sri Lanka, and boasts 274 spacious rooms, including 20 suites, all surrounded by stunning tropical gardens. The beachfront resort is an adventurer’s dream, with a mosaic of activities and unique curated expeditions to help you absorb the diversity of the island at its best.</p></div>
                    <div id='mmmore'> <a href='' id='mMore'>Learn More</a> </div>
                </div>
            
                    {/* dinning */}
                        <br/><br/>
                <div className='mAbout'>
                    <div id ='topic'><h4>Dining</h4></div>
                    <div id='subTopic'><h6>Unlock a new social and dining scene in the city</h6></div>
                    <div><img  src={one1} className='w-75'/></div>  
                    <div id = 'description'><p> journey that combines delectable flavors, impeccable service, and a captivating ambiance. Whether you are a guest staying at our luxurious accommodations or a discerning food enthusiast seeking a memorable dining experience, our exceptional restaurants and bars are sure to exceed your expectations.</p></div>
                    <div id='mmmore'> <a href='' id='mMore'>Learn More</a> </div>
                </div><br/><br/> 
                        
                        {/* rooms */}
                <div className='mRoom '>
                    <div className='mAbout mt-2'>
                        <div id ='topic'><h4>Recommended Room Types</h4></div></div>

                            <div id="move" class="carousel slide carousel-fade" data-bs-ride="carousel">

                                <div class="carousel-indicators">
                                <button type="button" data-bs-target="#move" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#move" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#move" data-bs-slide-to="2" ></button>
                                </div>

                        <div className="carousel-inner">

                            <div className="carousel-item active" data-interval='1500'>
                                <img src={one3} className=" mRoomImg w-100" alt="..."/>

                            <div className="carousel-caption ">
                                <h5 className='bg-dark text-white h6'>Deluxe Room</h5>
                                <p className='bg-dark text-white h6'>The Deluxe Rooms offer stunning views of our lush green golf course or tropical gardens.</p>
                                <a href='' class='moreLearn h6'>Learn More..</a>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={one4} className=" mRoomImg w-100" alt="..."/>

                            <div className="carousel-caption">
                                <h5 className='bg-dark text-white h6'>Two Deluxe Rooms connecting</h5>
                                <p className='bg-dark text-white h6'>Our Deluxe Lake View Inter-Connecting rooms offer stunning views of our lush green golf course or tropical gardens.</p>
                                <a href='' class='moreLearn h6'>Learn More..</a>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={one5} className=" mRoomImg w-100" alt="..."/>

                            <div className="carousel-caption">
                                <h5 className='bg-dark text-white h6'>Premier Ocean Room</h5>
                                <p className='bg-dark text-white h6'>Soak up captivating views of the Indian Ocean from your Premier Ocean Room.</p>
                                <a href='' class='moreLearn h6'>Learn More..</a>
                            </div>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#move" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#move" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

         {/* Experience */}

                            <br/><br/>
        <div className='mAbout'>
                <div id ='topic'><h4>Experience</h4></div>
                <div id='subTopic'><h6>Meetings & Events</h6></div>
                <div><img  src={one2} className='img-fulid w-75'/></div>  
                <div id = 'description'><p>
                    We offer you a range of activities that will leave you entertainment for choice! three swimming pools amidst stunning settings, a thrilling 7 metre-high trapeze and winding nature trails are just some of what we present to you.                     </p></div>
                <div id='mmmore'> <a href='' id='mMore'>Learn More</a> </div>
            </div> 
                        <br/><br/>
        </div>   
    </div> 
  )
}

export default HomeAbout
