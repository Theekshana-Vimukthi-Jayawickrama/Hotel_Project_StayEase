import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("userId");
    const [item, setItem] = useState([]);
    const [data, setData] = useState([]);
    const [searchTerms, setSearchTerms] = useState('');
    const [searchStatus, setSearchStatus] = useState(false);
    const [showMessage, setShowMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleGetBooking = async () => {
            const response = await axios.get(`http://localhost:8080/api/v1/room/user/get/bookings/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setItem(response.data);
                setData(response.data);
                console.log(response.data);
            }
        };
        handleGetBooking();
    }, [token, id]);

    const handleSearch = () => {
        const items = item.filter(data => {
            const email = data.email.trim().toLowerCase();
            return email.includes(searchTerms.toLowerCase().trim());
        });
        setData(items);

        if (items.length === 0) {
            setSearchStatus(true);
        } else {
            setSearchStatus(false);
        }
        setShowMessage('Item is not found ' + `'${searchTerms}'.`);
    };

    const handleSearchItem = (e) => {
        const title = e.target.value;
        const items = item.filter(data => {
            const email = data.email.trim().toLowerCase();
            return email.includes(title.toLowerCase().trim());
        });
        setData(items);
        setSearchTerms(title);

        if (items.length !== 0 || searchTerms === '') {
            setSearchStatus(false);
        }
    };

    const handleAddRoomBooking = () => {
        navigate('/RoomBooking');
    };

    const handleStatus = (status02, status01) => {
        if (status02 === true) {
            return "FINISHED";
        } else if (status01 === true) {
            return "PROCESSING";
        } else if (status01 && !status02) {
            return "ENJOYING";
        } else {
            return "UNKNOWN";
        }
    };

    const handleCancel = async (itemId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/room/user/roomBooking/delete/${itemId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                alert("Successfully cancelled");
                window.location.href ="/userHome"
            }else{
              alert("Unsuccessfull")
               window.location.href ="/userHome"
            }
        } catch (e) {
          alert(e)
           window.location.href ="/userHome"
            console.error("Cancellation failed:", e);
        }
    };

    
  const handleLogOutSlider = () => {       
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('adminId')

    window.location.href = '/';    
}

    return (
        <>
            <div className="row justify-content-center ">
                <div className="col-md-8 ">
                    <div className="input-group ">
                        <input type="text" className="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" value={searchTerms} onChange={handleSearchItem} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-warning btn-lg bg-dark" type="button" onClick={handleSearch}><i className="bi bi-search"></i></button>
                            <button className="btn btn-outline-warning btn-lg mx-4 bg-dark" type="button" onClick={handleAddRoomBooking}>Add New Room</button>
                            <button
                              type="button" className="btn btn-warning " onClick={handleLogOutSlider}>  Log out
                            </button> 
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {searchStatus ? (<div className='fw-3'>{showMessage}</div>) : ''}
                </div>
            </div>

            {data.map(item => (
                <div key={item.id} className="card row">
                    <div className="card-body col">
                        <div className='py-2'><h5 className="card-title my-2">Room Type : {item.roomType}</h5></div>
                        <h6 className="card-subtitle mb-2 text-muted py-2">Email : {item.email}</h6>
                        <p className="card-text">Full name : {item.fullName}</p>
                        <p className="card-text">Room quantity : {item.quantity}</p>
                        <p className="card-text">Family name : {item.familyName}</p>
                        <p className="card-text">Check-in Date : {item.checkInDate}</p>
                        <p className="card-text">Check-out Date : {item.checkOutDate}</p>
                        <p className="card-text">You have Nights: {item.nights}</p>
                        <p className="card-text">Mobile : {item.contactNo}</p>
                        <p className="card-text"> Charges : {item.charge}</p>
                        <p className="card-text"> Status : {handleStatus(item.expired, item.processing)}</p>
                        <button className='btn btn-primary text-center' onClick={() => handleCancel(item.id)}>Cancel</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Home;
