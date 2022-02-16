import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const Total = (props) =>{
  return(
    <>
      <p>
        Number of exercises {props.contentParts.parts[0].exercises +props.contentParts.parts[1].exercises + 
                            props.contentParts.parts[2].exercises}
      </p>
    </>
  )
}

const App = () => {
  // I added parts-id
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 'fund01',
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        id: 'props01',
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        id: 'compo01',
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return <Course cdata={course} />
  
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
  )