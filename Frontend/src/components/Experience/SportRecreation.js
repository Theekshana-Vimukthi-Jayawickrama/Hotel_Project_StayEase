import React, { useState } from 'react'
import R1 from "../assets/Experience/R1.png"
import ep2 from "../assets/Home/ep2.jpg"
import Altitude from "../assets/Experience/Altitude.jpg"
import Rentals from "../assets/Experience/Rentals.webp"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import "./XP.css"

const SportRecreation = () => {


  const [isExpand1, setExpand1] = useState(false);
  const ExpandTog1 = ()=>{
      setExpand1( !isExpand1 );
  };

  const [isExpand2, setExpand2] = useState(false);
  const ExpandTog2 = ()=>{
      setExpand2( !isExpand2 );
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
    zIndex: "100",
};

const text1 ={
  fontFamily:"Arial, Helvetica, sans-serif",
  color: "#876a20",
  textDecoration: 'none'
};

  return (
    <>
        <Navi0/>
        <Navi/>   
      <div>
        <div className='container-fulid' style={styles0}>
            <div className='row'>
                <span className='h1 d-none d-md-block' style={styles1}>Sports & Recreation</span>
                <div className='text-center'><img src={R1} className='img-fluid rounded mx-auto  w-75' ></img></div>
            </div>
        </div>
      </div> 

      <div className='container border' style={text1}>
          <div className='row'>
            <h2 className='h2 text-center my-3 '><i>A beach front sanctuary</i></h2>
            <h4 className='h3 text-center my-2 '>to relax or stay active</h4>
            <p className='text-center my-2 h5 textSm text-muted'>Whether your plans are for relaxation in the tropics or to stay active, we offer you a range of activities that will leave you spoilt for choice!<br/><br/>
              Three swimming pools amidst stunning settings, a thrilling 7-metre-high trapeze and winding nature trails are just some of what we present to you.
            </p>
          </div>
      </div>

      <div className='container'>
        <div className='row border'>

          <div className='col-lg-6 px-3'>
                <h2 className='h3 text-center my-4' style={text1}><i>Adventure Activities</i></h2>
                <p className='text-center my-2 h5 textSm text-muted'>
                <b>Trapeze</b><br/><br/>
                The thrills of our 7-metre-high trapeze is a must-try when at the resort. Our in-house expert trapeze artist will teach first-timers the necessary tips, whilst our more daring guests can try a trick or two.<br/><br/>
                
                </p>
                <p id='readmo1' className='collapse text-center my-2 text-muted h5 textSm'>
                  <b>Archery</b><br/><br/>
                     Have a crack at using a bow and arrow and hone your skills of precision targeting as you practice Archery with our trainers.<br/><br/>
                    <b>Bike Tours</b><br/>

                    Colombo with its unique terrain offers amazingly scenic routes for guided bike tours that let you experience the true beauty of the south coast.<br/><br/>

                    A guided tour to Godawaya lets you ride along the resort’s dramatic coastline, concluding with a scenic hike through extraordinary rock formations from where you can watch a mesmerising sunset over the Indian Ocean. A picnic can be served as part of the resort’s Dine by Design programme.<br/><br/>

                    The guided Paddy Field tour takes you through quaint villages that seemingly blend into miles of picturesque paddy fields. Your tour guide will share interesting facts about rice cultivation in the south of Sri Lanka, and if you are lucky, you will be able to strike up a conversation with a local farmer for more interesting snippets<br/><br/>
                </p>          
                <div className='row '>
                  <a href='#readmo1' data-toggle="collapse" className='text-center text-dark link-dark' onClick={ExpandTog1} >{isExpand1 ? 'collapse': 'Read more..'}</a>
                </div>
          </div>
          <div className='col-lg-6 my-4 px-3 text-center'>
              <img src={ep2} className='img-fluid rounded mx-auto'/>
          </div>

        </div>
      </div>

      <div className='container'>
        <div className='row border'>

          <div className='col-lg-6 px-3 order-lg-2'>
                <h2 className='h3  text-center my-4' style={text1}><i>Adventure Activities</i></h2>
                <p className='text-center my-2 h5 textSm text-muted'>
                <b>Altitude</b><br/><br/>
                    Altitude by StayEase Colombo is a first-of-its-kind adventure experience in Sri Lanka! Travel treetop to treetop as you make your way through the challenges of suspended rope obstacles, log walks, cargo nets and more.

                    Hang time here with the whole family or bonding with your corporate team over a range of activities will let you push the limits of balance,, strength and courage, whilst you have a whole lot of fun.

                    .This judgement-free zone is ideal for first-timers and hardcore thrill seekers alike.
                </p>
          </div>
          <div className='col-lg-6 my-4 px-3 order-lg-1 text-center'>
              <img src={Altitude} className='img-fluid rounded mx-auto'/>
          </div>

        </div>
      </div>
    
      <div className='container'>
        <div className='row border'>

          <div className='col-lg-6 px-3'>
                <h2 className='h3 text-center my-4' style={text1}><i>Outdoor Activities</i></h2>
                <p className='text-center my-2 h5 textSm text-muted'>
                <b>Altitude</b><br/><br/>
                   Start your day with the bliss of outdoor yoga as the gentle ocean breeze carries over, stay pumped with the adrenalin rush of a game of volleyball or even try your hand at a bocce ball. <br/> <br/>
 
                        There is so much for you to try! <br/> <br/>

                        Bike rides <br/>

                        Aqua aerobics  <br/>

                        Cricket, football and volleyball <br/>

                        Yoga <br/>

                        Golf discovery <br/>

                        Bocce ball <br/>

                        Pole tennis  <br/>

                        Nature walks and beach walks <br/>

                        Jogging trails <br/>
                </p>
          </div>
          <div className='col-lg-6 my-4 px-3 text-center'>
              <img src={Rentals} className='img-fluid rounded mx-auto'/>
          </div>
        </div>
      </div>

        
      <div className='container'>
        <div className='row border'>

          <div className='col-lg-6 px-3 order-lg-2'>
                <h2 className='h3 text-center my-4' style={text1}><i>Swimming Pools & Health Club</i></h2>
                <p className='text-center my-2 h5 textSm text-muted'>
                <b>Swimming Pools</b><br/><br/>
                Our three swimming pools offer you something for your every mood.
                The expansive Lagoon pool is set alongside the resort’s main restaurant and is the perfect place to loll around as you enjoy poolside service for light eats and refreshing tropical cocktails from the Pool Bar. The Lagoon pool also connects to the Kids pool and allows for fun for the entire family.               </p>
                <p id='readmo2' className='collapse text-center my-2 h5 textSm text-muted'>
                    he Sunset Pool offers spectacular views of the magnificent Indian Ocean and gardens around. To better enjoy the serenity here, this pool is exclusively for adults.<br/><br/>

                    The Kid’s Pool connected to the Lagoon Pool is designed for our very own little guests allowing them to swoosh through the wading pool with winding slides and more.<br/><br/>

                    <b>Health Club</b><br/><br/>

                    Stay committed to your fitness regime when on holiday at our Health Club, with its state-of-the-art equipment including treadmills, cross-trainers, step machines, free weights and more. Our personal trainers will guide you through a routine for your specific goals.
                </p>          
                <div className='row '>
                  <a href='#readmo2' data-toggle="collapse" className='text-center text-dark link-dark' onClick={ExpandTog2} >{isExpand2 ? 'collapse': 'Read more..'}</a>
                </div>
          </div>
            <div className='col-lg-6 my-4 px-3 text-center order-lg-1'>
                <img src={ep2} className='img-fluid rounded mx-auto'/>
            </div>
        </div>
      </div>
      <Fotter/>
    </>
  )
}

export default SportRecreation