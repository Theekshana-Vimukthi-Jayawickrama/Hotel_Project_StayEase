import React from 'react'
import './fotter.css'
import { Link } from 'react-router-dom';
import { FaHome,FaPhoneAlt,FaEnvelope,FaCcVisa,FaCcMastercard,FaCcJcb,FaFacebook,FaTwitter,FaGoogle,FaInstagramSquare} from "react-icons/fa";

export default function Fotter() {
  return (
     <>
<div className=".container-xxl ">
    <footer className="text-center text-lg-start text-white bcFotter">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0 ">
            {/* <!-- Section: Links --> */}
            <section>
                {/* <!--Grid row--> */}
                <div className="row">
                {/* <!-- Grid column --> */}

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 bet">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                            StayEase Hotel
                    </h6>
                    <p>
                        <FaHome/> Address: Sittrakala Estate, gollface, colombo3 Sri Lanka<br/>
                        <FaPhoneAlt/>  Phone: (94 47) 75 8585<br/>
                        <FaEnvelope/> E-mail: stayEase@StayEase.com
                    </p>

                </div>
                {/* <!-- Grid column --> */}

                <hr className="w-100 d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3 bet">
                    
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                            Check-in / Check-out
                        </h6>
                        <p>
                            We hope you’ve enjoyed your stay from start to finish.
                            Please note the check-in / out times below:
                            Check-in: 2pm
                            Check-out: 12noon
                        </p>

                </div>
                {/* <!-- Grid column --> */}

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3 bet">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Payment Methods</h6>
                    <p>Payment methods we accept:</p>
                    <FaCcVisa size={50}/> <FaCcMastercard size={50}/> <FaCcJcb size={50}/>
                </div>
                

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3 bet ">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                    <div className='d-flex flex-inline '>
                    {/* <!-- Facebook --> */}
                    <a className="btn btn-primary btn-floating m-1 bcFotter"href="#!"role="button"><FaFacebook/></a>

                    {/* <!-- Twitter --> */}
                    <a className="btn btn-primary btn-floating m-1 bcFotter"href="#!"role="button"><FaTwitter/></a>

                    {/* <!-- Google --> */}
                    <a className="btn btn-primary btn-floating m-1 bcFotter"href="#!"role="button"><FaGoogle/></a>

                    {/* <!-- Instagram --> */}
                    <a className="btn btn-primary btn-floating m-1 bcFotter"href="#!"role="button"><FaInstagramSquare/></a>
                </div>
        
                </div>
                </div>
                {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
        </div>
         {/* <!-- Grid container --> */}
        <section className="">
            <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Sign up with us</span>
            <Link to="/JoinNow"><button type="button" className="btn btn-outline-light btn-rounded">Sign up!</button></Link>
            </p>
        </section>     
         {/* <!-- Copyright --> */}
        <div
            className="text-center p-3 bcFotter">© 2023 StayEase International Hotel Management Ltd. All Rights Reserved. ICP license: 1705512222
        </div>
    </footer>
</div>

</>
  )
}
