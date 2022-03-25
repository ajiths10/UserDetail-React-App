import React from "react";

const DisplayUser = (props) =>{
    
    return(
    <div>
       <label>name:{props.data.name} </label> 
        <label> Age :{props.data.age}</label>
    </div>
    )
}

export default DisplayUser;