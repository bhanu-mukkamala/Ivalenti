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

//from the backend we get the data in the form of JSON(JAvascript object notation)

const resList ={
   restaurants : [
  {
    id: 1,
    name: "Pizza Hut",
    image: "https://example.com/pizza-hut.jpg",
    cuisines: ["Pizza", "Italian"],
    avgRating: 4.5,
    costForTwo: "₹500"
  },
  {
    id: 2,
    name: "KFC",
    image: "https://example.com/kfc.jpg",
    cuisines: ["Fast Food", "Chicken"],
    avgRating: 4.2,
    costForTwo: "₹350"
  },
  {
    id: 3,
    name: "Subway",
    image: "https://example.com/subway.jpg",
    cuisines: ["Sandwiches", "Vegetarian"],
    avgRating: 4.0,
    costForTwo: "₹300"
  },
  {
    id: 4,
    name: "McDonald's",
    image: "https://example.com/mcdonalds.jpg",
    cuisines: ["Fast Food", "Burgers"],
    avgRating: 4.3,
    costForTwo: "₹320"
  },
  {
    id: 5,
    name: "Domino's Pizza",
    image: "https://example.com/dominos.jpg",
    cuisines: ["Pizza", "Italian"],
    avgRating: 4.4,
    costForTwo: "₹480"
  },
  {
    id: 6,
    name: "Burger King",
    image: "https://example.com/burger-king.jpg",
    cuisines: ["Fast Food", "Burgers"],
    avgRating: 4.1,
    costForTwo: "₹380"
  },
  {
    id: 7,
    name: "Cafe Coffee Day",
    image: "https://example.com/ccd.jpg",
    cuisines: ["Cafe", "Beverages", "Desserts"],
    avgRating: 4.2,
    costForTwo: "₹250"
  },
  {
    id: 8,
    name: "Barbeque Nation",
    image: "https://example.com/barbeque-nation.jpg",
    cuisines: ["North Indian", "South Indian", "Chinese"],
    avgRating: 4.7,
    costForTwo: "₹1200"
  },
  {
    id: 9,
    name: "Sagar Ratna",
    image: "https://example.com/sagar-ratna.jpg",
    cuisines: ["South Indian", "Vegetarian"],
    avgRating: 4.6,
    costForTwo: "₹400"
  },
  {
    id: 10,
    name: "Biryani Studio",
    image: "https://example.com/biryani-studio.jpg",
    cuisines: ["Biryani", "North Indian"],
    avgRating: 4.3,
    costForTwo: "₹550"
  }
]
}
                  

//here the prop is converted to an JS object and is sent as an argument to the RestaurentCard component
//here props is an argument that is used ot access the resData
const RestaurantCard =(props) => {
  //whatever key you pass in the below rescard, the same will be here as well
 //
  const {resData} = props;
  const{name,image,cuisines,avgRating,costForTwo
    
  } = resData;
  return(

  <div className="res-card" >
    <img className="res-logo" src={image}></img>
   <h3>{name}</h3> 
      <h4>{cuisines.join(',')}</h4> 
      <h4>{avgRating}</h4> 
      <h4>{costForTwo.replace('₹', '')}</h4> 
  </div>
  
  )
};

//sending the data from the server as a prop
const Body = () =>(
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
     {
      resList.restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} resData={restaurant}/>
      })
     }
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