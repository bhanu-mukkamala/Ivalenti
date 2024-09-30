import React from "react";
import ReactDOM from "react-dom/client";

import logo from './images/logo.png';

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
// inorder to make the code modular and since there will be a lot of restaurent cards we are creating a
// seperate component because the code inside will be repeating a lot 


const RestaurentCard =()=>(
  <div className="res-card" >
  <h3>Meghana Foods</h3>
  </div>
)

const Body = () =>(
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurentCard/>
    </div>
  </div>
);

const AppLayout = () =>(
  <div className="app">
    <Header/>
    <Body/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);