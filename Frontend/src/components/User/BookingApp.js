import React, { useState } from 'react';
import RoomBooking from '../Room/RoomBooking';
import Payment from '../RoomPayment/payment'
import axios from 'axios';

const BookingApp = () => {
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("userId");
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (bookingData) => {
    setFormData(bookingData);
  };

  const handlePaymentSuccess = async (formData) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/room/user/save/booking/${id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        window.location.href = "/userHome"; 
        alert("Data saved successfully");
      }else{
        alert("Unsuccessful");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {!formData ? (
        <RoomBooking onFormSubmit={handleFormSubmit} />
      ) : (
        <Payment formData={formData} onPaymentSuccess={handlePaymentSuccess} />
      )}
    </div>
  );
};

export default BookingApp;
