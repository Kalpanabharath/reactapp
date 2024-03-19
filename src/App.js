import logo from './logo.svg';
import './App.css';
import Userprofile from './conponents/UserProfile';
let userDetailsList=[
  {
    imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"bharath",
    role:"Application Engineer" 
  },
  {
    imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"kalpana",
    role:"FrontEnd Developer"},
  {
    imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"keerthana",
    role:"Frontend developer"
  },
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"kalpana",
  role:"frontend developer"
}
]


let App=()=>(
  <div id="maincon">
    <h1 id="conhed">User Profile</h1>
    <ul>
      {userDetailsList.map((eachitem)=>(
        <Userprofile userDetails={eachitem}/>
      ))}
    </ul>
  </div>
)

export default App;
