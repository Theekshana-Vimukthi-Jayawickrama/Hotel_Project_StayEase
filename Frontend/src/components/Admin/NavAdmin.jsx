import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Container}  from'react-bootstrap'

export default function Navi() {

  const handleLogOutSlider = () => {       
    // Clear token from session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('adminId')

    // Redirect the user to the login page or any other appropriate page
    window.location.href = '/'; // Redirect to the login page       
}

  return (
<>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark w=100 ">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Droped">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center w=100 " id ="Droped"  >
    
      <ul className='navbar-nav nav-tabs'>  
            <li className="nav-item"><Link className="nav-link" to="/adminHero" role="button">HOME</Link> </li> 
            <li className="nav-item"><Link className="nav-link" to="/adminUser" role="button">CUSTOMERS</Link> </li> 
        </ul>
      </div>  

      <div className='d-flex justify-content-end'>
                <button
                  type="button" className="btn btn-warning " onClick={handleLogOutSlider}>  Log out
                </button>      
          </div>
    
  </div>
</nav>
</>



  )
}
