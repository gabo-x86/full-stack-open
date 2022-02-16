import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({cdata}) =>{
    return(
        <>
        <Header ctitle={cdata.name} />
        <Content cdata={cdata.parts}/>
        </>
    )
}

export default Course