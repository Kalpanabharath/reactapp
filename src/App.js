
import './App.css';
import { Component } from 'react';

class App extends Component{
  state={isloggin:false}


  buttonDisplay=()=>{
    let {isloggin}=this.state
    if (isloggin===true){
      return <button  type='button'>LOG OUT</button>
    }
    return <button  type='button'>LOG IN</button>
  }
  render(){
    return (
      <div className="container">
        <h1>Hello, User</h1>
        {this.buttonDisplay()}
      </div>
    
    )
  }
}
export default App;
