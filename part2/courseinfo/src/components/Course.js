import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({cdata}) =>{
    return(
        <>
        <Header ctitle={cdata.name} />
        <Content parts={cdata.parts} />
        <Total contentParts={cdata.parts} />
        </>
    )
}

export default Course