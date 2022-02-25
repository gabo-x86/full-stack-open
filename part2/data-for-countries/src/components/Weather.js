import React, {useState, useEffect} from "react";
import axios from 'axios';


const Weather = ({country}) =>{
    const [weather, setWeather] = useState();


    useEffect(()=>{
        axios   
        .get('http://api.weatherstack.com/current?access_key='+process.env.REACT_APP_API_KEY+'&query='+country.name.common)
        .then((response)=>{
            setWeather(response.data)
        })

    },[country])

    if(weather !== undefined){
        return(
            <>
                <h2>Weather in {weather.location.country}</h2>
                <p><strong>Temperature: </strong>{weather.current.temperature} Celcius</p>
                <img src={weather.current.weather_icons[0]} width='50' height='50'></img>
                <p><strong>Wind: </strong>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
            </>
    
        )
    }else return(<></>)
    
}

export default Weather;