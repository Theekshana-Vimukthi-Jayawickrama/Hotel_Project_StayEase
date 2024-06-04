import React from 'react'
import { Link } from 'react-router-dom';
import './navi.css'
import {Navbar,Nav,NavDropdown,Container}  from'react-bootstrap'

export default function Navi() {
  return (
<>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark w=100 ">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Droped">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center w=100 " id ="Droped"  >
    
      <ul className='navbar-nav nav-tabs'>
       
      {/* About */}
        <li className="nav-item  ">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">About </a>
          <ul className="dropdown-menu  w-100">
            <div className='row'>
            <div className='col-lg-4 '></div>
              <div className='col-lg-4 '>
                <li ><h4 className='h4'>About The Hotel</h4></li>
                <li><hr className="dropdown-divider"/></li> 
                <li><Link to="/about" className="dropdown-item "> Overview</Link> </li>
                <li><hr className="dropdown-divider"/></li> 
                <li><Link to='/about/exploreColombo'className="dropdown-item" >Explore Colombo</Link></li>
                <li><hr className="dropdown-divider"/></li> 
                <li><Link className="dropdown-item" to="/about/servicesFacilities" >Services and Facilities</Link></li>
                <li><hr className="dropdown-divider"/></li> 
                <li><Link className="dropdown-item" to="/about/mapDirections">Map & Directions</Link></li>
                <li><hr className="dropdown-divider"/></li> 
              </div>
              <div className='col-lg-4  col-md-2'></div>
            </div>
          </ul>
        </li>

      {/* Rooms */}
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">ROOMS & SUITES</a>
          <ul className="dropdown-menu w-100">
            <div className="row">             
              <div className='col-lg-1  d-md-block' ></div>
              <div className="col-lg-3 d-md-block ">
              <li className='mx-4'><h4 className='h4'>Rooms</h4></li>
                <li><Link className="dropdown-item mt-3" to="/rooms/deluxl" >Deluxe</Link></li>
                <li><Link className="dropdown-item mt-3 " to="/rooms/oceanRoom">Premier Ocean</Link></li>
                <li><hr className="dropdown-divider"/></li>
              </div>
                   
              <div className='col-lg-3  d-md-block' >
                <li className='mx-4 '><h4 className='h4'>Suites</h4></li>
                <li ><Link className="dropdown-item mt-3 " to="/rooms/oceanSuite">Premier Ocean Suite</Link></li>
                <li ><Link className="dropdown-item mt-3 " to="/rooms/specialtySuite">Specialty Suite</Link></li> 
                <li><hr className="dropdown-divider"/></li>
              </div>
             
              <div className='col-lg-4  d-md-block'>
              <li className='mx-4'><h6 className='h6 d-lg-none d-lg-block d-md-none'>Connecting Rooms</h6></li>
              <li><Link className="dropdown-item mt-3  d-lg-none d-lg-block d-md-none" to="/rooms/TDConnecting" >Two conneted Deluxe</Link></li>
                <li><Link className="dropdown-item mt-3  d-lg-none d-lg-block d-md-none " to="/rooms/TPOConnecting" >Two conneted Premier Ocean </Link></li>
                <li className='mx-4'><h4 className='h4 d-none d-md-block'>Connecting Rooms</h4></li>
               <li><Link className="dropdown-item mt-3 d-none d-md-block" to="/rooms/TDConnecting" >Two Deluxe Rooms Connecting</Link></li>
                <li><Link className="dropdown-item mt-3 d-none d-md-block " to="/rooms/TPOConnecting" >Two Premier Ocean Rooms Connecting </Link></li>
                <li><hr className="dropdown-divider"/></li> 
              </div>
            </div> 
            <div className='row'>
            <div className='col-lg-5'></div>
              <div className='col-lg-3'>
                 <Link className="dropdown-item mt-3" to="/Sign" >Room Booking</Link>
              </div>
              <div className='col-lg-4'></div>
            </div> 
          </ul>
        </li>

        {/* DINING */}
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">DINING</a>

          <ul className="dropdown-menu w-100" >
            <div className="row">
            <div className='col-lg-1  d-md-block' ></div>
                  <div className='col-lg-4  d-md-block'>
                  <li className='mx-4 '><h4 className='h5 font-weight-bold'>Restaurants</h4></li>
                    <li><Link className="dropdown-item mt-3" to="/dining/bojunhala">Bojunhala</Link></li>
                    <li><Link className="dropdown-item mt-3 " to="/dining/Sera">Sera</Link></li>
                    <li><hr className="dropdown-divider"/></li> 
                  </div>
                  <div className='col-lg-1  d-md-block' ></div>
              <div className='col-lg-4 '>                
                    <li className='mx-4 '><h4 className='h5  d-md-block font-weight-bold '>Bars & Lounges</h4></li>
                    <li><Link className="dropdown-item mt-3 " to= "/dining/gimanhala">Gimanhala Lounge</Link></li>
                    <li><Link className="dropdown-item mt-3 d-none d-md-block" to = "/dining/Ulpatha">Ulpatha Club House and Bar</Link></li>
                    <li><Link className="dropdown-item mt-3 d-lg-none d-md-block d-md-none " to = "/dining/Ulpatha">Ulpatha Club</Link></li>
                    <li><hr className="dropdown-divider"/></li> 
                  </div>        
            </div><hr/>             
            <div className='row m-0 p-0'>
            <div className='col-lg-4  col-md-2'></div>
                  <div className='col-lg-4  col-md-2'>
                      <li><Link className="dropdown-item" to= "/dining/diningOverview">DINING OVERVIEW</Link></li>
                  </div>
                  <div className='col-lg-4  col-md-2'></div>
                  <hr/> 
            </div>  
          </ul>
        </li>

        {/* EVENTS */}
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">EVENTS</a>
          <ul className="dropdown-menu w-100">
          <div className="row"> 
          <div className='col-lg-1  d-md-block ' ></div>
                <div className='col-lg-4 d-md-block'>
                  <li className='mx-4 '><h4 className='h5 d-none d-md-block font-weight-bold'>Meetings and Events</h4></li>
                  <li><Link className="dropdown-item mt-3 mx-3 d-none d-md-block " to="/events/UDEvents">Unique Destination Events</Link></li>
                  <li className='mx-4 '><h4 className='h5 py-2 d-lg-none d-md-none d-md-block '>Meetings and Events</h4></li>
                  <li><Link className="dropdown-item d-lg-none d-md-block d-md-none" to="/events/UDEvents"> Destination Events</Link></li>
                  <li><hr className="dropdown-divider"/></li> 
                </div>
                <div className='col-lg-4 d-md-block'>
                <li className='mx-4'><h4 className='h5 d-none d-md-block font-weight-bold'>Wedding and Celebrationss</h4></li>
                  <li><Link className="dropdown-item mt-3 mx-3  d-none d-md-block" to="/events/wedPlanning" >Wedding Planning</Link></li>
                  <li><Link className="dropdown-item mt-3 mx-3 d-none d-md-block" to="/events/weddingStayEase">Weddings By StayEase</Link></li>
                  <li className='mx-4'><h4 className='h5 font-weight-bold d-lg-none d-md-none'>Wedding and Celebrationss</h4></li>
                  <li><Link className="dropdown-item mt-3 h6 d-lg-none  d-md-none" to="/events/wedPlanning" >Wedding Planning</Link></li>
                  <li><Link className="dropdown-item mt-3 h6 d-lg-none d-md-none" to="/events/weddingStayEase">Weddings By StayEase</Link></li>  
                  <li><hr className="dropdown-divider"/></li> 
                </div>
          </div>    
          </ul>
        </li>
        
        {/* EXPERIENCE */}
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">EXPERIENCE</a>
          <ul className="dropdown-menu w-100" >
          <div className="row"> 
          <div className='col-lg-1  d-md-block ' ></div>
                <div className='col-lg-3'>
                  <li className='mx-4'><h4 className='h4 font-weight-bold d-none d-md-block'>Sports & Recreation</h4></li>
                  <li><Link className="dropdown-item mt-3  d-none d-md-block" to="/experience/sportRecreation">Learn more...</Link></li>
                  <li className='mx-4'><h4 className='h5 font-weight-bold d-lg-none d-md-block'>Sports & Recreation</h4></li>
                  <li><Link className="dropdown-item mt-3 d-lg-none d-md-block" to="/experience/sportRecreation">Learn more...</Link></li>
                  <li><hr className="dropdown-divider"/></li> 
                </div>
                
                <div className='col-lg-4'>
                <li className='mx-4'><h4 className='h4 font-weight-bold d-none d-md-block '>Golf & Country Club</h4></li>
                  <li><Link className="dropdown-item mt-3 mx-3 d-none d-md-block " to="/experience/facilitiesServices">Facilities and Services</Link></li> 
                  <li><Link className="dropdown-item mt-3 mx-3 d-none d-md-block " to="/experience/membership">Membership</Link></li>
                  <li><Link className="dropdown-item mt-3 mx-3 d-none d-md-block" to="/experience/rates" >Rates</Link></li>
                  <li><Link className="dropdown-item mt-3 mx-3 d-none d-md-block " to="/experience/tournament" >Tournament</Link></li>
                  <li className='mx-4'><h4 className='h5 font-weight-bold d-md-none d-lg-none'>Golf & Country Club</h4></li>
                  <li><Link className="dropdown-item mt-3 d-lg-none d-md-block d-md-none"  to="/experience/facilitiesServices">Facilities and Services</Link></li> 
                  <li><Link className="dropdown-item mt-3 d-lg-none d-md-block d-md-none" to="/experience/membership">Membership</Link></li>
                  <li><Link className="dropdown-item mt-3 d-lg-none d-md-block d-md-none" to="/experience/rates" >Rates</Link></li>
                  <li><Link className="dropdown-item mt-3 d-lg-none d-md-block d-md-none" to="/experience/tournament" >Tournament</Link></li>
                  <li><hr className="dropdown-divider"/></li> 
                </div>
                      
                <div className='col-lg-3'>
                <li className='mx-4'><h4 className='h4 font-weight-bold'>For Kids</h4></li>
                  <li><Link className="dropdown-item mt-3 mx-3" to= "/experience/coolZoneKidsClub">Cool Zone Kids Club</Link></li>
                  <li><Link className="dropdown-item mt-3 mx-3" to="/experience/outdoorActivites">Outdoor Activites</Link></li>
                  <li><hr className="dropdown-divider"/></li> 
                </div> 
          </div>
          </ul>
        </li>

        <li className="nav-item"><Link className="nav-link" to="/gallery" role="button">GALLERY</Link> </li> 
        <li className="nav-item"><Link className="nav-link" to="/offers" role="button">OFFERS</Link> </li> 
      </ul>
      </div>  
    
  </div>
</nav>
</>



  )
}
