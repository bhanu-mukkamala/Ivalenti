import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
const [resInfo,setResInfo] = useState(null);

const {resId} =useParams();


useEffect(()=>{
  fetchMenu();
},[])

//because i am dealing with async operations , i made the fucntion async
const fetchMenu = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+ resId+"&catalog_qa=undefined&submitAction=ENTER");
  const json = await data.json();

  console.log(json);
  setResInfo(json);
  
}

if(resInfo === null) return <Shimmer/>

const {name,avgRating,costForTwoMessage,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
//console.log(itemCards);.cards?.card?.info?


  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{avgRating}(rating) - {costForTwoMessage}</h3>
      
      <p>{cuisines.join(",")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>(<li key={resId}>{item.card.info.name} - Rs.{item.card.info.price/100  || item.card.info.defaultPrice/100} </li>))}
      
      </ul>
      
    </div>
  )

}


export default RestaurantMenu;