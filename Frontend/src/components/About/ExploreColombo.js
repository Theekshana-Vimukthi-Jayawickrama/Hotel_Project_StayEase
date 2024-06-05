
import ov5 from '../assets/About/ov5.jpg'
import EC0 from '../assets/About/EC0.jpg'
import EC1 from '../assets/About/EC1.jpg'
import EC2 from '../assets/About/EC2.jpg'
import EC3 from '../assets/About/EC4.jpg'
import EC4 from '../assets/About/EC3.jpg'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import '../About/about.css'
import { useState } from 'react'

export default function ExploreColombo() {

    const [isExpand, setExpand] = useState(false);

    const ExpandTog = ()=>{
        setExpand( !isExpand );
    };

    const [isExpand1, setExpand1] = useState(false);
    const ExpandTog1 = ()=>{
        setExpand1( !isExpand1 );
    };

    const [isExpand2, setExpand2] = useState(false);
    const ExpandTog2 = ()=>{
        setExpand2( !isExpand2 );
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
        
    const styles0 = {
        position: 'relative',
    };
    const styles1 = {
        position: 'absolute',
        textAlign:'center',
        top:'70%',
        color: 'black',
        fontWeight:'bold',
    };
  return (
    <>
        <Navi0/>
        <Navi/> 
        <div className='container-fluid' style={styles0}>
            <div className='row' >
                <span className='display-1 d-none d-md-block' style={styles1}>Explore Colombo</span>
                <img src={ov5} className='w-100' ></img>
            </div>
        </div>

        <div className='container'>
                <div className='row'>
                    <div className='display-4 col-12 text-center '> City by the sea</div>
                </div>
                <div className='row pb-9 mb-1 textSm  h5'>  
                        <p className=' col-12 text-center textSm  h5'> 
                        Colombo, the commercial capital of Sri Lanka, has a long history as an important port on the ancient east-west trade routes, and has been variously ruled by the Portuguese, Dutch and British. That heritage is reflected in its often charming architecture and unique culture.
                        </p>
                        <p className=' col-12 text-center collapse' id= 'readmo'>
                        The city is fast developing into a regional business hub, buzzing with activity and filled with interesting things to do and see. Visitors will enjoy discovering the best of local authentic cuisines – including some of the world’s most exquisite curries – and some fine historic buildings.Colombo also presents, of course, a cosmopolitan side, with ever-more stylish cafés, shops and galleries opening all the time.Explore, discover, and enjoy getting to know the enthralling city of Colombo.
                        </p>
                        <div className='row '>
                            <a href='#readmo' data-toggle="collapse" className='text-center text-dark link-dark' onClick={ExpandTog} >{isExpand ? 'collapse': 'Read more..'}</a>
                        </div>
                </div>
          </div>
                     {/* Attractions */}
            <div className='container'>
                <div className='row '>
                    <div className=' col-lg-6 col-sm-12 '>
                        <h3 className='text-center h3 textSm1 fw-bold'>Attractions</h3>
                        <h5 className='font-weight-bold h5 textSm0 '>
                        Explore, discover, and enjoy getting to know the enthralling city of Colombo.
                        </h5><br/>
                        <h6 className='font-weight-bold h6 textSm0'><b> Dutch Hospital Precinct</b></h6>
                        <p className='textSm  h5  text-muted'>
                            The Dutch Hospital Shopping Precinct is one of the attractive shopping centres in the country. The building was originally a hospital during the Dutch occupation of Sri Lanka, and is considered to be the oldest building in the historic Colombo Fort area. It was also used as a police station and an apothecary, before being finally converted for its current use in 2011.
                        </p>
                      
                        <p className='collapse' id= 'readmor'>

                            <h6 className='font-weight-bold pt-2 pb-2 h5 textSm0 '><b>Gangaramaya Buddhist Temple</b>   </h6>
                            <p className='textSm  h5  text-muted'>
                                Gangaramaya Temple is one of the important temples in Colombo, and serves as both a place of Buddhist worship and a centre of learning. The temple’s architecture is a mix of Sri Lankan, Thai, Indian and Chinese, and it welcomes visitors of all faiths.
                            </p>

                            <h6 className='font-weight-bold pt-2 pb-2 h5 textSm0'> <b>The Red Mosque</b>  </h6>
                            <p className='textSm  h5  text-muted'>
                            In the heart of the busy streets of Pettah, the red and white structure of the Jami-ul-Alfar Mosque stands as one of the most popular tourist attractions of the city, as well as being one of the oldest mosques in Colombo. Its clock tower and candy-cane-striped minarets, towering over its surroundings, were once used as a landmark by sailors approaching Colombo’s ports.                          </p>

                            <h6 className='font-weight-bold pt-2 pb-2 h5 textSm0'><b>National Museum</b>   </h6>
                            <p className='textSm  h5  text-muted'>
                            Colombo Museum, as it was originally called, was established on 1 January, 1877. Its founder was Sir William Henry Gregory, the British Governor of Ceylon (Sri Lanka) at the time.                          
                            </p>

                            <h6 className='font-weight-bold pt-2 pb-2 h5 textSm0 '> <b>Independence Memorial Hall </b>  </h6>
                            <p className='textSm  h5  text-muted'>
                            Independence Memorial Hall is a national monument that was built to mark the independence of Sri Lanka from British rule, with the restoration of full governing responsibility to a Ceylonese-elected legislature on February 4, 1948.                          
                            </p>

                            <h6 className='font-weight-bold pt-2 pb-2 h5 textSm0 '> <b>Royal Colombo Golf Club</b>   </h6>
                            <p className='textSm  h5  text-muted'>
                            The Royal Colombo Golf Club is the oldest golf club in Sri Lanka. Established in 1880, it is home to the Sri Lanka Golf Union, the governing body of Golf in Sri Lanka. It maintains ties with the Royal and Ancient Golf Club of St. Andrews in Scotland.                          
                            </p>

                            <h6 className='font-weight-bold pt-2 pb-2 h5 textSm0'> <b>Bally’s Casino</b>    </h6>
                            <p className='textSm  h5  text-muted'>
                            Bally’s is a well-established casino with a reputation for respectability and hospitality. The gaming area is spread over an extensive area, with private areas for high rollers.                          
                            </p>                    
                        </p>
                        <div className='row '>
                            <a href='#readmor' data-toggle="collapse" className='text-center text-dark link-dark' onClick={ExpandTog1} >{isExpand1 ? 'collapse': 'Read more..'}</a>
                        </div>
                    </div> 

                    <div className='col-lg-6 pt-4 '>
                      <img className='ma-auto d-block img-fluid col-sm-12' src={EC0}></img>
                  </div>
                </div>
            </div>
                             {/* Quick Facts */}
            <div className='container'>
                <div className='row text-center'>
                    <div className=' col-lg-6  mt-4 pt-4 ml-4 col-sm-12 order-lg-2 '>
                        <h4 className='text-center h3 fw-bold'>Quick Facts</h4>
                        <p className='textSm  h5  text-muted'>Sri Lanka’s commercial capital, Colombo is a cosmopolitan, multi-cultural city, with a long and fascinating history, and a strong cultural identity.</p>
                    </div>
                    <div className='col-lg-6 '>
                         <img className='ma-auto d-block img-fluid col-sm-12 order-lg-1' src={EC1}></img>
                    </div>
                </div>
            </div>
                            {/* Nature */}
            <div className='container'>
                <div className='row text-center'>
                    <div className=' col-lg-6  -4 col-sm-12 '>
                      <h1 className='text-center h2 fw-bold'> Nature</h1><br/>
                      <h5 className='text-center h4'>Viharamahadevi Park </h5>
                      <p className='textSm  h5  text-muted'>Colombo’s largest park was originally called Victoria Park, but renamed in the 1950s for the mother of King Dutugemunu. It is notable for its superb flowering trees, which bloom in March, April and early May.</p>
                      <br/>
                      <h4 className='text-center h5'><b>Galle Face Green</b> </h4>
                      <p className='textSm  h5  text-muted'>Great for a seafront-stroll and for people watching, especially on weekend evenings, this large open park and promenade, created by the British in 1859, covers 13 acres between Galle Road and the Indian Ocean.</p>
                    </div>
                    <div className='col-lg-6 '>
                      <img className='ma-auto d-block img-fluid col-sm-12' src={EC2}></img>
                    </div>
                </div>
            </div>
                              {/* Transportation */}
            <div className='container'>
                <div className='row text-center'>
                    <div className=' col-lg-6  col-sm-12 order-lg-2 '>
                        <h4 className='text-center h3'><b>Transportation</b></h4>
                        <p className='textSm  h5  text-muted'>Discover Colombo in ease with the various transport options available for you in the city.</p>
                        <p className='collapse' id= 'readmo2'>
                            <h6 className='font-weight-bold pt-2 pb-2 text-center h5'>Taxis</h6>
                            <p className='textSm  h5  text-muted'>
                            Taxis ranging from sedans, nano cabs and tuk-tuks are available across the city. Please note that rides between midnight and 6am are subject to a surcharge, in addition to the metered fee.                            
                            </p> <br/>

                            <h4 className='text-center h4'>Public Transit</h4><br/>
                            <h6 className='font-weight-bold pt-2 pb-2 text-center h5'>Trains</h6>
                            <p className='textSm  h5  text-muted'>
                            The Fort Railway Station is the nearest train station to the hotel and is just a five-minute drive.
                            </p> <br/>

                            <h6 className='font-weight-bold pt-2 pb-2 text-center h5'>Buses</h6>
                            <p className='textSm  h5  text-muted'>
                            Public buses are widely available within the city at designated public bus stops. The closest bus stop is one minute's walk from the hotel entrance.</p> <br/>                           
                            </p>

                            <h6 className='font-weight-bold pt-2 pb-2 text-center h5'>By Car</h6>
                            <p className='textSm  h5  text-muted'>
                            StayEase offers a car rental service. Seat belts are compulsory for the driver and all passengers.contact us formore details through the any contact media that provided by us.
                            </p> 

                        <div className='row '>
                            <a href='#readmo2' data-toggle="collapse" className='text-center text-dark link-dark' onClick={ExpandTog2} >{isExpand2 ? 'collapse': 'Read more..'}</a>
                        </div>
                    </div>
                    <div className='col-lg-6 pt-4 order-ig-1'>
                         <img className='ma-auto d-block img-fluid col-sm-12 order-lg-1' src={EC3}></img>
                    </div>
                </div>
            </div>
                    {/* One Galle Face Mall */}
            <div className='container'>                    
                <div className='row text-center'>                    

                    <div className=' col-lg-6 col-sm-12 order-lg-1 '>
                        <h4 className='text-center h3'><b>One Galle Face Mall</b></h4>
                        <p className='textSm  h5  text-muted'>Colombo’s first prestigious and largest shopping development. A premier retail, entertainment and dining paradise to unite local and global shoppers.
                        <br/> <br/>
                        From the outset, the design was planned to offer a fusion of clear sight lines, ease of access and an environment rendered in high quality materials. Providing the globe’s best known and best loved names with optimal display and foot traffic opportunities ensuring that visitors are engaged and satisfied with an experience unlike anything else in Colombo.
                        <br/> <br/>
                        At the rooftop, find a plethora of alfresco dining options with cuisines to suit every taste, all with spectacular views of the ocean makes this a must visit attraction with friends, colleagues or the family. For everyday dining, the high-quality themed food hall offers familiar international brands alongside the best of local flavours with something for every palate and pocket, ensuring an endless stream of activity passing through the mall.</p>
                    </div>                
                    <div className='col-lg-6 order-lg-2'>
                        <img className='ma-auto d-block img-fluid col-sm-12 ' src={EC4} ></img>
                    </div>
                </div>                
            </div>
````````<Fotter/>
    </>
  )
}
