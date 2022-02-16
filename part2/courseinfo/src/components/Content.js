import React from 'react'
import Part from './Part'

const Content = ({cdata}) =>{
    return(
        <>
        {cdata.map((element)=>(
            <Part key={element.id} content={element} />
        ))}
        </>
    )
}

export default Content