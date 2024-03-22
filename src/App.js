import './App.css';
import { Component } from 'react';
import Wellcome from './component/wellcome';

class App extends Component{
  state={isloggin:false}
render(){
    let {isloggin}=this.state
    
    return (
      <div className="container">
        <Wellcome />
         {isloggin && <button>LOG OUT</button>}
         {!isloggin && <button>LOG IN</button>}
      </div>
    
    )
  }
}
export default App;
