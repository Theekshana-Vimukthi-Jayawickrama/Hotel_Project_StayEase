import React from 'react'
import './navi.css'
import { Link } from 'react-router-dom'
import logo from '../assets/Home/StayEase_logo.jpg'


const Navi0 = () => {
  const logo1 ={
    width: '130px', 
    height: '80px',
  }
  const logo2 ={
    width: '30%', 
    height: '30%',
  }
  return (
    <div>
      <div className='text-center'><img src={logo} className='img-fluid img-thumbnail d-sm-block d-md-none float-right' style={logo2}></img></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand mnaviUp0" href="#"><img src={logo} className='img-fluid img-thumbnail d-none d-lg-block d-md-block' style={logo1}></img></a>
    
    <div  className=" justify-content-end " >
      <ul className= "d-flex inline-flex p-0 m-0 justify-content-center" type="none">

        <li className="nav-item mnaviUp text1 justify-content-center">
          <Link className=" p-2 text-dark nav-link" to='/'><p>Home</p></Link>
        </li>

        <li className="nav-item text1 justify-content-center">
          <Link className="nav-link mnaviUp p-2" to="/Sign"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg> Sign in </Link>
        </li>

        <li className="nav-item  mnaviUp text1 justify-content-center">
          <Link className="text-dark hover-overlay nav-link textsm p-2"  to='/JoinNow'>Join Now</Link>
        </li>
        

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navi0