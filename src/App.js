
import './App.css';
import { Component } from 'react';

class App extends Component{
  state={isloggin:true}
render(){
    let {isloggin}=this.state
    let displaybtn;
    if (isloggin===true){
      displaybtn = <button  type='button'>LOG OUT</button>
    }else{
      displaybtn = <button  type='button'>LOG IN</button>
    }
    return (
      <div className="container">
        <h1>Hello, User</h1>
         {displaybtn}
      </div>
    
    )
  }
}
export default App;
