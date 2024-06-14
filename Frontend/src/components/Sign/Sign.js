import React, { Component } from "react";
import Navi from "../Home/Navi";
import Navi0 from "../Home/Navi0";
import Fotter from "../Home/Fotter";
import img1 from "../assets/Sign/bey-offer-header-D-100521.jpeg";
import axios from "axios";

export default class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


   handleSubmit=async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    await this.handleRegister(email, password);
  }

  handleRegister = async (email,password) =>{
          try{
            const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate",{
        headers:{
          "Content-Type": "application/json",
        },
        email: email,
        password: password
      });
      if(response.status === 200){
        const responseData = response.data;
        sessionStorage.setItem('token', responseData.token);
        sessionStorage.setItem('userId',responseData.userId)
        sessionStorage.setItem('role',responseData.role)
        if(sessionStorage.getItem('role') == "ADMIN" ||sessionStorage.getItem('role') == "SUPERADMIN" ){
          window.location.href = "/adminHero";
        }else if(sessionStorage.getItem('role') == "USER".toUpperCase()){
          window.location.href ="/userHome";
        }
        
      }else{
        alert("Invaild")
      }
      }catch(e){
        alert("Invaild")
      }
 }

  render() {
    return (
      <>
        <Navi0 />
        <Navi />
        <div className="container">
          <br />
          <h4 className="h4 text-center">Wellcome to StayEase</h4>
          <img src={img1} className="w-100"></img>
        </div>
        <div style={{
          background: '#ff9400',
        }}></div>

        <div style={{ background: "#ff9400" }}>
          <form className="container" onSubmit={this.handleSubmit}>
          <div className=" m-4">
              <label for="exampleInputEmail1" className="h4">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                onChange={(e) => this.setState({email: e.target.value})}
              />
              <small id="emailHelp" className="form-text text-muted h5 ">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className=" m-4">
              <label for="Password1" className="h4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => this.setState({password: e.target.value})}
              />
            </div>
            <div className=" m-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label px-1" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div className="h3 text-center rounded-pill">
              <button
                type="submit"
                className="border border-warning rounded-pill btn-primary p-3 m-4 "
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Fotter />
      </>
    );
  }
}
