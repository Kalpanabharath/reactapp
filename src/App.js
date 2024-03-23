import './App.css';
import { Component } from 'react';


class App extends Component{
  state={mode:"Makedarkmode",clss:"lightmode"}
  
  
  findmode =()=>{
    let {mode,clss}=this.state
    if(mode==="Makedarkmode"){
      this.setState({mode:"Makelightmode" ,clss:"darkmode"})

    }else{
      this.setState({mode:"Makedarkmode",clss:"lightmode"})
    }
    
}   
 
render(){
  let {mode,clss}=this.state
     return (
      <div className={clss}>
        <h1>Click to change mode</h1>
        <button onClick={this.findmode} >{mode}</button>
      </div>
      
    )
  }
}
export default App;
