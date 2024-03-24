import './App.css';
import { Component } from 'react';
import Usercomponent from './component/user';

let users=[{
    imgurl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name:"kalpana",
    role:"front-end-developer",
    unicNo:1
  },
  {
    imgurl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"Bharath",
    role:"Application Engineer",
    unicNo:2
  }
  ]


class App extends Component{
  
render(){
  return (
    <div className='container'>
      <h1>User Details</h1>
      <ul>
        {users.map((each)=> < Usercomponent details={each} key={users.unicNo}/>)}
      </ul>
    
    </div>
  )
 }
}

export default App;
