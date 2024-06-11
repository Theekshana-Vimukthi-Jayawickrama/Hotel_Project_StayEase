import React from 'react'
import rates from "../assets/Experience/Rates.jpg"
import  Navi from '../Home/Navi'
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'
import "./XP.css"

const Rates = () => {
    
    const text ={
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "#876a20",
      };
      const text1 ={
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "block",
        fontSize:"20px",
      }; 
      const text2 = {
        fontFamily:"Arial, Helvetica, sans-serif",
        color: "block",
        fontSize:"17px",
      } ;
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
                <span className='h1 d-none d-md-block' style={styles1}>Rates</span>
                <div className='text-center'><img src={rates} className='w-100' ></img></div>
            </div>
        </div>

        <div class="container my-3">
        <h2 className='h2 text-center' style={text}><b>Rates</b></h2>
        <p className='h4 text-center' style={text}><b>Tee off amidst natural beauty</b></p>            
        <table class="table table-striped textSm">
            <thead>
            <tr style={text1}>
                <th>Description</th>
                <th>Rates</th>
            </tr>
            <tr style={text} className='h6'>18 Holes - In House Guests</tr>
            </thead>
            <tbody style={text2} >
            <tr>
                <td>Green fee</td>
                <td>LKR 23500 <br/><h6>USD 81.39</h6></td>
            </tr>
            <tr>
                <td>Buggy</td>
                <td>LKR 8000<br/><h6>USD USD 27.71</h6></td>
            </tr>
            <tr>
                <td>Green fee</td>
                <td>LKR 27000<br/><h6>USD USD 93.51</h6></td>
            </tr>
            <tr>
                <td>Buggy (compulsory)</td>
                <td>LKR 6000<br/><h6>USD USD 20.78</h6></td>
            </tr>
            <tr>
                <td>Rental clubs</td>
                <td>LKR 5500<br/><h6>USD 19.05</h6></td>
            </tr>
            </tbody>
        </table>
        </div>
        <Fotter/>

        
    </>
  )
}

export default Rates