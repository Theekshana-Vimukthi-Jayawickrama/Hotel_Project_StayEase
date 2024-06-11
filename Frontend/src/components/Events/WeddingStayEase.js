import React from 'react'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import uniquedestinationevents from '../assets/Events/uniquedestinationevents.jpg'
import "../Events/event.css"
import { Link } from 'react-router-dom';

const WeddingStayEase = () => {
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
                <span className='h1 d-none d-md-block  ' style={styles1}>Weddings By StayEase</span>
                <div className='text-center'><img src={uniquedestinationevents} className='w-100 img-fluid' ></img></div>
            </div>
        </div>
        <div className='container text-center'>
            <div className='row'>
                <h3 style={text} className='h2 textSm1 border-bottom border-3 '>
                Weddings By StayEase
                </h3><br/><br/>
                <p className='h5 textSm' style={text} >
                Begin your StayEase wedding journey here. Check out our well-curated collection of venues, bespoke wedding offers, and tasteful inspirations made especially to help you turn your wedding vision into a beautiful reality.                
                </p><br/><br/><br/>

                <h5 className='h4'>
                <b>Find Your Wedding Destination</b>
                </h5><br/>
                <p style={text} className='text-center h5 textSm'>
                Browse through a curation of StayEase Hotels and Resorts’ dynamic wedding destinations and venues. Discover amenities, services, venue capacities, and even floor plans, all in one place.
                </p><br/><br/>

                <h5 className='h4'>
                <b>Celebrations Made with Meaning</b>
                </h5><br/>
                <p style={text} className='text-center h5 textSm'>
                Whether it's a grandiose affair or an intimate celebration, simplify your planning with professionally arranged offers made for you by our event specialists.                
                </p><br/><br/>

                <h5 className='h4'>
                <b>My StayEase Wedding</b>
                </h5><br/>
                <p style={text} className='text-center h5 textSm'>
                Love is in the details—the little quirks, the candid moments, the captured bliss spent with people you love. Take inspiration from our gallery of real weddings to visualize your big day                
                </p><br/><br/>

            </div>
        </div>
        <Fotter/>
    </>
  )
}

export default WeddingStayEase