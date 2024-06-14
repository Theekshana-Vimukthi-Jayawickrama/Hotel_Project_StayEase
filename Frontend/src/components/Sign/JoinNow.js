import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Navi from "../Home/Navi";
import Navi0 from "../Home/Navi0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Fotter from "../Home/Fotter";
import img1 from "../assets/Sign/{A0916F18-9C30-4178-9668-A70862590F4C}benefits_icon_memberExclusive@3x (1).webp";
import img2 from "../assets/Sign/{F1865767-5B18-4FF6-BCC1-A6D9F44232B2}benefits_icon_mobileCheck@3x.webp";
import img3 from "../assets/Sign/{745742D4-2BDC-442F-AE2A-CE85815A7260}benefits_icon_childrenEatFree@3x.webp";
import img4 from "../assets/Sign/{6554A9E7-7024-4CFA-8190-DF6CF8A060E9}benefits_icon_freeNights@3x.webp";
import axios from "axios";

class JoinNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword0: false,
      showPassword1: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility0 = this.togglePasswordVisibility0.bind(this);
    this.togglePasswordVisibility1 = this.togglePasswordVisibility1.bind(this);
  }

  togglePasswordVisibility0() {
    this.setState(prevState => ({ showPassword0: !prevState.showPassword0 }));
  }

  togglePasswordVisibility1() {
    this.setState(prevState => ({ showPassword1: !prevState.showPassword1 }));
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const { fname, lname, email, password } = this.state;

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
        fullName: fname,
        lastName: lname,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        alert("You are successfully registered");
        window.location.href = "/";
      } else {
        alert("User registration unsuccessful");
      }
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("User registration unsuccessful");
    }
  }

  render() {
    return (
      <>
        <Navi0 />
        <Navi />
        <div className="border border-4">
          <h3 className="text-center font-weight-bold m-4 h2">Join Stayease Circle</h3>
          <h2 className="text-center font-weight-bold m-4 h2">To enjoy member benefits, exclusive member rate and more</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 text-center">
                <img src={img1} className="img-fluid img-thumbnail" alt="Member Exclusive Offers" />
                <h5>Member Exclusive Offers</h5>
              </div>
              <div className="col-lg-3 col-sm-6 text-center">
                <img src={img2} className="img-fluid img-thumbnail" alt="Mobile Check-In & Out" />
                <h5>Mobile Check-In & -Out</h5>
              </div>
              <div className="col-lg-3 col-sm-6 text-center">
                <img src={img3} className="img-fluid img-thumbnail" alt="Children Eat Free" />
                <h5>Children Eat Free</h5>
              </div>
              <div className="col-lg-3 col-sm-6 text-center">
                <img src={img4} className="img-fluid img-thumbnail" alt="Earn Free Nights" />
                <h5>Earn Free Nights</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fname" className="h3">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="form-control"
              required
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
            <br /><br />
            <label htmlFor="lname" className="h3">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="form-control"
              required
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
            <br /><br />
            <label htmlFor="email" className="h3">E-mail:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <br /><br />
            <label htmlFor="password" className="d-flex">
              <h4>Password </h4>
              <button type="button" onClick={this.togglePasswordVisibility0}>
                <FontAwesomeIcon icon={this.state.showPassword0 ? faEyeSlash : faEye} />
              </button>
            </label>
            <input
              type={this.state.showPassword0 ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder="Password"
              required
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <label htmlFor="confirmPassword" className="d-flex">
              <h4>Confirm Password </h4>
              <button type="button" onClick={this.togglePasswordVisibility1}>
                <FontAwesomeIcon icon={this.state.showPassword1 ? faEyeSlash : faEye} />
              </button>
            </label>
            <input
              type={this.state.showPassword1 ? "text" : "password"}
              id="confirmPassword"
              className="form-control"
              placeholder="Repeat Password"
              required
              onChange={(e) => this.setState({ confirmPassword: e.target.value })}
            />
            <small className="form-text text-muted h5">
              Your password must contain at least 8 characters, with a combination of English letters (a - z, A - Z) and numeric digits (0 - 9). At least one of the characters must be a numeric digit.
            </small>
            <br /><br />
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                required
              />
              <label className="form-check-label px-1">
                I have read and agree to the StayEase Circle Terms and Conditions, the Privacy Policy, and the Cookies Policy.
              </label>
            </div>
            <br /><br />
            <input
              type="submit"
              value="Submit"
              className="font-weight-bold text-center h3"
            />
          </form>
          <br /><br />
        </div>
        <Fotter />
      </>
    );
  }
}

export default JoinNow;
