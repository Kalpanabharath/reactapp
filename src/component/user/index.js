import  './index.css'
let Usercomponent=Props=>{
    let {details,deleteUser} = Props
    let{imgurl,name,role, unicNo}=details
    let del=()=>{
      deleteUser(unicNo)
    }
    
   return(<li className="userlist">
             <img src={imgurl} alt='userimg'/>
             <div className='userlistcon'>
               <h3>{name}</h3>
               <p>{role}</p>
             </div>
             <button onClick={del}>
              <img className='btnimg'
              src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
              alt="delkey"
              />
             </button>
  </li>)}
export default Usercomponent;