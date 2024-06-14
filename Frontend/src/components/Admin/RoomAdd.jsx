import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import { useNavigate } from 'react-router-dom';

const RoomAdd = () => {
    const [roomTypes, setRoomTypes] = useState([]);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const [formData, setFormData] = useState({
        roomType: '',
        price: '',
        quantity: '',
        offerPrice: ''
    });

    const id = sessionStorage.getItem("userId");

    useEffect(() => {
        const fetchRoomTypes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/admin/get/rooms/available');
                if (response.status === 200) {
                    setRoomTypes(response.data);
                }
            } catch (error) {
                console.error('Error fetching room types:', error);
            }
        };

        fetchRoomTypes();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        try {
            const data = {
                roomName: formData.roomType,
                roomMaxQuantity: formData.quantity,
                charges: formData.price,
                offerPrice: formData.offerPrice
            };

            alert(formData.roomType)

            const response = await axios.post(
                `http://localhost:8080/api/v1/admin/room/add/${id}`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if(response.status === 200){
                alert("Room added successfully")
                window.location.href('/adminHero')
            }
            
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (

<form onSubmit={handleSubmit}>
   
        <NavAdmin/> 
        <div className='container'>
        <div className='row'>
            <div >
                <label htmlFor="roomType">Room Type:</label>
                <select
                    className='form-select my-2'
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        Select a room type
                    </option>
                    {roomTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    className='form-control my-2'
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="offerPrice">Offer Price:</label>
                <input
                    className='form-control my-2'
                    type="number"
                    id="offerPrice"
                    name="offerPrice"
                    value={formData.offerPrice}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="quantity">Max Quantity:</label>
                <input
                    className='form-control my-2'
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className='btn btn-outline-success my-4'>Submit</button>
        </div>
    </div>
</form>
    );
};

export default RoomAdd;
