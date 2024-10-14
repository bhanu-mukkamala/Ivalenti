import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
const [items,setItems] = useState(null);

useEffect(()=>{
  fetchMenu();
},[])

//beacuse i am dealing with async operations , i made the fucntion async
const fetchMenu = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=619503&catalog_qa=undefined&submitAction=ENTER");
  const json = await data.json();

  console.log(json);

  setItems(json);
}

if(items === null) return <Shimmer/>

const [name,avgRating,costForTwoMessage,cusines] = items?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
       <h3>{cusines.join(",")}</h3>
    </div>
  )

}


export default RestaurantMenu;