import { useState } from "react";
import logo from "../utils/images/logo.png";



const Header =() =>{
  const [loginBtn,setloginBtn] = useState("Login");
  return(
  <div className ="header">
  <div className ="logo-container">
    <img className="logo1" src={logo} alt="logo"></img>
  </div> 
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>Cart</li> 
      <button className="login-btn" onClick={()=>{
        loginBtn == "Login" ? setloginBtn("Logout"):setloginBtn("Login");
      }}>{loginBtn}</button>
    </ul>
  </div>
  </div>
)};


export default Header;