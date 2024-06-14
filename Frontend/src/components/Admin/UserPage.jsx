import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Search } from '@mui/icons-material';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserPage = () => {
    const token = sessionStorage.getItem("token");
    const [users,setusers] = useState([]);
    const [searchTerms, setSearchTerms] =  useState([]);
    const [filteruser, setFilteruser] = useState([]);
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
        userMaxQuantity : ''
      }
    );
  
    useEffect(() => {
    const getusers = async () =>{
      try{
          const response = await axios.get("http://localhost:8080/api/v1/admin/get/Users", {
            headers: {
              "Content-Type": "application/json",
              'Authorization' : `Bearer ${token}`,
            }
          });
          if(response.status === 200){
            setusers(response.data);
            setFilteruser(response.data);
          }
      }catch(e){
        console.log(e);
      }
    };
    getusers();
    }, []);
  
    const handleSendForm = async () => {
      try {
        const response = await axios.put(
          'http://localhost:8080/api/v1/admin/update/user',
          {
            id: currentItem.id,
            charges: form.charges,
            offerPrice: form.offerPrice,
            userMaxQuantity: form.userMaxQuantity
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
   
    const itemFiltered = users.filter(
      user =>{
        const email = user.email.toLowerCase().trim();
        return email.includes(title.toLowerCase().trim());
      }
    );
    setFilteruser(itemFiltered);
    setSearchTerms(title);
    if(itemFiltered.length !== 0 || searchTerms === ''){
      setSearchStatus(false);
    }
  
  }
  
  const handleSearchItem = () =>{
    const items = users.filter(item =>{
      const title = item.email.toLowerCase().trim();
      return title.includes(searchTerms.toLowerCase().trim());
    })
    setFilteruser(items);
    if(items.length == 0){
      setSearchStatus(true)
    }
    else{setSearchStatus(false);}
    setShowMessage('Item is not found ' + `'${searchTerms}'.` );
    
  }
  
  const handleUpdate = (user) =>{
      setCurrentItem(user);
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
  
      const response = await axios.delete(`http://localhost:8080/api/v1/admin/delete/user/${id}`)
  
      if(response.status == 200){
        alert('Successfully removed')
        window.location.href = "/adminHero";
      }
  
    }catch(e){
      alert(e)
    }
  
  }
  
  
    return (
    <>
          <NavAdmin/>
  
      <div className="row justify-content-center ">
          <div className="col-md-8 "> 
              <div className="input-group ">
                  <input type="text" className="form-control input-text" placeholder="Search products...." aria-label="Recipient's email" aria-describedby="basic-addon2" value={searchTerms} onChange={handleSerch}/>
                <div className="input-group-append">
                  <button className="btn btn-outline-warning btn-lg bg-dark" type="button " onClick={handleSearchItem}><i className="bi bi-search"></i></button>
                </div>
            </div>      
          </div>   
          <div className='row'>
            {searchStatus ? (<div className='fw-3'>{showMessage}</div>) : ''}
          </div>     
      </div>
      <div classNameName='container'>
        <div className="row">
          {filteruser.map(user => (
           
          <div className=" col no-underline"key={user.userId}>
            <div className="card">
              <div className="card-body"> 
                <Link to = {`/userRoomBooking/${user.userId}`}  className='no-underline' style={{ textDecoration: 'none' }}>
                <h5 className="card-title" no-underline>{user.firstName}</h5>
                <p className="card-text no-underline">E-mail : {user.email}</p>
                <p className="card-text no-underline">Full name : {user.firstName} {user.lastName}</p></Link>
                <div className='row'>
                  <div className='col-5'> <button className="btn btn-primary" onClick={() => {handleRemove(user.userId)}}>Remove</button></div>
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
              <Modal.Title>{currentItem.email}</Modal.Title>
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
                  <label className='fs-6 col-12'>Enter user Maximum Quantity: (Default: {currentItem.userMaxQuantity})</label>
                   <input className='col-10' type='text' value={form.userMaxQuantity} name = 'userMaxQuantity' onChange={handleUpdateForm }/>
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

export default UserPage