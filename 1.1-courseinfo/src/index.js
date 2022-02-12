import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  
  return(
    <>
    <h1>{props.title.name}</h1>
    </>
  )
}

const Content = (props) => {

  return(
    <>
      <Part part={props.contentParts.parts[0]}/>
      <Part part={props.contentParts.parts[1]}/>
      <Part part={props.contentParts.parts[2]}/>
    </>
  )
}

const Part = (props) => {
  console.log(props.part['name']);
  return(
    <>
      <p>
        {props.part['name']} {props.part['exercises']}
      </p>
    </>
  )
}

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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return (
    <div>
      <Header title = {course}/>
      <Content contentParts = {course}/>
      <Total contentParts = {course}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
  )