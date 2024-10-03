import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

//sending the data from the server as a prop
const Body = () =>(
  <div className="body">
    <div className="filter">
      <button className="filter-btn">Top Rated Restaurants</button>
    </div>
    <div className="res-container">
     {
      resList.restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} resData={restaurant}/>
      })
     }
    </div>
  </div>
);

export default Body;