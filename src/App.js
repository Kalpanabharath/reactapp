import './App.css';
import { Component } from 'react';


class App extends Component{
  state={user:"subscribe"}
    btntext =()=>{
    let {user}=this.state
    if(user==="subscribe"){
        this.setState((prev)=>({user:"subscribed"}))
        
    }else{
      this.setState((prev)=>({user:"subscribe"}))
    }
}   
 
render(){
  let {user}=this.state
     return (
      <div>
        <h1>WELLCOME</h1>
        <p>Happy to learn</p>
        <button onClick={this.btntext}>{user}</button>
      </div>
      
    )
  }
}
export default App;
