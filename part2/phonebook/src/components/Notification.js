import React from "react";

const Notification = (props) =>{
    if(props.notification === null){
        return null;
    }else if(props.notification === 'Added'){
        return(
            <div className="success">
                {props.person.name} {props.notification}
            </div>
        )
    }else{
        return(
            <div className="error">
                {props.person.name} {props.notification}
            </div>
        )
    }
    
}

export default Notification;