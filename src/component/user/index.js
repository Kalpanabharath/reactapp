import  './index.css'
let Usercomponent=Props=>{
    let {details,kay} = Props
    let{imgurl,name,role}=details
    
    
   return(<li className="userlist">
             <img src={imgurl} alt='userimg'/>
             <div className='userlistcon'>
               <h3>{name}</h3>
               <p>{role}</p>
             </div>
  </li>)}
export default Usercomponent;