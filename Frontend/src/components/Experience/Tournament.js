import React from 'react'
import rates from "../assets/Experience/Rates.jpg"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import "./XP.css"

const Tournament = () => {
        
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
      }
  return (
    <>
        <Navi0/>
        <Navi/>
        <div className='container' style={styles0}>
            <div className='row' >
                <span className='h1 d-none d-md-block' style={styles1}>Tournament </span>
                <div className='text-center'><img src={rates} className='w-100' ></img></div>
            </div>
        </div>

        <div className='container'>
                <div className='row'>
                    <div className=' border-bottom border-3'>
                        <h3 className='text-center' style={text}>Tournament</h3><br/>
                        <h5 className='text-center h4' style={text}>An event to remember, with the very best of StayEase</h5>
                    </div>
                    <div><br/>
                        <p className='h5 textSm' style={text}>
                        Organise your golf tournament with us and we will tailor-make a memorable golfing experience amidst stunning scenery. A dedicated team member will assist you, from the initial contact and through all the aspects of your event, until we bring it to life. Our commitment to detail and thoughtful collaboration offers countless possibilities for you to customize and create unforgettable experiences.<br/><br/>

                            Please contact -<br/><br/>
                            
                            Luke Sahabandu<br/>
                            Golf Operations Manager<br/>
                            luke.sahabandu@StayEase.com<br/>
                            Tel: (94 76) 668 9611<br/>
                        </p>
                    </div>
                </div>
        </div>
        <Fotter/>
    </>
  )
}

export default Tournament