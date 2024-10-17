import {Component} from "react";

class UserClass extends Component {
  constructor(props) {
      super(props)
      //on how to create a state variable in class components
      this.state ={
        count:0,
        count1:1
        
      }
      console.log("child constructor");
    }
  componentDidMount(){
    console.log("Child mounted");
  }
    
  render(){
    const {name,location}= this.props;
    const {count} = this.state;
    console.log("child returned");

    return(
      
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={()=>{
       this.setState({
        count:this.state.count+1
       })
      }}>Increase count</button>
      <h2>
        Name: {name}
      </h2>
      <h3>Location: {location}</h3>
      <h3>Mail: bmukkamala68@gmail.com</h3>
    </div>
  );
  }
}

export default UserClass;