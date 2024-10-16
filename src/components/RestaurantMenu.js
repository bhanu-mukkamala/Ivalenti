import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

const {resId} =useParams();

const resInfo = useRestaurantMenu(resId);


if(resInfo === null) return <Shimmer/>

const {name,avgRating,costForTwoMessage,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.categories?.[0]?.itemCards ||
    [];
console.log(itemCards);



  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{avgRating}(rating) - {costForTwoMessage}</h3>
      <p>{cuisines.join(",")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item)=>(<li key={resId}>{item.card.info.name} - Rs.{item.card.info.price/100  || item.card.info.defaultPrice/100} </li>))}
      
      </ul>
      
    </div>
  );

}


export default RestaurantMenu;