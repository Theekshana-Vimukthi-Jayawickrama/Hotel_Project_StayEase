import React from 'react';
import paymentSucess from '../assets/payment/checked.jpg';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/RoomBooking');
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <h3 className='h3 fw-bold'>Payment successful</h3>
      </div>
      <div className='d-flex justify-content-center'>
        <h3 className='h3 fw-bold'>We will send you the room information that you booked and other details via email.</h3>
      </div>
      <div className='d-flex justify-content-center'>
        <h5>Contact NO: (94 47) 75 8585</h5>
      </div>
      <div>
        <h3 className='d-flex justify-content-center'>
          If you want to cancel your booking, please contact our hotel. Contact details are also available in the footer section.
        </h3>
      </div>
      <div className='d-flex justify-content-center'>
        <div>
          <img src={paymentSucess} alt="Payment successful" />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button type="button" className="btn btn-success fw-bold h4" onClick={handleSubmit}>Home</button>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
