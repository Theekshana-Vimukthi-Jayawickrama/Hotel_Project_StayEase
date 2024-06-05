import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, differenceInDays, isAfter } from 'date-fns';
import Navi0 from '../Home/Navi0'
import Fotter from '../Home/Fotter'

const RoomBooking = () => {
  const [rooms, setRooms] = useState([]);
  const [rType, setRType] = useState('Deluxe');
  const [fName, setFName] = useState('');
  const [rQuantity, setRQuantity] = useState(0); // Changed default value to 0
  const [ffName, setFFName] = useState('');
  const [email, setEmail] = useState('');
  const [pNumber, setPNumber] = useState('');

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const today = new Date();
  const nextMonth = addDays(today, 30);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rooms');
        const roomData = response.data;
        setRooms(roomData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleRoomType = (e) => {
    setRType(e.target.value);
  };

  const handleFullName = (e) => {
    setFName(e.target.value);
  };

  const handleRoomQuantity = (e) => {
    setRQuantity(Number(e.target.value)); // Convert to number
  };

  const handleFamilyName = (e) => {
    setFFName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPNumber(e.target.value);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const isDateEnabled = (date) => {
    return isAfter(date, today) && isAfter(nextMonth, date);
  };

  const isCheckOutDateEnabled = (date) => {
    return isAfter(date, checkInDate);
  };

  const calculateNights = () => {
    let nightCount = 0;
    if (checkInDate && checkOutDate) {
      const nights = differenceInDays(checkOutDate, checkInDate);
      nightCount = nights;
      return nights;
    }
    return nightCount;
  };

  let nightsCount = calculateNights();

  const checkRoomCount = () => {
    const roomCount = 5;
    let roomQuantity = 5;

    if (rooms.length > 0) {
      const roomTypeData = rooms.find((room) => room.type === rType);
      if (roomTypeData && roomCount > roomTypeData[`available${rType}`]) {
        if (roomTypeData[`available${rType}`] === 0) {
          setIsFormDisabled(true);
        } else {
          roomQuantity = roomTypeData[`available${rType}`];
        }
      }
    }

    return roomQuantity;
  };

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  useEffect(() => {
    const roomCount = 5;
    if (rooms.length > 0) {
      const roomTypeData = rooms.find((room) => room.type === rType);
      if (roomTypeData && roomCount > roomTypeData[`available${rType}`]) {
        if (roomTypeData[`available${rType}`] === 0) {
          setIsFormDisabled(true);
        } else {
          setRQuantity(roomTypeData[`available${rType}`]);
        }
      }
    }
  }, [rType, rooms]);

  const charge = () => {
    let roomChargers = 0;

    if (rType === 'Deluxe') {
      let charges = rooms.length > 0 ? rooms[0]['Delux_Price'] * rQuantity * nightsCount : 0;
      roomChargers = charges;
    } else if (rType === 'Premier ocean') {
      let charges = rooms.length > 0 ? rooms[0]['Premier_ocean'] * rQuantity * nightsCount : 0;
      roomChargers = charges;
    } else if (rType === 'Premier ocean suite') {
      let charges = rooms.length > 0 ? rooms[0]['Premier_ocean_suite'] * rQuantity * nightsCount : 0;
      roomChargers = charges;
    } else if (rType === 'Speciality') {
      let charges = rooms.length > 0 ? rooms[0]['Speciality'] * rQuantity * nightsCount : 0;
      roomChargers = charges;
    } else if (rType === 'Two Deluxe Room Connecting') {
      let charges = rooms.length > 0 ? rooms[0]['TDRConnecting'] * rQuantity * nightsCount : 0;
      roomChargers = charges;
    } else if (rType === 'Two Premier Ocean Rooms Connecting') {
      let charges = rooms.length > 0 ? rooms[0]['TPORConnecting'] * rQuantity * nightsCount : 0;
      roomChargers = charges;
    }

    return roomChargers;
  };

  const roomCharge = charge();

//post
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rType);

    const bookingData = {
      rType,
      fName,
      rQuantity,
      ffName,
      email,
      pNumber,
      checkInDate,
      checkOutDate,
      roomCharge, 
      nightsCount,
    };

   

    // Make a POST request to save the data
    axios.post('http://localhost:5000/roombooking', bookingData)
      .then((response) => {
        console.log('Data saved successfully:', response.data.message);
        alert("Data saved successfully");
        window.location.href = "/RoomPrices";
  
      })
      .catch((error) => {
        console.error('Error saving data:', error);

      });
  };


  return (
    <div>
        <Navi0/>
      <form onSubmit={handleSubmit}>
        <div className='row h3 m-4'>
          <div className='col-lg-6'>
            <label htmlFor="type" >Select Room type</label>
            <select id="type" name="Rooms" value={rType} onClick={checkRoomCount} onChange={handleRoomType} className='form-control' required>
              <option value="Deluxe">Deluxe</option>
              <option value="Premier ocean">Premier ocean</option>
              <option value="Premier ocean suite">Premier ocean suite</option>
              <option value="Speciality">Speciality</option>
              <option value="Two Deluxe Room Connecting">Two Deluxe Room Connecting</option>
              <option value="Two Premier Ocean Rooms Connecting">Two Premier Ocean Rooms Connecting</option>
            </select>
          </div>

          <div className='col-lg-6'>
            <label htmlFor='Fname'>Full name</label>
            <input type="text" id='Fname' name='Fname' value={fName} onChange={handleFullName} className='form-control' />
          </div>
        </div>

        <div className='row form-group h3 m-4'>
          <div className='col-lg-6'>
            <label htmlFor='roomQuantity'>Select Room quantity</label>
            <input type="number" id='roomQuantity' name='roomQuantity' min="1" max={checkRoomCount()} value={rQuantity} onChange={handleRoomQuantity} className='form-control' disabled={isFormDisabled} />
          </div>
          <div className='col-lg-6'>
            <label htmlFor='FFname'>Family name</label>
            <input type="text" id='FFname' name='FFname' value={ffName} onChange={handleFamilyName} className='form-control' />
          </div>
        </div>

        <div className="calendar-container row m-4">
          <div className="check-in-container col-lg-4">
            <h3>Check-in Date</h3>
            <DatePicker
              selected={checkInDate}
              onChange={handleCheckInDateChange}
              minDate={today}
              filterDate={isDateEnabled}
              placeholderText="Select check-in date"
            />
          </div>
          <div className="check-out-container col-lg-4">
            <h3>Check-out Date</h3>
            <DatePicker
              selected={checkOutDate}
              onChange={handleCheckOutDateChange}
              minDate={checkInDate}
              filterDate={isCheckOutDateEnabled}
              placeholderText="Select check-out date"
            />
          </div>
          <div className="nights-container col-lg-4">
            <h3>You have Nights: {calculateNights()}</h3>
          </div>
        </div>

        <div className='row m-4'>
          <div className='col-lg-6 h3 '>
            <label htmlFor='mail'>E-mail</label>
            <input id='mail' type='email' value={email} onChange={handleEmail} className='form-control' />
          </div>
          <div className='col-lg-6 h3'>
            <label htmlFor='PNumber'>Mobile</label>
            <input id='PNumber' type='tel' value={pNumber} onChange={handlePhoneNumber} placeholder='0553349595' maxLength="10" pattern="[0-9]{10}" className='form-control' />
          </div>
        </div>
        <hr/>
      <div className='container'>
        <h2 className='text-center h2 fw-bold'>Charges</h2>
        <div className='row'>
          <h3 className='col-lg-6'>Room charges</h3>
          <h3 className='col-lg-6'>{roomCharge}</h3>
        </div>
      </div>
      <hr/>
      <div className='d-flex justify-content-center'>
        <input type="submit" value="Submit" className='btn btn-primary btn-lg btn-block d-flex justify-content-center fw-bold' />
      </div>
      </form>
      <br/>
      <Fotter/>
   
    </div>
  );
};

export default RoomBooking;
