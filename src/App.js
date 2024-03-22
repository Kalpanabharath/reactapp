
import './App.css';
import { Component } from 'react';

class App extends Component{
  state={isloggin:false}
render(){
    let {isloggin}=this.state
    
    return (
      <div className="container">
        <h1>Hello, User</h1>
         {isloggin && <button>LOG OUT</button>}
         {!isloggin && <button>LOG IN</button>}
      </div>
    
    )
  }
}
export default App;
