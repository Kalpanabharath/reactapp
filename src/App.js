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
  },
  {
    imgurl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"Eswaran",
    role:"Weaver",
    unicNo:3
  },
  {
    imgurl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"Renuga devi",
    role:"home maker",
    unicNo:4
  },
  {
    imgurl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"keerthana",
    role:"student",
    unicNo:5
  },

  ]


class App extends Component{
  state={inp:"",userdetails:users}
  inpclick=(event)=>{
    let {inp}=this.state
  this.setState({inp:event.target.value})
  let searchinp = users.filter((each)=>each.name.includes(inp))
  this.setState({userdetails:searchinp})
  // let filteredlist=  users.includes()  
  } 
  deleteUser=(unicNo=>{
    let{userdetails}=this.state
    let delfill = userdetails.filter((each)=>
      each.unicNo!== unicNo
    )
    this.setState({userdetails:delfill})
  })
  
render(){
  let {inp,userdetails}=this.state
 

  return (
    <div className='container'>
      <h1>User Details</h1>
      <input type='search' onChange={this.inpclick}/>
      <ul>
        {userdetails.map((each)=> < Usercomponent details={each} key={users.unicNo} deleteUser={this.deleteUser} />)}
      </ul>

    
    </div>
  )
 }
}

export default App;
