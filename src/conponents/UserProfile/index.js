import './compo.css'
let Userprofile=(props)=>{
    let {userDetails}=props;
    let {imageUrl,name,role}=userDetails;

    return(<li className="container">
    <img src={imageUrl} className="contimg" alt='avatar'/>
    <div className='aboutcon'>
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
    </li>)
}
export default Userprofile; 
