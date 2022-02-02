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
      <Part partName={props.name1} exerciseNum={props.exercise1}/>
      <Part partName={props.name2} exerciseNum={props.exercise2}/>
      <Part partName={props.name3} exerciseNum={props.exercise3}/>
    </>
  )
}

const Part = (props) => {
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
      <Content name1={part1} name2={part2} name3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
      <Total totalExercises = {exercises1 + exercises2 + exercises3}/>
    </div>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))