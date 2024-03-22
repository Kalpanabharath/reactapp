import { Component } from "react";
import './index.css';


class Mycomponent extends Component{
    state={counting:0}
    
   onIncrement = () =>{
    this.setState((prevState)=>({counting:prevState.counting+1}))
   }
   render() {
    let {counting}=this.state
    return (
        <div className="container">
            <h3 >Tha buttion has been clicked {counting} times</h3>
            <p>click tha button to increase tha count</p>
            <button onClick={this. onIncrement}>Clickme</button>
        </div>
    )
   }

 }
export default Mycomponent