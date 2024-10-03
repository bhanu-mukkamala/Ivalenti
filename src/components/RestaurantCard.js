
const RestaurantCard =(props) => {
  //whatever key you pass in the below rescard, the same will be here as well
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

export default RestaurantCard;