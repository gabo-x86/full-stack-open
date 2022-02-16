import React from 'react'
import Course from './components/Course'

const App = ({courses}) =>{
    return (
        <>
            {courses.map((course)=>(
                <Course key={course.id} cdata={course} />
            ))}
        </>
    )
}

export default App;