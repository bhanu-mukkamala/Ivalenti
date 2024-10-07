
import logo from "../utils/images/logo.png";

const Header =() =>(
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
    </ul>
  </div>
  </div>
);

export default Header;