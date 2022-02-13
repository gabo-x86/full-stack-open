import React, {useState} from 'react'
import ReactDom from 'react-dom'


const Anecdote = (props) =>{
  return(
    <>      
      <p>{anecdotes[props.index]}</p>      
    </>
  )
}

const Button = ({onClickHandler, text}) =>{
  return(
    <>
      <button onClick={onClickHandler}> {text} </button>
    </>
  )
}

const Votes = ({index, points}) =>{
  return(
    <>
      <p>has {points[index]} votes</p>
    </>
  )
}

const Statistic = (props) =>{
  const max = Math.max(...props.points);
  const maxIndex = props.points.indexOf(max);
  return(
    <>
      <Anecdote index={maxIndex}/>
      <Votes index={maxIndex}  points={props.points} />
    </>
  )
}


const App = () =>{
  const pointsAnecdotes = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(pointsAnecdotes);

  const setAnecdote = () =>{
    setSelected(() => Math.floor(Math.random() * (anecdotes.length)))
  }

  const setPoint = () =>{
    const pointsCopy = [...points];
    //It's mutable because we didn't work with state-var directly
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  }

  return(
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote index={selected} /> 
      <Votes index={selected} points={points}/>
      <Button onClickHandler={setPoint} text='Vote' />
      <Button onClickHandler={setAnecdote} text='Next anecdote'/>

      <h1>Anecdote with most votes</h1>
      <Statistic points={points} />
    </>    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDom.render(
  <App />,
  document.getElementById('root')
)