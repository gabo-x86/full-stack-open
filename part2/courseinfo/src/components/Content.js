import React from 'react'
import Part from './Part'

const Content = ({parts}) =>{
    return(
        <>
        {parts.map((element)=>(
            <Part key={element.id} content={element} />
        ))}
        </>
    )
}

export default Content