import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return(
    <>
    <h1>Half Stack application development</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
    <p>
      {props.partName} {props.exerciseNum}
    </p>
    </>
  )
}

const Total = (props) =>{
  return(
    <>
      <p>
        Number of exercises {props.totalExercises}
      </p>
    </>
  )
}

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header/>
      <Content partName = {part1} exerciseNum = {exercises1}/>
      <Content partName = {part2} exerciseNum = {exercises2}/>
      <Content partName = {part3} exerciseNum = {exercises3}/>
      <Total totalExercises = {exercises1 + exercises2 + exercises3}/>
    </div>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))