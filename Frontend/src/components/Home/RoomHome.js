import React from 'react'
import './homeAbout.css'
import one from "../assets/Home/Room0.jpg"
import one1 from "../assets/Home/Room2.jpg"
import one2 from "../assets/Home/Room3.jpeg"
import { Link } from 'react-router-dom';


export default function RommHome() {
  return (
            <div>                
                <div className='roomType'>
                    <div>
                        <h3>Recommended Room Types</h3>
                            <br/>
                            <p className='h5 text-muted'>
                            All 274 luxury rooms and suites offer magnificent views of the golf course, the resort’s tropical gardens or the calm waves of the Indian Ocean. Indigenous materials and contemporary style seamlessly blend with the luxurious interior comforts to create an elegant and private resort haven.        
                            </p>
                    </div>

                    <div class="slide-container">
                        <span class="slider-span" id="slider-span1"></span>
                        <span class="slider-span" id="slider-span2"></span>
                        <span class="slider-span" id="slider-span3"></span>
                                {/* room1 */}
                        <div class="image-slider">
                            <div class="slides-div" id="slide-1">
                                <div>
                                    <img src={one} alt="" class="img" id="img1"/>
                                    <div class="inf" id="inf1">
                                        <h5>Deluxe Room</h5> <br/>
                                        <p >
                                    The Deluxe Rooms offer stunning views of our lush green golf course or tropical gardens. The airy rooms provide an ideal haven for guests, with either a spacious terrace or balcony overlooking the resorts vast greenery.                                   
                                        </p>
                                        <Link to="/rooms/deluxl" class ='moreLearn'>Learn More..</Link>
                                    </div>
                                </div> 
                                    <a href="#slider-span1" class="button" id="button-1"></a>
                            </div>
                                        {/* room2 */}
                            <div class="slides-div" id="slide-2">
                                <div>   
                                    <img src={one1} alt="" class="img" id="img2"/>
                                    <div class="inf" id ="inf2">
                                        <h5>Two Deluxe Rooms connecting</h5> <br/>
                                                <p>
                                        Our Deluxe Lake View Inter-Connecting rooms offer stunning views of our lush green golf course or tropical gardens. The airy rooms is an ideal haven for guests, with either a spacious terrace or balcony overlooking the resorts vast greenery and feature a king-bedded room connecting with a twin-bedded room.                                            
                                                </p>
                                            <Link to="/rooms/TDConnecting" class='moreLearn'>Learn More..</Link>
                                    </div>
                                </div> 
                                    <a href="#slider-span2" class="button" id="button-2"></a>
                            </div>
                                                     {/* room3 */}
                            <div class="slides-div" id="slide-3">
                                <div>
                                    <img src={one2} alt="" class="img" id="img3"/>
                                    <div class="inf" id='inf3'>
                                        <h5>Premier Ocean Room</h5> <br/>
                                                <p>
                                        Soak up captivating views of the Indian Ocean from your Premier Ocean Room, adorned with contemporary chic décor. The rooms are thoughtfully designed with tasteful furnishings, relaxing colour palettes, and fitted with state-of-the-art technology, delivering the right blend of leisure resort living and sophistication.                                            
                                                </p>
                                        <Link to="/rooms/oceanSuite" class='moreLearn'>Learn More..</Link>
                                    </div>
                                </div>
                                    <a href="#slider-span3" class="button" id="button-3"></a>
                            </div>
                        </div>
                    </div>
                </div>         
            <div>
        </div>           
    </div>           
  )
}
