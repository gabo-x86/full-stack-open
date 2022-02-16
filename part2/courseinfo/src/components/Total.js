import React from 'react'

const Total = (props) =>{
    return(
      <>
        <p><strong>
            Total of {props.contentParts.reduce((acc,part)=>(acc+part.exercises),0)} exercises
        </strong></p>
      </>
    )
}

export default Total;