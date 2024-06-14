import React from 'react'
import { Form } from 'react-router-dom'
import Fotter from '../Home/Fotter'
import './payment.css'
import Navi0 from '../Home/Navi0'
import { Link } from 'react-router-dom';


const Payment = ({ formData, onPaymentSuccess }) => {    
    const handlePayment =() =>{
        onPaymentSuccess(formData);
    }
  return (


    <> 
    <Navi0/>
   
    <div className="container p-0 m-4">
        <div className="card px-4">
            <p className="h8 py-3">Payment By Credit/Debit Card</p>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Owner Name</p>
                        <input className="form-control form-controls mb-3" type="text" placeholder="Owner Name"/>
                </div>
              </div>
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input className="form-control form-controls mb-3" type="text" placeholder="1234 5678 435678"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Expiry</p>
                        <input className="form-control form-controls mb-3" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input className="form-control form-controls mb-3 pt-2 " type="password" placeholder="***"/>
                    </div>
                </div>
            </div>       
       <button onClick={handlePayment} className="btn btn-primary h4"><center> Pay </center></button>
        </div>         
    </div><br/><br/>
    <Fotter/>
 
    </>
  )
}

export default Payment
