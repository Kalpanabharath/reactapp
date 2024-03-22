import { Component } from "react";
import './index.css';


class Mycomponent extends Component{
    state = { speed:0 }
    increment=()=>{
        this.setState((previous)=>{
            let retspeed=previous.speed== 240 ?{speed:200}:{speed:previous.speed + 10}
            return retspeed
        })

        
    }
    decrement=()=>{
        this.setState((previous)=>{
            let speed=previous.speed==0?{speed:0}:{speed:previous.speed - 10}
           return speed })
    }

render(){
    let { speed }=this.state;
    return (
        <div className="container">
        <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"/>
        <h2>speed is {speed} mph</h2>
        <p>minimum limit is 0 mph & max limit is 200 mph </p>
        <div>
            <button onClick={this.increment}>Accelerate </button>
            <button onClick={this.decrement}> Brake</button>
        </div>
        </div>
        

    )
}
}
export default Mycomponent;