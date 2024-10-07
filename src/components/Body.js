import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";




const Body = () =>{
 
  const [listOfRestaurants,setlistOfRestaurants] = useState(resList);

  return(
  <div className="body">
    <div className="filter">
      <button className="filter-btn" onClick={()=>{
        const filteredList=listOfRestaurants.filter(
        (res) => res.avgRating > 4.2
        )
        setlistOfRestaurants(filteredList);
      }}>Top Rated Restaurants</button>
    </div>
    <div className="res-container">
     {
      resList.map((restaurant) => {
       return(  <RestaurantCard key={restaurant.id} resData={restaurant}/>);
      })
     }
    </div>
  </div>
)};

export default Body;