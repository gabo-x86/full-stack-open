import React from "react";

const Button = (props) =>{
 return(
     <>
        <button onClick={props.handler}>{props.label}</button>
     </>
 )

}

export default Button;