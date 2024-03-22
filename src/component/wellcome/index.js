let Wellcome=(props)=>{
    let {name,greeting}=props
    return <h1>{name},{greeting}</h1>
}


Wellcome.defaultProps={
    name:"user",
    greeting:"greeting"
}



export default Wellcome

