import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
 
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);
  
  useEffect(()=>{fetchData()},[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const response = await data.json();
    
    setlistOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
if(listOfRestaurants.length ==0 ){
      return <Shimmer/>
    }
  return(
  <div className="body">
    <div className="filter">
      <button className="filter-btn" onClick={()=>{
        const filteredList=listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.2
        )
        setlistOfRestaurants(filteredList);
      }}>Top Rated Restaurants</button>
    </div>
    <div className="res-container">
     {
      listOfRestaurants.map((restaurant) => {
       return(  <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>);
      })
     }
    </div>
  </div>
)};

export default Body;