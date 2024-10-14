import { useState } from "react";
import logo from "../utils/images/logo.png";
import { Link } from "react-router-dom";



const Header =() =>{
  const [loginBtn,setloginBtn] = useState("Login");
  return(
  <div className ="header">
  <div className ="logo-container">
    <img className="logo1" src={logo} alt="logo"></img>
  </div> 
  <div className="nav-items">
    <ul>
      <li>
        <Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li>Cart</li> 
      <button className="login-btn" onClick={()=>{
        loginBtn == "Login" ? setloginBtn("Logout"):setloginBtn("Login");
      }}>{loginBtn}</button>
    </ul>
  </div>
  </div>
)};


export default Header;