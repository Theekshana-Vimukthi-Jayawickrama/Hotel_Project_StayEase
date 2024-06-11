import React from 'react'
import GimanhalaLounge1 from "../assets/Dining/GimanhalaLounge1.jpg"
import UD from "../assets/Events/uniquedestinationevents.jpg"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import "../Events/event.css"
import { Link } from 'react-router-dom';

const UDEvents = () => {
    const text ={
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "#876a20",

      };
      const styles0 = {
        position: 'relative',
        
    };
    const styles1 = {
        position: 'absolute',
        textAlign:'center',
        top:'80%',
        color: '#fff',
        fontWeight:'bold',
        zIndex: "100",
    };
    const stick = {
        position: "sticky",
        top: "0",
        zIndex: "100",
      };
      const linker = {
        backgroundColor:"#876a20",
        color:'white',
        textDecoration:"none",
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
      };
  return (
    <>
        <Navi0/>
        <Navi/>
        <div className='container' style={styles0}>
            <div className='row ' >
                <span className='h1 d-none d-md-block ' style={styles1}>Unique Destination Events</span>
                <div className='text-center'><img src={GimanhalaLounge1} className='w-75 img-fluid' ></img></div>
            </div>
        </div>
        <div className='container text-center'>
            <div className='row'>
                <h3 style={text} className='h3 border-bottom border-4'>
                Awe-inspiring events with a stunning backdrop
                </h3>
                <p className='h5 text-muted textSm' style={text} >
                Host an unforgettable celebration at Colombo. Imagine enchanting engagements, intimate beachside weddings or lavish multi-day occasions along the pristine southern coastline of Sri Lanka. Allow us to curate a bespoke event across several stunning vistas as you immerse yourself in the island vibes and indulge in the signature Colombo hospitality. <br/><br/>

                Email us at events.slht@Colombo.com or contact us at +94 47 788 8888 for more details.
                </p>
            </div>
        </div><br/>

        <div className='container-fulid'>
            <div className='row'>
                <div className='col-lg-6 '>
                    <img src = {UD} className='img-fluid img-thumbnail'/>                        
                </div>
                <div className='col-lg-6 '>
                    <h4 className='h3 textSm0'>
                    <i>Awe-inspiring events</i><br/><br/>
                    </h4>
                    <p className='h4 text-muted textSm' style={text}>
                    We understand that every celebration or event has its own unique needs and requirements and at Colombo colombo, we are dedicated to making your day extraordinary. <br/><br/>

                    From sweeping proposals, pre-wedding photo shoots, multi-day barefoot beach weddings to exclusive garden celebrations; we offer a secluded setting for beachfront romance. Our meeting spaces offer sophistication amidst a tropical setting with our contemporary ballrooms or smaller meeting spaces with picturesque garden views. Combine inspiring corporate events with thrilling activities for your downtime such as a visit to the nearby wildlife parks.  
                    Book out the entire resort for the ultimate exclusivity, dedicated excursions, ayurvedic spa time and for feasting on the aromatic Sri Lankan flavours at StayEase colombo.
                    </p>
                </div>
            </div>
        </div>
        <Fotter/>
    </>
  )
}

export default UDEvents