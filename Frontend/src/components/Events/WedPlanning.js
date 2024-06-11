import React from 'react'
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import wed from "../assets/Events/wedP.jpg"
import  "../Events/event.css"
import { Link } from 'react-router-dom';

const WedPlanning = () => {
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
                <span className='h1 d-none d-md-block ' style={styles1}>Wedding Planning</span>
                <div className='text-center'><img src={wed} className='w-100 img-fluid' ></img></div>
            </div>
        </div>
        <div className='container text-center'>
            <div className='row'>
                <h3 style={text} className='h3 border-bottom border-3'>
                Prepare for your wedding
                </h3><br/><br/>
                <p className='h5 textSm ' style={text} >
                The tearful smiles of the walk down the aisle. The first kiss as a couple. The celebrations that follow. Your wedding is a chance to craft moments that will last you a lifetime. At Colombo, we want those moments to be truly memorable. Please contact our dedicated team to make your dream come true.
                </p><br/><br/>
            </div>
        </div>
        <Fotter/>
    </>
  )
}

export default WedPlanning