import React, { useState } from "react";
import ReactDOM from 'react-dom'

const Button = ({onClickHandler, text}) =>{
  return(
    <button onClick={onClickHandler}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  const all = good + neutral + bad;
  const avg = (good-bad)/all;
  const positive = (good/all)*100;
  
  if(all === 0){
    return(
      <>
        <br />
        <br />
        <h3>No feedback given</h3>
      </>      
    )
  }else{
    return(
      <>
        <br />
        <br />
        <h2>Statistics</h2>
        
        <table>
          <tbody>
            <Statistic text='good' value={good} unit='' />
            <Statistic text='neutral' value={neutral} unit='' />
            <Statistic text='bad' value={bad} unit='' />
            <Statistic text='all' value={all} unit='' />
            <Statistic text='average' value={avg} unit='' />
            <Statistic text='positive' value={positive} unit='%' />
          </tbody>
        </table>
        

      </>
    )
  }
}

const Statistic = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.unit}</td>
    </tr>
  )
}

const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);  

  const setValue = (value, setValue) =>{
    const newValue = () => setValue(value);
    return newValue;
  }


  return(
    <div>

      <h1>Give feedback</h1>
      <Button onClickHandler={ setValue(good+1, setGood) } text='good' />
      <Button onClickHandler={ setValue(neutral+1, setNeutral) } text='neutral' />
      <Button onClickHandler={ setValue(bad+1, setBad) } text='bad' />
           
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

}

ReactDOM.render(<App />,
   document.getElementById('root'));
