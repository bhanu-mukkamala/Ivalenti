import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
 
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);
  const [filteredListOfRestaurants,setfilteredListOfRestaurants]= useState([]);
  const [searchBtn,setsearchBtn] = useState("");
  
  useEffect(()=>{fetchData()},[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const response = await data.json();
    
    setlistOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfRestaurants.length == 0 ?<Shimmer/>: (
  <div className="body">
    <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value = {searchBtn} onChange={(e)=>{
          setsearchBtn(e.target.value);
        }}/>
        <button className="search-btn" onClick={()=>{
          const filteredRes= listOfRestaurants.filter((res)=>
            res.info.name.toLowerCase().includes(searchBtn.toLowerCase()));
              
        setfilteredListOfRestaurants(filteredRes);

        }} >Search</button>
      </div>
      <button className="filter-btn" onClick={()=>{
        const filteredList=listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.3
        )
        setfilteredListOfRestaurants(filteredList);
      }}>Top Rated Restaurants</button>
    </div>
    <div className="res-container">
     {
      filteredListOfRestaurants.map((restaurant) => {
       return(  <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>);
      })
     }
    </div>
  </div>
)};

export default Body;