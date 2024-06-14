import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Search } from '@mui/icons-material';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const token = sessionStorage.getItem("token");
  const [rooms,setRooms] = useState([]);
  const [searchTerms, setSearchTerms] =  useState([]);
  const [filterRoom, setFilterRoom] = useState([]);
  const [showMessage, setShowMessage] = useState('');
  const [searchStatus,setSearchStatus] = useState(false);
  const [currentItem,setCurrentItem] = useState([]);
  const[modalOpen, setModalOpen] = useState(false);
  const navigator = useNavigate();
  const[form,setFormData] =  useState(
    {
      id : '',
      charges : '',
      offerPrice : '',
      roomMaxQuantity : ''
    }
  );

  useEffect(() => {
  const getRooms = async () =>{
    try{
        const response = await axios.get("http://localhost:8080/api/v1/admin/get/rooms/exists", {
          headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${token}`,
          }
        });
        if(response.status === 200){
          setRooms(response.data);
          setFilterRoom(response.data);
        }
    }catch(e){
      console.log(e);
    }
  };
  getRooms();
  }, []);

  const handleSendForm = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8080/api/v1/admin/update/room',
        {
          id: currentItem.id,
          charges: form.charges,
          offerPrice: form.offerPrice,
          roomMaxQuantity: form.roomMaxQuantity
        },
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          }
        }
      );
  
      if(response.status == 200){
        setModalOpen(false);
        alert("Successfull");
        window.location.href = "/adminHero";
        
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };
  


const handleSerch = (e) =>{
  const title = e.target.value;
 
  const itemFiltered = rooms.filter(
    room =>{
      const roomName = room.roomName.toLowerCase().trim();
      return roomName.includes(title.toLowerCase().trim());
    }
  );
  setFilterRoom(itemFiltered);
  setSearchTerms(title);
  if(itemFiltered.length !== 0 || searchTerms === ''){
    setSearchStatus(false);
  }

}

const handleSearchItem = () =>{
  const items = rooms.filter(item =>{
    const title = item.roomName.toLowerCase().trim();
    return title.includes(searchTerms.toLowerCase().trim());
  })
  setFilterRoom(items);
  if(items.length == 0){
    setSearchStatus(true)
  }
  else{setSearchStatus(false);}
  setShowMessage('Item is not found ' + `'${searchTerms}'.` );
  
}

const handleUpdate = (room) =>{
    setCurrentItem(room);
    setModalOpen(true);
}

const handleModelClose =() =>{
setModalOpen(false)
}

const handleUpdateForm = (e) =>{
 setFormData({...form, [e.target.name] : e.target.value});
}

const handleRemove = async (id) => {

  try{

    const response = await axios.delete(`http://localhost:8080/api/v1/admin/delete/room/${id}`)

    if(response.status == 200){
      alert('Successfully removed')
      window.location.href = "/adminHero";
    }

  }catch(e){
    alert(e)
  }

}

const handleAddRoom = () =>{

  navigator("/adminRoomAdd");

}

  return (
  <>
        <NavAdmin/>

    <div className="row justify-content-center ">
        <div className="col-md-8 "> 
            <div className="input-group ">
                <input type="text" className="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" value={searchTerms} onChange={handleSerch}/>
              <div className="input-group-append">
                <button className="btn btn-outline-warning btn-lg bg-dark" type="button " onClick={handleSearchItem}><i className="bi bi-search"></i></button>
                <button className="btn btn-outline-warning btn-lg mx-4 bg-dark" type="button" onClick={handleAddRoom}>Add New Room</button>
              </div>
          </div>      
        </div>   
        <div className='row'>
          {searchStatus ? (<div className='fw-3'>{showMessage}</div>) : ''}
        </div>     
    </div>
    <div classNameName='container'>
      <div className="row">
        {filterRoom.map(room => (
        <div className=" col" key={room.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{room.roomName}</h5>
              <p className="card-text">Room Maximum Quantity : {room.roomMaxQuantity}</p>
              <p className="card-text">Charges : {room.charges}</p>
              <p className="card-text">Offer Price : {room.offerPrice}</p>
              <p className="card-text">Available Rooms : {room.availableRooms}</p>
              <div className='row'>
                <div className='col-5 mx-2'><button className="btn btn-primary text-center" data-toggle="modal" onClick={() => handleUpdate(room)}> <center>Update</center></button></div>
                <div className='col-5'> <button className="btn btn-primary" onClick={() => {handleRemove(room.id)}}>Remove</button></div>
              </div>
           
            </div>
          </div>
        </div>
        )     
        )}
      </div>
    </div>
    <div> 
    {modalOpen ? (
        <Modal show={modalOpen} onHide={handleModelClose}>
            <Modal.Dialog style={{ maxWidth: '100%' }}>
          <Modal.Header closeButton>
            <Modal.Title>{currentItem.roomName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='fs-6 text-info bg-dark '>
              <div className='row'>
                <label className='fs-6 col-12'>Enter Charges(Default: {currentItem.charges})</label>
                 <input className='col-10' type='text' value={form.charges} name = 'charges' onChange={handleUpdateForm }/>
              </div>
              <div className='row'>
                <label className='fs-6 col-12'>Enter Offer Price (Default: {currentItem.offerPrice})</label>
                 <input className='col-10' type='text' value={form.offerPrice} name = 'offerPrice' onChange={handleUpdateForm }/>
              </div>
              <div className='row'>
                <label className='fs-6 col-12'>Enter Room Maximum Quantity: (Default: {currentItem.roomMaxQuantity})</label>
                 <input className='col-10' type='text' value={form.roomMaxQuantity} name = 'roomMaxQuantity' onChange={handleUpdateForm }/>
              </div>
             
            </div>
          </Modal.Body>
          <Modal.Footer className='flex-inline'>
         <button className="btn btn-primary col-5" onClick={ handleSendForm }>Save changes</button>           
            <button className="btn btn-secondary col-5" onClick={handleModelClose}>Close</button>
          </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      ): ''}
    </div>
  </>
)
}

export default HeroSection