import User from "./User";
import UserClass from "./UserClass";
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    console.log("Parent mounted");
  },[]);
  console.log("parent returned");
  return(
    <div>
      <h1>About</h1>
      <User name="Bhanu"/>
      <UserClass name="Bhanu" location={"Banglore"}/>
    </div>
  )
}

export default About;